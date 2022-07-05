alter table "public"."inventory" drop constraint "inventory_p_code_fkey",
  add constraint "inventory_p_id_fkey"
  foreign key ("p_id")
  references "public"."products"
  ("id") on update cascade on delete cascade;
