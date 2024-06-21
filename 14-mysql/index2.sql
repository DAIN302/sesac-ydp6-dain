-- DML (Data Definition Language)
create table customer (
	custid char(10) primary key, -- pk
    custname varchar(10) not null,
    addr char(10) not null,
    phone char(11),
    birth date
);

create table orders (
	orderid int primary key auto_increment, -- pk
    custid char(10) not null, -- fk
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    -- fk 설정을 위해 관계를 맺을 테이블 참조
    foreign key (custid) references customer(custid) on update cascade on delete cascade
);

-- 외래키 제약조건
-- 두 테이블 사이에 관계를 맺을 때 사용 -> 데이터의 무결성을 지킬 수 있게 해줌
-- 다른 테이블의 기본 키를 이 테이블의 외래키로 연결

-- 용어
-- 기준 테이블 : 기본키를 갖는 테이블 (customer)
-- 참조 테이블 : 외래키가 있는 테이블 (orders)
-- => 이 기준은 절대적이지 않다! 테이블간의 관계에 따라 상대적
-- 외래키 연결 : foreign key (참조 테이블_열이름) references 기준테이블(열이름) -> 참조 테이블에 써준다alter

-- on update cascade : 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경
-- on delete cascade : 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제

-- 테이블끼리 관계를 맺고 나면 테이블 삭제할 때 주의해야함!!
-- customer.custid <-> orders.custid 간에 관계 맺음
-- cusotmer 에 존재하는 회원만 orders 테아블에 데이터를 추가
-- orders 테이블이 존재하고 있는 상황에 customer 테이블을 삭제하면??
-- orders 테이블은 어떤 고객의 생일 정보를 알고 싶어도 customer 테이블이 날라가서 알 수 없음alter
-- pk-fk 연결된 테이블은 외래키가 설정된 테이블(참조테이블) 먼저 삭제해야함
-- => (1)orders 테이블 삭제 후 (2)customer 테이블 삭제해야함 

-- 1. 데이터 추가 : insert
insert into customer (custid, custname, addr, phone, birth)
	values ('cherry','김체리','강원도 영월군','01020202020','2022-03-03');
-- 지정한 순서에 맞게 써줘야함
    
select * from customer; -- customer 전체 값 조회
select * from orders; -- orders 전체 값 조회

-- 필드명을 명시하지 않는 경우 컬럼이 정의된 순서대로 값을 넣어야함
insert into customer
	values ('star', '꿈돌이', '대전광역시', '04204220422', '1993-03-03');
    
-- 여러 튜블플 동시에 추가 -> 쉼표로 이어서 쓸 수 있고 마지막엔 ; 얘를 써준다!
insert into customer values 
('greenplum','최매실','강원도 횡성군','01000000000','1955-05-05'),
('milktea','밀크티','인도','55555555555','1901-06-03'),
('sad','슬픔이','미국','01088888888','2014-05-05');

-- pk가 auto_increment 라면 null 값을 보내도 알아서 값을 채워준다.
insert into orders values (null, 'star', '튀김소보로', 1500, 5);
insert into orders values (null, 'cherry', '체리', 10000, 1);
insert into orders values (null, 'milktea', '도너츠', 4500, 2);
-- orders 테이블이 참조하는 테이블에 고객정보가 없는애꺼 입력하면 고객이 없으므로 에러남

-- 2. 데이터 변경 : update
-- custid가 milktea 인 고객의 주소를 서울로 변경
update customer set addr = '서울' where custid = 'milktea';
update customer set birth = '2001-06-06' where custid = 'milktea';

-- 3. 데이터 삭제 : delete
delete from customer where custid = 'greenplum';
-- 고객 테이블에서 정보가 삭제되었을 때 주문 테이블이 어떻게 달라질까?
delete from customer where custid = 'milktea'; 
-- orders 테이블에도 주문정보 같이 삭제됨! on delete cascade 에 의해서

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('orange', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');


INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);


-- 4. 데이터 읽기(조회) : select
-- 모든 고객의 아이디 검색
select custid from customer;

-- 모든 고객의 아이디와 생년월일 검색
select custid, birth from customer;

-- 컬럼 순서를 지정해서 출력 가능
select birth, custid from customer;

-- 모든 고객의 아이디. 이름, 주소, 전화번호, 생년월일 검색 
select custid, custname, addr, phone, birth from customer;
-- 모든 고객의 모든 정보 검색 -> * 사용
select * from customer;

-- 고객 테이블의 주소 검색
select addr from customer;
-- 중복을 제거해서 보고싶으면? distinct 키워드 사용
select distinct addr from customer;

-- where 절 : 디테일한 조회 조건 추가
-- 1. 비교 -> 비교연산자 사용해서 조회
-- 강해린 고객의 생일 조회
select birth from customer where custname = '강해린';

-- 강해린 고객을 제외한 나머지 고객 생일 조회
select birth from customer where custname != '강해린';

-- 사전순으로 박민지 고객보다 뒤에 위치한 고객 조회
select * from customer where custname > '박민지';


-- 2. 범위 : between ... and ... 사용해서 조회 (비교연산자 써도 됨)
-- 1995 ~ 2000년에 출생한 고객 조회
select * from customer where birth between '1995-01-01' and '2000-12-31';
select * from customer where birth >= '1995-01-01' and birth <= '2000-12-31';

