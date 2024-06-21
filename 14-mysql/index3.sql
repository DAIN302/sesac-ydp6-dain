-- join 여러테이블을 합쳐서 정보 조회

-- cross join
select * from customer, orders;

-- where 절을 이용해서 조인 조건 추가
select * from customer, orders
where customer.custid = orders.custid;
-- inner join 이용하면 같은 결과 얻음 on 뒤에 조인 조건을 써줌!
select * from customer inner join orders
on customer.custid = orders.custid;

 -- 고객 이름 고객이 주문한 상품명, 상품 가격 조회
select custname, prodname, price from customer inner join orders
on customer.custid = orders.custid;

-- 고객 이름별로 주문한 제품 총 구매액을 고객 별로 오름차순 정렬
select custname, sum(price * amount) as 'total_price'
from customer, orders
where customer.custid = orders.custid
group by custname
order by total_price asc;

select custname, sum(price * amount) as 'total_price'
from customer inner join orders
on customer.custid = orders.custid
group by custname
order by total_price asc;

-- natural join 
-- inner join 과는 다르게 중복값은 한 번만 나옴!
select * from customer natural join orders;