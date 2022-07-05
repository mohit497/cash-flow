CREATE OR REPLACE VIEW "public"."yearly_sales" AS 
 SELECT date_trunc('year'::text, ((t."createdAt")::date)::timestamp with time zone) AS yearly,
    sum(t.price) AS total,
    s.shop,
    s.org,
    sh.name,
    sum(t.cost_price) as total_cost
   FROM ((transactions t
     JOIN sales s ON ((s.id = t.sale)))
     JOIN shops sh ON ((sh.id = s.shop)))
  GROUP BY (date_trunc('year'::text, ((t."createdAt")::date)::timestamp with time zone)), s.shop, s.org, sh.name;
