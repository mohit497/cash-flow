alter table "public"."transactions" drop constraint "transactions_sale_fkey",
  add constraint "transactions_id_fkey"
  foreign key ("id")
  references "public"."sales"
  ("id") on update cascade on delete cascade;
