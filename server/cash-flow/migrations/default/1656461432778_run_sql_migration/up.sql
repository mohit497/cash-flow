CREATE OR REPLACE VIEW "public"."weekly_sales" AS 
 SELECT date_trunc('week'::text, ((t."createdAt")::date)::timestamp with time zone) AS weekly,
    sum(t.price) AS total,
    s.shop,
    s.org,
    sh.name
   FROM (transactions t
     JOIN sales s ON ((s.id = t.sale)))
     JOIN shops sh ON s.shop= sh.id
  GROUP BY (date_trunc('week'::text, ((t."createdAt")::date)::timestamp with time zone)), s.shop, s.org, sh.name;
