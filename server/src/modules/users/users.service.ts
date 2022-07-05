import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Roles_ENUM } from 'src/enums/Roles';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const superagent = require('superagent');
// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  async findOne(username: string): Promise<User | undefined> {
    let res;
    try {
      res = await superagent
        .get(`${process.env.HASURA_ENDPOINT}/api/rest/user/${username}`)
        .set('x-hasura-admin-secret', process.env.HASURA_SECRET);
    } catch (e) {
      console.log(e);
    }
    const data = res.body;

    //  check if user exists
    if (data.users.length === 0 || data.users.length > 1) {
      throw new UnauthorizedException('User not found');
    }
    return {
      ...data.users[0],
      password: data.users[0].pwd,
      role: data.users[0].activeRolesByUser[0].role,
      org: data.users[0].activeRolesByUser[0].org,
      role_id: data.users[0].activeRolesByUser[0].id,
    };
  }

  async addUserWithRole(email: string, password: string, org: string) {
    let res;

    try {
      const user = await this.findOne(email);

      if (user.name) {
        console.log(' user already registerd');
      }
    } catch {
      console.log(' no user exists with this name ');
    }
    try {
      res = await superagent
        .post(`${process.env.HASURA_ENDPOINT}/api/rest/adduser`)
        .set('x-hasura-admin-secret', process.env.HASURA_SECRET)
        .send({
          email: email,
          pwd: password,
          role: Roles_ENUM.ORGADMIN,
          org: org,
        });
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException('register org failed');
    }

    const addUserData = JSON.parse(res.text);
    console.log(
      `new user added with ORG_ADMIN_ROLE for ${org} , email ${email}`,
    );
    return addUserData;
  }
}
