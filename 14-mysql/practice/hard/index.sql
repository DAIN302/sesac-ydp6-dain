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
    primary key (appointment_id, diagnosis_id),
    foreign key (appointment_id) references appointment(appointment_id) on update cascade on delete cascade,
    foreign key (diagnosis_code) references diagnosis(diagnosis_code) on update cascade on delete cascade
);

-- 데이터 삽입