CREATE TABLE "public"."sales" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user" uuid NOT NULL, "org" uuid NOT NULL, "createdAt" timestamptz NOT NULL DEFAULT now(), "updatedAt" timestamptz NOT NULL DEFAULT transaction_timestamp(), "shop" uuid NOT NULL, PRIMARY KEY ("id") );COMMENT ON TABLE "public"."sales" IS E'holds sales data';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
