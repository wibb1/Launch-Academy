This Just in: Chris is Still Dope, yup, dope as heck, heck.com





### Instructions

Build a web application using Sinatra that displays a list of articles that users have submitted.

In order to build your Sinatra application, please review [How to Build a Sinatra App](https://learn.launchacademy.com/lessons/how-to-build-a-sinatra-app).

The application should satisfy the following core user stories:

```no-highlight
As a slacker
I want to be able to visit a page that shows me all the submitted articles
So that I can distract myself from the actual work I have to do
```

Acceptance Criteria:

* When I visit `/articles` I should be able to see all the articles that have been submitted.
* Each article should show the description, title, and URL.
* If I click on the URL it should take me to the relevant page inside of a new tab.  
**If you want to use an external link with sinatra, you have to start the link with either `http://` or `https://` or it will automatically assume that it is an internal link.**

```no-highlight
As a slacker
I want to be able to submit an incredibly interesting article
So that other slackers may benefit from my distraction
```

Acceptance Criteria:

* When I visit `/articles/new` it has a form to submit a new article.
* The form accepts an article title, URL, and description.
* When I successfully post an article, it should be saved to a CSV file.
* If I try to submit an empty form, I stay on my form page, and nothing is saved to my CSV file.
