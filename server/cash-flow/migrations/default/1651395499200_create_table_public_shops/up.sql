CREATE TABLE "public"."shops" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "address" text NOT NULL, "location" text NOT NULL, PRIMARY KEY ("id") );COMMENT ON TABLE "public"."shops" IS E'hols shops info';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
