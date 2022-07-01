create view top_products_daily as
select sum(t.price), p.name, t."createdAt", t.p_code from transactions  t inner join products p on t.p_code = p.code  group by t.p_code,p.name, t."createdAt";
