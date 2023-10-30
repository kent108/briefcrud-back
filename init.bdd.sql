drop table if exists "user" cascade; 
drop table if exists "product" cascade; 
drop table if exists "category" cascade; 

create table "category" (
id serial primary key, 
name varchar(255) not null
);

create table "product" (
id serial primary key,
name varchar(255) not null, 
price decimal(7,2) not null, 
quantity integer not null, 
category_id integer not null,
constraint fk_category_id foreign key (category_id) references "category"(id)
);

create table "user" (
id serial primary key, 
name varchar(255) not null,
lastname varchar(255) not null, 
mail varchar(320) not null unique,
password char(60) not null
); 


insert into category ("name") values ('téléphone'),('montre connectée') ,('accessoire');

insert into product ("name" ,price,quantity,category_id) values
('iPhone 15', '969', 3 , 1),
('iPhone 14', '899', 4 , 1),
('Samsung Galaxy S23 Ultra', '1393', 2 , 1),
('Samsung Galaxy Z Fold5 ', '2031', 1 , 1),
('Apple Watch Ultra 2ème Gen', '899', 3 , 2),
('Samsund Galaxy Watch4 40mm', '229', 5 , 2),
('Xiaomi Mi Watch', '115.82', 4 , 2),
('Garmin Vivoactive 4S', '225.66', 5 , 2),
('Coque Samsun Z Fold5', '59.90', 3 , 3),
('Samsung Pack 2 Câbles', '4.38', 4 , 3),
('Apple Air Pods 3ème Gen', '190', 1 , 3);