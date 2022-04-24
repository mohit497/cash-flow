alter table "public"."active_roles"
  add constraint "active_roles_user_fkey"
  foreign key ("user")
  references "public"."user"
  ("id") on update cascade on delete cascade;
