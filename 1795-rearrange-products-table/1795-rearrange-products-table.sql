# Write your MySQL query statement below
select product_id, store1 price, 'store1' store from Products where store1 is not null union all
select product_id, store2 price, 'store2' store from Products where store2 is not null union all
select product_id, store3 price, 'store3' store from Products where store3 is not null