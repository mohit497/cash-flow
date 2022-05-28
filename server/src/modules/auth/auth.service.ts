import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.userId,
      role: user.role.toLowerCase(),
      org: user.org,
    };
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async loginGraphql(user: any, internal = false) {
    const payload = user;

    try {
      const user = await this.usersService.findOne(payload.username);

      if (user.password === user?.password || internal) {
        return {
          access_token: this.jwtService.sign({
            username: user.email,
            org: user.org,
            sub: user.id,
            activated: user.activated,
            role: user.role.toLowerCase(),
          }),
        };
      } else {
        console.log('graphql login failed password not match', user);
        throw new UnauthorizedException();
      }
    } catch (e) {
      console.log('Graphql login failed', e);
      throw new InternalServerErrorException(e);
    }
  }
}
