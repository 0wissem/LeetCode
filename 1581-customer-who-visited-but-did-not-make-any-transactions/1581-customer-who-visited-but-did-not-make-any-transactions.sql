# Write your MySQL query statement below
select v.customer_id, count(v.visit_id) as count_no_trans from Visits AS v  Left JOIN  Transactions AS t ON v.visit_id = t.visit_id where t.amount is null group by v.customer_id