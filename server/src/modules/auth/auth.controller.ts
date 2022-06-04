import {
  Controller,
  Request,
  Post,
  UseGuards,
  HttpCode,
  Body,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiBearerAuth, ApiBody, ApiHeader, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('auth')
@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService, private jwt: JwtService) {}

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
    },
  })
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('/login/v2')
  @HttpCode(200)
  async loginv2(@Body() req) {
    const token =
      req.headers.Authorization?.toString()?.split(' ')[1] ||
      req.headers.authorization?.toString()?.split(' ')[1];
    console.log('token received', token);
    if (!!token) {
      try {
        if (this.jwt.verify(token)) {
          console.log('jwt verified');

          const { id, org, role, role_id } = this.jwt.decode(token) as {
            id: string;
            org: string;
            role: string;
            role_id: string;
          };
          console.log(id, org, role);
          return {
            'X-Hasura-Role': role,
            'X-Hasura-User-Id': id,
            'X-Hasura-Org-Id': org,
            'X-Hasura-Role-Id': role_id,
          };
        }
      } catch (e) {
        console.log(' not author', e);
      }
    }

    console.log('public access');
    return {
      'X-Hasura-Role': 'public',
    };
  }

  @Post(`/switch`)
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        roleId: {
          type: 'string',
        },
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiBearerAuth('JWT')
  async switchRole(@Req() req, @Body() body) {
    console.log(req);
    const token =
      req.headers?.Authorization?.toString()?.split(' ')[1] ||
      req.headers?.authorization?.toString()?.split(' ')[1];
    if (!!token) {
      try {
        if (this.jwt.verify(token)) {
          const { username, role } = this.jwt.decode(token) as {
            username: string;
            org: string;
            role: string;
          };
          console.log('Change Role Request received by  - ', username, role);
          return this.authService.switchRole(username, body.roleId);
        }
      } catch (e) {
        console.log('not author');
      }
    } else {
      return new UnauthorizedException();
    }
  }

  @Post(`/register`)
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        orgname: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
    },
  })
  @ApiHeader({ name: 'x-hasura-admin-secret' })
  @HttpCode(200)
  async registerOrg(@Req() req, @Body() body) {
    return this.authService.registerOrg(
      body.email,
      body.orgname,
      body.name,
      body.password,
    );
  }
}
