Now that you're both a space explorer AND a web developer, it's time to update your resume and build a good-looking webpage to show off your skills!

## Getting Started

```no-highlight
et get css-launcher-resume
cd css-launcher-resume
open index.html
code .
```

### Build your Launcher resume

This should open the `index.html` document in Chrome. You should see the text "Hello, my name is Jane Launcher" on the screen. Navigate to the `style.css` file, and add the following bit of code

```css
body {
  background-color: red;
}
```

Refreshing the page should turn the background bright red, so you know that your css file is hooked up correctly to your `index.html` file. This looks horrible, though, so let's delete that.

### Building your resume

Use your knowledge of HTML to build a "skeleton" of your website. You can modify the HTML document directly in order to do this. It should include the following:

- A header with your name. This should be the biggest text on your page!
- A blurb with a few sentences about you.
- A picture of yourself, so your visitors can recognize you.
- A list of links to your professional online sites. These can include your LinkedIn, Facebook, Twitter, or any other sites you want.

### Styling

Great, now it's time to make sure your site looks nice for the people who come to check out your page! Your design should do the following:

- Change the text color of the header to something other than black, and the rest of the text to a different color.
- Center your header, blurb, and picture on the page.
- Apply a border and margin around your image to make it stand out!
- Using your knowledge of the CSS Box Model, make your links each appear on their own line. Center them as well.
- Use two different fonts (you can choose which elements should use which font!)
- Set a size for your photo so that it's appropriate for the page.
- Make one of the links in your list stand out by making it bold.

### Bonus Challenge: Refactor!

When coding, it's always a good idea to refactor to make sure that your code is clean, readable, and efficient. If you have time, you might considering refactoring the following things:

### Use class names instead of element names

It's fine to style an `h1` tag by using the `h1` css selector. But what if we later decide that that element will actually be an `h2`? Our styling would break! To get around this, we can give our HTML elements `class` attributes, and target those classes in our css. This way, even if you change which element you use, the styling will still work. Class names are also more descriptive to let the next developer who touches your code know what each piece is doing.

For example, you might turn this:

```css
h1 {
  color: #ffffff;
}
```

into this:

```css
.page-header {
  color: #ffffff;
}
```

### Use hex codes instead of color names

What does saying that a background color should be `red` mean? The answer is, different things to different browsers! If we want to make sure that a user viewing our site in Safari sees the same thing as a user visiting our site in Chrome, we might use hex codes instead of css color names.

So you might turn this:

```css
.page-header {
  color: red;
}
```

into this:

```css
.page-header {
  color: #ff0000;
}
```

### Make sure we don't have useless code

Sometimes we have to try a few things in css in order to get the effect we want. This is a great way of learning by experimenting! But once we have the final result looking like we want it to, we want to make sure that we don't have remnants of our experimentation lying about. Having inaccurate or unused code lying around can lead to confusion and unexpected side effects.

Open up your chrome inspector and select one of your elements. In the `style` tab in the inspector, un-check the check box for each of the styles you applied. It should change the way the page looks! If it doesn't, you should probably think about if that line of code is necessary.

[font-awesome]: https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
