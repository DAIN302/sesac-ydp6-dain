use codingon;
use mysql;
show tables;

create table visitor (
	id int primary key auto_increment,
    name varchar(10) not null,
    comment mediumtext
);

desc visitor;

insert into visitor values
(null, '홍길동', '내가 왔다'),
(null, '이찬혁', '으라차차');

select * from visitor; 

-- user 계정 생성
create user 'user'@'%' identified by '12345678'; -- 계정 추가
grant all privileges on *.* to 'user'@'%' with grant option; -- 계정 권한 부여
flush privileges; -- 캐시 지우고 새로운 설정 적용
alter user 'user'@'%' identified with mysql_native_password by '12345678';


select * from mysql.user;