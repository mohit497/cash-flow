CREATE TABLE "public"."active_roles" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "role" varchar NOT NULL, "user" uuid NOT NULL, "org" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("org") REFERENCES "public"."user"("id") ON UPDATE cascade ON DELETE cascade);COMMENT ON TABLE "public"."active_roles" IS E'active users with role';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
