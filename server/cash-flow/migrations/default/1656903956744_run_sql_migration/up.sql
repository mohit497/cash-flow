CREATE VIEW "public"."daily_sales" AS
SELECT
  date_trunc(
    'day' :: text,
    ((t."createdAt") :: date) :: timestamp with time zone
  ) AS weekly,
  sum(t.price) AS total,
  s.shop,
  s.org,
  sh.name,
  sum(t.cost_price) AS total_cost
FROM
  (
    (
      transactions t
      JOIN sales s ON ((s.id = t.sale))
    )
    JOIN shops sh ON ((s.shop = sh.id))
  )
GROUP BY
  (
    date_trunc(
      'day' :: text,
      ((t."createdAt") :: date) :: timestamp with time zone
    )
  ),
  s.shop,
  s.org,
  sh.name;
