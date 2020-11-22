# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

articles =
  [{
     title: 'Why does Ember.js rock?',
     url: 'https://kerricklong.com/articles/why-ember-js-rocks.html',
     description: 'Ember.js is a MVC (Model – View – Controller) JavaScript framework which is maintained by the Ember Core Team (including Tom Dale, Yehuda Katz, and others). It helps developers create ambitious single-page web applications that don\'t sacrifice what makes the web great: URI semantics, RESTful architecture, and the write-once, run-anywhere trio of HTML, CSS, and JavaScript.'
   },

   {
     title: 'Mozilla Playdoh',
     url: 'http://playdoh.readthedocs.org/en/latest/',
     description: 'Mozilla\'s Playdoh is a web application template based on Django. Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Playdoh is simply a pre-configured Django project that adds some essential modules and middleware.'
   },
   {
     title: 'Gigablast Search Engine, Now Open Source (C/C++)',
     url: 'https://www.gigablast.com/',
     description: 'Gigablast is the first truly transparent search engine. It tells you exactly why the search results are ranked the way they are. There is nothing left to the imagination.'
   },

   {
     title: 'Node.js Deployments with Docker, Dokku, & Digital Ocean',
     url: 'https://medium.com/code-adventures/438bce155dcb',
     description: 'DigitalOcean is a really nice cloud hosting company that offers excellent performance at affordable rates. Docker is an abstraction on top of LXC Containers. Docker introduces a workflow that makes operating containers straightforward and lots of fun. If you want to learn more about docker I suggest you read this article. Dokku is a tiny program that allows you to easily deploy your applications. It was built by progrium (from localtunnel) on top of docker, Buildstep, gitreceive, pluginhook, nginx, Heroku BuildPacks,& sshcommand.'
   },

   {
     title: 'Build a Blog Engine in Go',
     url: 'http://0value.com/build-a-blog-engine-in-Go',
     description: 'A static blog generator in Go. It’s called trofaf because that’s its name. Get this: it takes markdown files, reads some YAML front matter, and generates good ol’ HTML files. I can already smell the Nobel. Anyway, the goal of this post is not to brag about the novelty of the thing, but to show how easy it is to get this done with Go’s rich standard library and some fine userland packages.'
   }]

articles.each do |info|
  article = Article.find_or_initialize_by(title: info[:title])
  article.url = info[:url]
  article.description = info[:description]
  article.save!
end
