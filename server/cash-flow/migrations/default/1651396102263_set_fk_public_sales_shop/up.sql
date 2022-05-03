alter table "public"."sales"
  add constraint "sales_shop_fkey"
  foreign key ("shop")
  references "public"."shops"
  ("id") on update no action on delete no action;
