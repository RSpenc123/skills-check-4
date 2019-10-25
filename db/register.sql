insert into skills_user(
   username,
   password 
) values(
    ${username},
    ${password}
)

returning *