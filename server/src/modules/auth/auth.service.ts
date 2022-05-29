import { Injectable, NotFoundException } from '@nestjs/common';
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
      username: user.email,
      id: user.id,
      role: user.role.toLowerCase(),
      org: user.org,
      role_id: user.role_id,
    };
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  /**
   *
   * @param email
   * @param role_id
   */
  async switchRole(email: string, role_id: string) {
    console.log('Switch role to ', email, role_id);
    const user = await this.usersService.findOne(email);

    const newRole = user.activeRolesByUser.filter((r) => r.id === role_id);

    if (newRole.length === 0) {
      return new NotFoundException('This is not a valid role for this user');
    }

    return {
      access_token: this.jwtService.sign({
        username: user.email,
        org: user.org,
        sub: user.id,
        activated: user.activated,
        role: user.role.toLowerCase(),
        role_id: newRole.id,
      }),
    };
  }
}
