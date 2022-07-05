create view sales_by_shop as
 SELECT sum(t.count) AS sold,
    t.p_code,
    p.name,
    sum(t.price) AS amount,
    p.org,
    sa.shop
   FROM (transactions t
     JOIN products p ON (((p.code)::text = t.p_code)))
    JOIN sales sa on sa.id = t.sale
  GROUP BY t.p_code, p.name, p.org, sa.shop;
