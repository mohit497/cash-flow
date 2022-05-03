alter table "public"."sales"
  add constraint "sales_user_fkey"
  foreign key ("user")
  references "public"."users"
  ("id") on update no action on delete no action;
