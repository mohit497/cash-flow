alter table "public"."shops"
  add constraint "shops_org_fkey"
  foreign key ("org")
  references "public"."orgs"
  ("id") on update cascade on delete cascade;
