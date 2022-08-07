create database quiz;

use quiz;
create table user(emailid varchar(255) primary key , password varchar(255), name varchar(255), role varchar(255));

create table question_paper(paperid bigint primary key auto_increment, category varchar(50), subcategory varchar(50), totalmarks bigint,quizname varchar(255));
create table scorecard(id bigint primary key auto_increment, paperid bigint, emailid varchar(255),
 marks bigint , totalmarks bigint,  testdate varchar(255), quizname varchar(255),
 foreign key (paperid) references question_paper(paperid), foreign key (emailid) references user(emailid));

create table questions(paperid bigint , question_no bigint, question varchar(1000) ,
 option_a varchar(1000), option_b varchar(1000), option_c varchar(1000) , option_d varchar(1000), 
 correct_option varchar(100) , foreign key (paperid) references question_paper(paperid), primary key(paperid, question_no));
 
 ALTER TABLE question_paper AUTO_INCREMENT=1;
 ALTER TABLE scorecard AUTO_INCREMENT=1000;
 