We're going to take a scene from Spaceballs and make it more visually distinct, to help the reader really feel what's going on!

## Getting Started now, now
```no-highlight
et get css-selectors-in-spaceballs
cd css-selectors-in-spaceballs
code .
```

To prepare for this exercise, we can look at the provided `index.html` file. You can open that file in your browser by navigating to it from the browsers 'open file' dialog.

This file contains part of a scene from Spaceballs, where we see Helmet, Sandurz, and Corporal exploring some new VHS technology. The text is a little stale, so let's liven it up!

### Instructions

The first thing we decide to do is change the text color of the `helmet` portions of the script to a nice blue (`#0077CC`).

Looking at the structure of the HTML, I can see that there are divs 'wrapping' the line's character name and dialog, and those divs have classes of either `helmet`, `sandurz`, or `corporal`.

```html
<div class="helmet">
  <h4>HELMET</h4>

  <p class="dialog">
    Colonel Sandurz, may I speak with you, please?
  </p>
</div>
```

If I assign styles to the class `helmet`, then these entire divs will be affected!

At the top of the document, I see a `link` element, pointing to stylesheet named `style.css`.

```html
<link rel="stylesheet" href="style.css">
```

We've provided this stylesheet for you alongside the `index.html`. We'll use it to add this `helmet` style!

Inside of `style.css`, write a css rule for the `helmet` class, like this:

```css
.helmet {
  color: #0077CC;
}
```

Now reload / refresh the `index.html` file in your browser - you should see that the `helmet` lines all have a new color!

### Flipping the Script

Now that we've made that change, I'm hooked.

Make more changes to the HTML page by editing the `style.css` file to include the following CSS rules. Make sure to check out the `index.html` file to figure out what selectors you should be using in your CSS!

You do **not** need to edit `index.html`!

- All `corporal` text should have a color of `#EE6363`.
- All `sandurz` text should have a color of `#8EA142`.
- All names (capitalized character names indicating dialogue in `h4`s) must have a `font-size` of 24px. They should not be bold, and should be underlined.
- Let's make each name (same as above - the `h4`s) a little darker in color than its surrounding text. Write a rule that makes all names inside a `corporal` div the color `#CD4242`. Write another rule that makes all name inside a `helmet` div the color `#0A4670`. Write one final rule that all names inside a `sandurz` div be the color `#3E4814`.
- All dialog must have a font-size of 16px, and a `font-weight` of `300`.
- Stage Directions must have a text color of `#362819`. They should be centered.

Great job!
