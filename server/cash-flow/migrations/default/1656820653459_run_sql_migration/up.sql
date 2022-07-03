create view products_in_store as
select  sum(i.count) as total_products, i.p_code, p.name, p.org from inventory i inner join products p on p.code=i.p_code  group by i.p_code,p.name, p.org;
