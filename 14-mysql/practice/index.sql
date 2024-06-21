-- 데이터베이스 생성
create database practice character set utf8mb4 collate utf8mb4_unicode_ci;

use practice;

-- table 생성
create table member(
	id varchar(20) primary key,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);

-- table 수정
alter table member modify id varchar(10);
alter table member drop age;
alter table member add interest varchar(100);

show tables;