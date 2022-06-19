CREATE OR REPLACE VIEW "public"."product_left_in_store" AS 
 SELECT i.p_code, 
    (sum(i.count) - sum(t.count)) AS total, p.org
   FROM (inventory i
     LEFT JOIN transactions t ON ((i.p_code = t.p_code)))
     join products p on p.code=i.p_code
  GROUP BY i.p_code, p.org;
