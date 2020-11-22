It's time to put together all the pieces you've learned about CSS so far to create your first actual, complete web page layout!

## Getting Started

```no-highlight
et get implementing-a-page-layout
cd implementing-a-page-layout
open index.html
code .
```

### Instructions

Style the HTML provided (`index.html`) to match the image below. Draw on your new knowledge of text styles, sizing, padding, margin, borders, and backgrounds. Your final design should look like this:

![](https://s3.amazonaws.com/horizon-production/images/css-exercise-page-layout-1.png)

- Pay close attention to the HTML provided - you should have that file open and be referring to it frequently. Although it's not necessary, feel free to change the class names or structure!

- _Use the Chrome Inspector constantly!_ It will be invaluable for troubleshooting and understanding exactly what is going on with your styles.

- When choosing your CSS selectors, consider whether you're trying to style one fairly specific element vs. all elements of a certain type:

  * For example, the styles you'll create for the site's title will probably only apply to that one element, a natural selector would be its class name.
  * On the other hand, when you style the `p` elements, you might want those styles to apply to *most* similar elements on the site, so using their HTML tags as CSS selectors would make sense.

- Don't forget to go back and look at previous lessons for reference! You aren't expected to have every one of these CSS properties memorized - that's what practice and documentation are for!

### Fonts
This exercises uses `'Alegreya'` for the header and `'Source Sans Pro'` in much of the body text. These fonts have already been loaded into your site via a link from Google Fonts - you can now use those two names when setting your `font-family` values (i.e., `font-family: 'Alegreya';`).

### Colors
If you want to match the colors in the prototype exactly, consider installing a [color picker add-on](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en) for Chrome! This will allow you to hover over any section of a web page (including this one) and see exactly what color is being displayed.

### Browser Defaults
Your browser comes with a number of built-in styles called "browser defaults", some of which you might want to overwrite. For example,
  * The `body` element has a default margin in all directions. If you don't want white space around your entire web page, add the style `margin: 0` to your `body` element.
  * Most text elements (`h1`, `h2`, `p`, etc.) have a default top and bottom margin. You may want to change this margin (or remove it altogether!) to get the desired look.