-- 3. 집합
-- 주소가 서울 혹은 런던인 고객 조회 : in 연산자 사용
select * from customer where addr in ('대한민국 서울', '영국 런던');
select * from customer where addr =  '대한민국 서울' or addr = '영국 런던';

-- 주소가 서울 혹은 런던이 아닌 고객 조회 : not in 사용
select * from customer where addr not in ('대한민국 서울','영국 런던');
select * from customer where addr !=  '대한민국 서울' and addr != '영국 런던';

-- 4. 패턴 : like
-- % : 0개 이상의 문자열
-- _: 1개의 단일 문자
-- 주소가 미국 로스엔젤레스 인 고객 검색
select * from customer where addr like '미국 로스앤젤레스';

-- 주소에 미국이 포함되어 있는 고객 검색 : % 사용
select * from customer where addr like '미국%';

-- 고객 이름 두번째 글자가 '지'인 고객 검색
select * from customer where custname like '_지%';

-- 고객 이름 세번째 글자가 '수'인 고객 검색
select * from customer where custname like '__수%'; -- 3번째 글자가 '수'
select * from customer where custname like '%수'; -- '수'로 끝남 -> 예외 상황이 있을 수 있음 지수, 김한무수 이런애들도 잡혀요

-- 5 복합 조건
-- 주소지가 대한민국, 2000년 이후 출생자인 고객 검색 (and)
select * from customer where addr like '대한민국%' and birth >= '2000-01-01';

-- 주소지가 미국이거나 영국인 고객 검색 (or)
select * from customer where addr like '미국%' or addr like '영국%';

-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색 (not)
select * from customer where phone not like '%_4'; -- 0개 이상의 문자가 있고 4앞에 한개 이상이 있어야됨
-- %4는 웨안뒈?? 만약 한자리 수라면? 얘도 걸려 4,14,1004 -> 이게 걸려 %_4 는 14,1000만 걸리지

-- 6. order by : 정렬
select * from customer order by custname; -- 오름차순
select * from customer order by custname desc; -- 내림차순

-- 주의) order by 절은 where 절보다 뒤에 위치해야함 -> 순서 틀리면 구문 순서 오류 발생
-- 2000년생 이후 출생자 중 주소를 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr desc;

-- 2000년생 이후 출생자 중 주소를 기준으로 내림차순 검색 그리고 아이디를 기준으로 내림차순 검색
-- 주소를 1순위로 해서 정렬 후 custid 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr desc, custid desc;

-- 7. limit : 개수 제한
-- 2000년생 이후 출생자 중 주소를 기준으로 내림차순 검색 그리고 아이디를 기준으로 내림차순 검색하는데 최초의 4개
select * from customer where birth >= '2000-01-01' order by addr desc, custid desc limit 4;

select * from customer where birth >= '2000-01-01' limit 2;
select * from customer limit 2;

select * from customer where addr like '대한민국%' limit 2;

-- 8. 집계 함수
-- : 계산하여 어떤 값을 리턴하는 함수
-- sum(), avg() 이런거
-- group by 함께 많이 씀
select * from orders;
-- 주문 테이블에서 상품의 총 판매 개수 검색
select sum(amount) from orders;

-- 주문 테이블에서 총 판매 개수 검색 + 의미있는 열이름으로 변경 
select sum(amount) as 'total_amount' from orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
select sum(amount) as 'total_amount', 
	avg(amount) as 'avg_amount',
    min(price) as 'min_price',
    max(price) as 'max_price'
    from orders;

-- 주문 테이블에서 총 주문 건수 (= 튜플 개수) 몇개의 행이 있나 보여줌
select count(*) from orders;

-- 주문 테이블에서 주문한 고객 수 (중복 없이)
select count(distinct custid) from orders; -- 전체 고객 수 중 구매 전환이 이루어진 고객 수

select count(*) from customer; -- 전체 고객 수


-- 9. group by : '~별로'
-- 고객별로 주문한 주문건수 구하기
-- select 절에서, group by 에서 사용한 속성과 집계함수만 사용 가능
select custid, count(*) from orders group by custid;

-- 고객별로 주문한 상품 중 총 수량 구하기
select custid, sum(amount) from orders group by custid;

-- 고객별로 주문한 총 주문액 구하기
select custid, sum(price * amount) from orders group by custid;

-- 참고. 고객별로 주문한 총 주문액 구하고, 큰 금액 순으로 정렬 한다음에 주문 총액 가장 많은 3명 구하기
select custid, sum(price * amount) as 'total_pay' from orders group by custid order by total_pay desc limit 3;

-- 상품별로 판매 개수 구하기
select prodname, sum(amount) from orders group by prodname;

-- 10. having : group by 절 이후에 추가 조건
-- 총 주문액이 10000원 이상인 고객에 대해 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount), sum(price*amount) 
from orders group by custid 
having sum(price * amount) >= 10000 
order by sum(price * amount) desc; 

-- 총 주문액이 10000원 이상인 고객에 대해 고객별로 주문한 상품 총 수량 구하기
-- (단, custid가 bunny 인 고객 제외하고 출력)
select custid, sum(amount), sum(price*amount) 
from orders where custid != 'bunny'
group by custid 
having sum(price * amount) >= 10000 
order by sum(price * amount) desc;

/*
where vs having
having 
그룹에 대해서 필터링
group by 와 세트(얘보다 뒤에 위치)
집계 함수와 사용 가능

where
각각의 행을 필터링
group by 보다 앞에 위치
집계함수와 같이 쓸 수 있으나 having 절보다 자유롭지 못함
*/















    





