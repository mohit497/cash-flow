alter table "public"."transactions"
  add constraint "transactions_status_fkey"
  foreign key ("status")
  references "public"."STATUS"
  ("STATUS") on update no action on delete no action;
