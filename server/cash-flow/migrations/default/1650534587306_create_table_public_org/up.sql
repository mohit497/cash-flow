CREATE TABLE "public"."org" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" varchar NOT NULL, "email" varchar NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));COMMENT ON TABLE "public"."org" IS E'holds organisation data';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
