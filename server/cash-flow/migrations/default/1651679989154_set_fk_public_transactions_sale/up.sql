alter table "public"."transactions" drop constraint "transactions_id_fkey",
  add constraint "transactions_sale_fkey"
  foreign key ("sale")
  references "public"."sales"
  ("id") on update cascade on delete cascade;
