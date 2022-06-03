alter table "public"."transactions" add column "updatedAt" timestamptz
 null default transaction_timestamp();
