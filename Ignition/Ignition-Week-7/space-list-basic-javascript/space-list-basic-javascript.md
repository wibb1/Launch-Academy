One of the researchers at your Earth base needs you to pick up some items from various alien laboratories while you're traveling around in space. Let's create a program that will list what we need to pick up!

## Getting Set Up

```no-highlight
et get space-list-basic-javascript
cd space-list-basic-javascript
code .
```

### Instructions
Open the `index.html` file in your browser. In the browser, open up the JavaScript console. You will be saving your code in main.js and SpaceItem.js. Then, you can refresh the page in order to see your changes.

**Note:** Because we're running this in the JavaScript console in Chrome, you do **not** need to add `module.exports = SpaceItem` or `require('./SpaceItem')`. We have required the appropriate files in the `index.html` file provided so that it works with the JavaScript console. If you choose to complete the optional portion of this assignment, you will need to uncomment out line 15 from `index.html`.

The researcher told you that you need **5 rocks**, **2 insects**, and **4 twigs**, but they forgot to tell you how many **plants** to get. Each space rock costs **$0.50**, each insect costs **$2.00**, each twig costs **$2.50**, and each plant is **$2.00**.

### Meeting Expectations Requirements

* Create a `SpaceItem` class within the `src/SpaceItem.js` file.
* A new `SpaceItem` should take three arguments, the name of the item, the price of the item, and the quantity.
* If the quantity is omitted when creating a new `SpaceItem`, it should default to `1`.
* In `main.js` there is an **array** called `researcherSpaceItems` that contains 4 `SpaceItem` objects. In `main.js` create a `summary` function that takes 1 argument, an **array** of `SpaceItems`. When you call `console.log(summary(researcherSpaceItems));` your function should print out the following to the console **exactly**:

```no-highlight
Dear Researcher,

I bought you:

5 rocks - $2.50
2 insects - $4.00
4 twigs - $10.00
1 plant - $2.00

You owe me $18.50.
```

### Tips

* Focus on meeting one requirement at a time.
* Use the JavaScript console in your browser and `console.log` statements to
  troubleshoot your code.
* **DO NOT** start the optional portion until you
  have completed and submitted the requirements necessary to Meet Expectations.

### Optional Next Steps

Extract the logic for handling "Space Lists" into its own class.

Your app must satisfy the following requirements:

* In the `src` directory you'll find a `SpaceList.js` file.
* In `SpaceList.js` create a `SpaceList` class that takes 2 arguments, the `name` of the person the list belongs to, and an array of `SpaceItem`s. Like so:
```javascript
let researcherSpaceItems = [new SpaceItem("rock", .50, 5), new SpaceItem("insect", 2.00, 2), new SpaceItem("twig", 2.50, 4), new SpaceItem("plant", 2.00) ]
let researchersList = new SpaceList("Researcher", researcherSpaceItems)
```
* In the `main.js` under the Optional section there are 2 inventory objects, each with a list of space items.
* In your `SpaceList` class, create a `checkInventory` method that checks to see if any lab has enough of each `SpaceItem` on a `SpaceList` for you to get everything on your list. Your `checkInventory` method should take 1 argument, an object literal that contains the inventory of whichever lab you are planning to go to.
```javascript
researchersList.checkInventory(inventoryLab2)
researchersList.checkInventory(inventoryLab1)
```
* If the lab has enough of everything on the list, your method should print out the following in the console:
```no-highlight
The lab has it all! I got you everything on your list here.
```
* If the lab doesn't have enough of everything on the list, your method should print out a message that tells you what items the lab doesn't have enough of in the console like so:
```no-highlight
Sorry, the lab doesn't have enough of the following:
  - missing item
  - missing item
You'll have to go someplace else to get these.
```
* In `main.js` create a `SpaceList` object called `researchersList` using the list of space items your researcher gave you, then use the `checkInventory` method you created to see if everything on the list is available at a lab so that you can share which items you can bring home.
