CREATE OR REPLACE VIEW "public"."product_left_in_store" AS 
 SELECT i.p_code, 
      sum(i.count) as total,p.org, sum(t.count) as sold
   FROM (inventory i
     LEFT outer JOIN transactions t ON ((i.p_code = t.p_code)))
     join products p on p.code=i.p_code
  GROUP BY i.p_code, p.org;
