pry -r './server.rb'


1. all the recipes
Recipe.all

2. all the comments
Comment.all

3. the most recent recipe posted
Recipe.last
Recipe.order(created_at: :desc).limit(1)

4. all the comments of the most recent recipe
Comment.where(article_id: Recipe.last.id)


5. the most recent comment of all your comments
Comment.last
Comment.order(created_at: :desc).limit(1)

6. the recipe associated with the most recent comment
Recipe.where(id: Comment.last.article_id)

7. all comments that include the string brussels
Comment.where("body LIKE '%Brussel%'")

Comment.where(body: "*Brussel*") - this wouldn't work
Comment.where(body: "%Brussel%") - this wouldn't work