-- database
create database hospital character set utf8mb4 collate utf8mb4_unicode_ci;

use hospital;

-- 환자(oatient) 테이블
create table patient (
	patient_id int primary key auto_increment,
    name varchar(50) not null,
    birth_date date not null
);

-- 의사(Doctor) 테이블
create table doctor (
	doctor_id int primary key auto_increment,
    name varchar(50) not null,
    specialty varchar(100) not null
);

-- 진료(Appointment) 테이블
create table appointment (
	appointment_id int primary key auto_increment,
    patient_id int not null,
    doctor_id int not null,
    appointment_date date not null,
    foreign key (patient_id) references patient(patient_id) on update cascade on delete cascade,
    foreign key (doctor_id) references doctor(doctor_id) on update cascade on delete cascade
);

-- 진단(Diagnosis) 테이블
create table diagnosis (
	diagnosis_code int primary key auto_increment,
    diagnosis_name varchar(100) not null,
    description text
);

-- 진단내역(diagnosis_record) 테이블
create table diagnosis_record (
	appointment_id int,
    diagnosis_code int,
    primary key (appointment_id, diagnosis_code),
    foreign key (appointment_id) references appointment(appointment_id) on update cascade on delete cascade,
    foreign key (diagnosis_code) references diagnosis(diagnosis_code) on update cascade on delete cascade
);

-- 데이터 삽입
insert into patient values 
(1, '김철수', '1990-05-15'),
(2, '박영희', '1985-11-22'),
(3, '이지원', '1998-03-08'),
(4, '최민기', '1977-09-25'),
(5, '한지영', '1992-07-01');

insert into doctor values
(1, '김의사', '내과'),
(2, '박의사', '외과'),
(3, '이의사', '소아과'),
(4, '최의사', '정형외과'),
(5, '한의사', '피부과');

insert into appointment (appointment_id, patient_id, doctor_id, appointment_date)
values
(1, 1, 1, '2023-06-01'),
(2, 2, 3, '2023-06-02'),
(3, 3, 2, '2023-06-03'),
(4, 4, 4, '2023-06-04'),
(5, 5, 5, '2023-06-05');

insert into diagnosis (diagnosis_code, diagnosis_name, description)
values
(1, '감기', '코감기 증상'),
(2, '골절', '팔 골절'),
(3, '알레르기', '꽃가루 알레르기'),
(4, '피부염', '건선 증상'),
(5, '귀염증', '중이염 증상');

insert into diagnosis_record (appointment_id, diagnosis_code)
values
(1,1),
(3,2),
(4,2),
(5,4),
(2,5);

-- DML 문 작성
-- 1. 모든 환자의 이름과 생년월일 조회
select name, birth_date from patient;
-- 2. 전공이 '내과'인 의사의 이름 조회
select name from doctor where specialty = '내과';
-- 3. 2023년 6월 1일에 진료받은 환자의 이름과 의사 이름 조회
select P.name, D.name from patient P join appointment A on P.patient_id = A.patient_id 
join doctor D on D.doctor_id = A.doctor_id where appointment_date = '2023-06-01'; 
-- 4. 진단명이 '골절'인 진단내역의 환자 이름과 진료일자 조회
select P.name, A.appointment_date from patient P join appointment A on P.patient_id = A.patient_id
join diagnosis_record R on R.appointment_id = A.appointment_id
join diagnosis D on D.diagnosis_code = R.diagnosis_code where diagnosis_name = '골절';
-- 5. 각 의사가 진료한 환자 수 조회
select D.name, count(*) as 'number of patients' from doctor D join appointment A on D.doctor_id = A.doctor_id
group by D.name;
-- 6. 가장 최근에 진료받은 환자의 이름과 진료일자 조회
select P.name, A.appointment_date from patient P join appointment A on P.patient_id = A.patient_id
order by appointment_date desc limit 1;