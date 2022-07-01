CREATE OR REPLACE VIEW "public"."top_products_daily" AS 
 SELECT sum(t.price) AS sum,
    p.name,
    t."createdAt",
    t.p_code,
    s.org
   FROM (transactions t
     JOIN products p ON ((t.p_code = (p.code)::text)))
     join sales s on t.sale= s.id
  GROUP BY t.p_code, p.name, t."createdAt", s.org;
