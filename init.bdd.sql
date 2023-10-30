create table "category" (
id serial primary key, 
name varchar(255) not null
);

create table "product" (
id serial primary key,
name varchar(255) not null, 
price decimal(5,2) not null, 
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
