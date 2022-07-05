alter table "public"."inventory" drop constraint "inventory_p_code_fkey",
  add constraint "inventory_p_code_fkey"
  foreign key ("p_code")
  references "public"."products"
  ("code") on update cascade on delete cascade;
