alter table "public"."sales"
  add constraint "sales_role_id_fkey"
  foreign key ("role_id")
  references "public"."active_roles"
  ("id") on update cascade on delete cascade;
