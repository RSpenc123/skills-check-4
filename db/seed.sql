

create table skills_user(
id serial primary key,
username varchar(50),
password varchar(250)
)




create table skills_posts(
user_id serial primary key,
id int references skills_user(id),
title varchar(50),
image_Url text,
content text
)
