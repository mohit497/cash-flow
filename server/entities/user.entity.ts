import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class user {
  @Column()
  id: string;

  @PrimaryColumn()
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column()
  acceptTerms: boolean;

  @Column()
  activated: boolean;

  @Column()
  activationToken: string;

  @Column()
  createdAt: Date;

  @Column()
  org: string;

  @Column()
  types: string;

  @Column()
  role: string;

  facebook: boolean;
}
