CREATE TABLE "public"."inventory" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "p_code" text NOT NULL, "count" integer NOT NULL, "createdAt" timestamptz NOT NULL DEFAULT now(), "updatedAt" timestamptz NOT NULL DEFAULT transaction_timestamp(), PRIMARY KEY ("id") );COMMENT ON TABLE "public"."inventory" IS E'holds product inventory';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
