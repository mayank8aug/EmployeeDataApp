DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
CREATE TABLE employee (
    ID SERIAL PRIMARY KEY,
    ename VARCHAR,
    age INTEGER,
    gender VARCHAR,
    sal INTEGER,
    dept VARCHAR
);
INSERT INTO employee (ename, age, gender, sal, dept) VALUES ('Mayank Kumar', 28, 'M', 20000, 'TECHNOLOGY');