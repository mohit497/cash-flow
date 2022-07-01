CREATE OR REPLACE VIEW "public"."top_products_daily" AS 
 SELECT sum(t.price) AS sum,
     date_trunc(
    'day' :: text,
    ((t."createdAt") :: date) :: timestamp with time zone
    ) AS daily,
    p.name,
    t.p_code,
    s.org,
    s.user
   FROM (transactions t
     JOIN products p ON ((t.p_code = (p.code)::text)))
     join sales s on t.sale= s.id
  GROUP BY t.p_code, p.name, daily, s.org, s.user
  order by daily desc;
