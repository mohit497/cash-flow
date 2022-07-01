CREATE OR REPLACE VIEW "public"."top_products_daily" AS 
 SELECT sum(t.price) AS sum,
    date_trunc('day'::text, ((t."createdAt")::date)::timestamp with time zone) AS daily,
    p.name,
    t.p_code,
    s.org,
    s."user"
   FROM ((transactions t
     JOIN products p ON ((t.p_code = (p.code)::text)))
     JOIN sales s ON ((t.sale = s.id)))
  GROUP BY t.p_code, p.name, (date_trunc('day'::text, ((t."createdAt")::date)::timestamp with time zone)), s.org, s."user"
  ORDER BY sum DESC;