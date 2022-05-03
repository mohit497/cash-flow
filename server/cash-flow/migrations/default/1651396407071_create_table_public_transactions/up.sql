CREATE TABLE "public"."transactions" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "sale" uuid NOT NULL, "p_code" text NOT NULL, "count" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("id") REFERENCES "public"."sales"("id") ON UPDATE cascade ON DELETE cascade);COMMENT ON TABLE "public"."transactions" IS E'holds transactions data';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
