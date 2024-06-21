create table user(
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender enum('F', 'M', '') default '',
    birthday date not null,
    age int(3) not null default 0
);

insert into user values 
('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33),
('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31),
('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53),
('hanjo','jk48fn4', '한조', 'M', '1984-10-18', 39),
('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47),
('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22),
('jungkrat','4ifha7f','정크랫','M','1999-11-11',24)
; 

select * from user;

-- 1. 모든 회원목록 가져오기 (birthday 컬럼 값 기준으로 오름차순 정렬)
-- 2. 회원 목록 중 gender 컬럼의 값이 'M' 인 회원목록 가져오기
-- (name 컬럼 값 기준으로 내림차순)
-- 3. 1990 년대 태어난 회원의 id, name 컬럼 값 가져오기
-- 4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오기
-- 5. gender 컬럼 값이 'M'이고 1970년대에 태어난 회원목록 가져오기
-- 6. 모든 회원목록 age  기준으로 내림차순 정렬하여 가져오기(처음 3개의 값만)
-- 7. 모든 회원 목록 중 나이가 25이상 50 이하인 회원 목록 출력
-- 8. id 컬럼 값이 hong1234인 레코드의 pw 컬럼 값 12345678 로 변경
-- 9. id 컬럼 값이 jungkrat 인 레코드 삭제