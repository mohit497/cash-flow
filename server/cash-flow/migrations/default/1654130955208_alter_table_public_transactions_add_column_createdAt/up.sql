alter table "public"."transactions" add column "createdAt" timestamptz
 null default now();
