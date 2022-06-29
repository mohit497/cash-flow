create view weekly_sales as
 SELECT date_trunc('week', t."createdAt"::date)  as weekly, sum(t.price) as total, s.shop , s.org from transactions t  inner join sales s on s.id=t.sale group by weekly, s.shop, s.org;
