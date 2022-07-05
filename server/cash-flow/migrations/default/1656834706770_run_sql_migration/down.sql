-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE VIEW "public"."monthly_sales" AS
--  SELECT date_trunc('month'::text, ((t."createdAt")::date)::timestamp with time zone) AS monthly,
--     sum(t.price) AS total,
--     s.shop,
--     s.org,
--     sh.name,
--     sum(t.cost_price) as total_cost
--    FROM ((transactions t
--      JOIN sales s ON ((s.id = t.sale)))
--      JOIN shops sh ON ((s.shop = sh.id)))
--   GROUP BY (date_trunc('month'::text, ((t."createdAt")::date)::timestamp with time zone)), s.shop, s.org, sh.name;
