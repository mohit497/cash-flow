alter table "public"."sales"
  add constraint "sales_org_fkey"
  foreign key ("org")
  references "public"."orgs"
  ("id") on update cascade on delete cascade;
