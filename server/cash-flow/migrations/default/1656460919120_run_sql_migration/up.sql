CREATE VIEW "public"."yearly_sales" AS 
 SELECT date_trunc('year'::text, ((t."createdAt")::date)::timestamp with time zone) AS yearly,
    sum(t.price) AS total,
    s.shop,
    s.org
   FROM (transactions t
     JOIN sales s ON ((s.id = t.sale)))
  GROUP BY (date_trunc('year'::text, ((t."createdAt")::date)::timestamp with time zone)), s.shop, s.org;
