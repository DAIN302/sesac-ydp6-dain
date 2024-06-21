-- 데이터베이스 : 데이터의 집합
-- DBMS : Database Management System, 데이터베이를 운영/관리하는 프로그램
-- SQL : 데이터베이스를 구축, 관리하고 활용하기 위해 사용하는 언어
-- 참고) 스키마 == 데이터베이스

-- DDL (Data Definition Language)
-- : 데이터베이스나 테이브를 정의(Definitiomn)하는 언어

-- 1. 데이터베이스 생성 : CREATE DATABASE
create database codingon character set utf8mb4 collate utf8mb4_unicode_ci;
-- utf8mb4 -> 이모지 사용을 위해 설정 utf8만 쓰면 이모지가 안먹힘

-- 2. 데이터베이스 목록 : SHOW DATABASES
show databases;

-- 3. 데이터베이스 사용 선언 : USE
use codingon;

-- 4. 데이터베이스 삭제 : DROP
-- drop database codingon;

-- [테이블]  관련 명령어
-- 1. 테이블 생성 CREATE TABLE
create table products (
	id int auto_increment primary key,
    name varchar(50) not null,
    model_number varchar(50) not null,
    series varchar(50) not null
);
-- json 처럼 후행쉼표 넣으면 오류뜸
-- 제약 조건 
-- not null : 빈값 허용 X -> primary key 로 설정한 애는 자동으로 설정됨
-- auto_increment : 자동 숫자 증가
-- primary key : 기본키 중복값, null 안됨 -> not null 생략 가능
-- default [xx] : 기본값 -> 입력하지 않았을 때 기본으로 설정되는 값
-- unique : 중복 허용 X, null 은 허용(primary key 와 다른점임!) // 한 테이블에 여러 개 설정 가능

-- 2. 테이블 목록 확인 : SHOW TABLES
show tables;

-- 3. 테이블 구조 확인 : DESC
desc products;

-- 4. 테이블 삭제 : DROP TABLE
-- drop table products;

-- 5. 테이블 수정
-- 이미 생성된 테이블에 데이터 추가되었을 때, 테이블 구조가 바뀌어야 하는 경우 사용
-- 5-1. 컬럼 추가 : ALTER TABLE 테이블명 ADD 컬럼명
-- 기존 데이터들은 new_column 이 갑자기 생겼으니 null이 할당됨
-- alter table products add new_column varchar(20);
-- 5-2 컬럼 타입 수정 : ALTER TABLE 테이블명 MODIFY 컬럼명
-- alter table products modify new_column int;
-- 5-3 컬럼 삭제 : ALTER TABLE 테이블명 DROP 컬럼명
-- alter table products drop new_column;
