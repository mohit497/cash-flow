alter table "public"."inventory"
  add constraint "inventory_p_code_fkey"
  foreign key ("p_code")
  references "public"."products"
  ("code") on update cascade on delete cascade;
