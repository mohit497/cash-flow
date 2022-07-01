create or replace view  products_left_in_store as
 SELECT  (i.count - count(t.id)) as left, p.name,p.org from inventory i full outer join transactions t on t.p_code= i.p_code 
 inner join products p on t.p_code= p.code group by t.p_code, i.count,
 p.name,p.org;
