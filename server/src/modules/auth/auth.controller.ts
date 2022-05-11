import {
  Controller,
  Request,
  Post,
  UseGuards,
  HttpCode,
  Body,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('auth')
@Controller()
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
  @Post('auth/login')
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
          console.log('author');
          const { username, org, role } = this.jwt.decode(token) as {
            username: string;
            org: string;
            role: string;
          };
          console.log(username, org, role);
          return {
            'X-Hasura-Role': role,
            'X-Hasura-User-Id': username,
            'X-Hasura-Org-Id': org,
          };
        }
      } catch (e) {
        console.log(' not author', e);
      }
    }

    try {
      if (this.jwt.verify(req.headers['x-hasura-student-token'])) {
        console.log('student access');
        const { username } = (await this.jwt.decode(token)) as {
          username: string;
        };

        return {
          'X-Hasura-Role': 'student',
          'X-Hasura-User-Id': username,
        };
      }
    } catch (e) {
      console.log('not student', e);
    }

    console.log('public access');
    return {
      'X-Hasura-Role': 'public',
    };
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login/graphql')
  loginGraphql(@Body() req: { username: string; password: string }) {
    return this.authService.loginGraphql(req);
  }
}
