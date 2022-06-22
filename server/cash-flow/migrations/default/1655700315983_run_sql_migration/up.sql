CREATE OR REPLACE VIEW "public"."total_sales_by_shop" AS 
 SELECT sum(((t.count)::numeric * t.price)) AS total,
    sh.id,
    sh.name AS shop_name,
    sh.org
   FROM (((transactions t
     JOIN sales s ON ((s.id = t.sale)))
     JOIN products p ON (((p.code)::text = t.p_code)))
     JOIN shops sh ON ((sh.id = s.shop)))
  GROUP BY sh.name, sh.id
  ORDER BY (sum(((t.count)::numeric * p.amount))) DESC;
