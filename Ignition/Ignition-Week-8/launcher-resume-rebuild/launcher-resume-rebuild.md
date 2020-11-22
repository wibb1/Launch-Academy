You've leveled up, and it's time your resume reflects that. Use your previous `css-launcher-resume` submission as your starting point. You do not need to upload _actual data_ about yourself, so feel free to get creative with the content as long as you meet all other expectations.

## Getting Started

```no-highlight
et get launcher-resume-rebuild
cd launcher-resume-rebuild
open index.html
```

This should open the `index.html` document in your browser. **Copy the index.html file contents from `css-launcher-resume` and paste them into this new file.** There's no sense in reinventing the wheel.

The JavaScript you write for this assignment should be placed in the `main.js` file.

The instructions here provide some general descriptions on what to add, but they do not explicitly say *how* to add it. A big part of being a developer is flexing your Google-fu skills! By using some of the available [documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) and by researching on the web, you should be able to complete each step and create you resume document.

### Meets Expectations Requirements

Completing this section won't make your page look fancy, but it will get all the required content on the page. Be sure to meet the listed objectives prior to moving on. *You may use made-up information if you like, or if the section is not immediately applicable to you.*

Your resume should display the following:

* The page title, which should be your full name.
* Your contact information, which should minimally include your phone number, email and address.
* A list of *links* to your professional online sites. These can include your LinkedIn, Facebook, Twitter, or your personal website. At least one must be included and work.
* An image of you. This should be stored as "images/your-photo-name.png" The project folder currently has a "launch-logo.png" in the "images" folder if you would like.
* An "Experience" section, listing at least three past jobs that you have held. In order, you should list the company name, the job title, the city and state, and the period in which you worked e.g. "January 2018 - September 2018".
* Your educational history containing at least 1 school. This section should include your university or school name, the city and state in which you worked, the degree you received (if applicable) and the period in which you studied.

### Styling
The image provided `resume-rebuild.jpg` shows one example of how your resume should be styled.  

![](https://s3.amazonaws.com/horizon-production/images/resume-rebuild.png)

Style your app such that it looks like the example provided, and include all of your styling in the `style.css` file.  

Be sure to:
* Have a light background color
* Have your name be dark blue
* Set a size for your photo so that it's appropriate for the page.
* The headers for each of the sections should be bold, and in header tags.
* The projects section should have a border around it.
* Your image should have rounded corners.
* Make the randomly generated quotes stand out by underlining them.

### JavaScript
* Add a "Projects" button. When clicked, a bulleted list of projects should appear below the button. At least two projects should appear.
* Add a "Inspirational Quotes" button. When clicked, one of three random quotes should appear.

### Exceeds Expectations Requirements
You want your page visitors to be able to leave a comment on your page, so let's build a form!  

* Create a form that allows page visitors to submit a comment. The form must include a field for their name, their location and a field for their comment.
* There should be a "Submit" button at the bottom of the form.
* If the visitor submits their form without filling out all of the fields, an alert message should appear with a custom error message of your choice.
* If the visitor submits their form correctly, an alert message should appear with a custom success message of your choice.

Your form may cause the page to refresh after the alert has appeared. This is fine.
