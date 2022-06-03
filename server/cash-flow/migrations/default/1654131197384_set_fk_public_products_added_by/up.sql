alter table "public"."products"
  add constraint "products_added_by_fkey"
  foreign key ("added_by")
  references "public"."active_roles"
  ("id") on update no action on delete no action;
