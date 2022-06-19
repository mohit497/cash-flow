import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const superagent = require('superagent');

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
        id: user.id,
        activated: user.activated,
        role: user.role.toLowerCase(),
        role_id: newRole[0].id,
      }),
    };
  }
  /**
   *
   * @param email
   * @param orgname
   * @param name
   */
  async registerOrg(
    email: string,
    orgname: string,
    name: string,
    password: string,
  ) {
    let res;
    try {
      res = await superagent
        .post(`${process.env.HASURA_ENDPOINT}/api/rest/register`)
        .set('x-hasura-admin-secret', process.env.HASURA_SECRET)
        .send({ email: email, name: orgname });
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException('register og failed');
    }
    console.log(res.body);
    const user = await this.usersService.addUserWithRole(
      email,
      password,
      res.body.insert_orgs.returning[0].id,
    );

    return await this.switchRole(
      email,
      user.insert_users_one.activeRolesByUser[0].id,
    );
  }
}
