create view products_sold_till_date as
select sum(t.count) as sold, t.p_code, p.name, sum(t.price) as amount, p.org from transactions t inner join products p on p.code= t.p_code group by t.p_code, p.name, p.org;
