create view product_left_in_store as
select i.p_code, sum(i.count) - sum(t.count) as total from inventory i left join transactions t on i.p_code = t.p_code group by i.p_code;
