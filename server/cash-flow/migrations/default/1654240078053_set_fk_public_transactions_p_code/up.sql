alter table "public"."transactions"
  add constraint "transactions_p_code_fkey"
  foreign key ("p_code")
  references "public"."products"
  ("code") on update no action on delete no action;
