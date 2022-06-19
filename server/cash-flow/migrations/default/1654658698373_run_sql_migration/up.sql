CREATE VIEW total_sales_by_shop As
SELECT   sum(count * p.amount) as total, sh.id, sh.name as shop_name  FROM transactions t INNER JOIN sales s  ON s.id = t.sale inner join products p on p.code = t.p_code inner join shops sh on sh.id = s.shop  group by sh.name, sh.id

order by total desc;
