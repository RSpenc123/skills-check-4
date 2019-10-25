select b.id, b.username, b.password, a.user_id
from skills_user b 
join skills_posts a on b.id = a.id
where b.username = $1
