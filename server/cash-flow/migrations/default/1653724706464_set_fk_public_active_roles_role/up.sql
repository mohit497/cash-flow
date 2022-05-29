alter table "public"."active_roles"
  add constraint "active_roles_role_fkey"
  foreign key ("role")
  references "public"."ROLES"
  ("role") on update cascade on delete cascade;
