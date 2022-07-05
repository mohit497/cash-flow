create view product_sale_by_cost_price as
select count(t.id), t.cost_price, t.p_code, p.org,p.name   from transactions t join products p on p.code= t.p_code  group by t.cost_price,t.p_code,p.org,p.name;
