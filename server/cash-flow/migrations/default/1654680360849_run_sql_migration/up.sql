create view shop_sales_by_date as
 SELECT sum(((t.count)::numeric * p.amount)) AS total,
    sh.id,
    sh.name AS shop_name,
    sh.org,
    date(s."createdAt")
    
   FROM (((transactions t
     JOIN sales s ON ((s.id = t.sale)))
     JOIN products p ON (((p.code)::text = t.p_code)))
     JOIN shops sh ON ((sh.id = s.shop)))
     
  GROUP BY sh.name, sh.id,date(s."createdAt")
  ORDER BY  date(s."createdAt") DESC;
