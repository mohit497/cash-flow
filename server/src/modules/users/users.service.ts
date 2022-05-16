import { Injectable, UnauthorizedException } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const superagent = require('superagent');
// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
    {
      userId: 2,
      username: 'test@test.com',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    let res;
    try {
      res = await superagent
        .get(`${process.env.HASURA_ENDPOINT}/api/rest/user/${username}`)
        .set('x-hasura-admin-secret', process.env.HASURA_SECRET);
    } catch (e) {
      console.log(e);
    }
    const data = JSON.parse(res.text);

    //  check if user exists
    if (data.users.length === 0 || data.users.length > 1) {
      throw new UnauthorizedException('User not found');
    }
    return {
      ...data.users[0],
      password: data.users[0].pwd,
      role: data.users[0].activeRolesByUser[0].role,
      org: data.users[0].activeRolesByUser[0].org,
    };
  }
}
