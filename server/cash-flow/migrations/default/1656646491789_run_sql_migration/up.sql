create or replace view products_left_in_store as
 SELECT (count(i.id)* (i.count) - count(t.id)) AS "left",
    p.name,
    p.org,
    count(t.id) as sold,
    sum(i.count)
   FROM ((inventory i
     left outer JOIN transactions t ON ((t.p_code = i.p_code)))
     JOIN products p ON ((t.p_code = (p.code)::text)))
  GROUP BY t.p_code, i.count, p.name, p.org;
