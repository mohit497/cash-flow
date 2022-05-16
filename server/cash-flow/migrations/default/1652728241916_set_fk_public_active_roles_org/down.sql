alter table "public"."active_roles" drop constraint "active_roles_org_fkey",
  add constraint "active_roles_org_fkey"
  foreign key ("org")
  references "public"."users"
  ("id") on update cascade on delete cascade;
