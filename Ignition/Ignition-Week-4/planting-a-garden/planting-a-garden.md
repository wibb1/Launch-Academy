### Introduction

You've been wanting to plant a garden for a long time so you ordered a seed catalogue to order from. Who knew there were so many different options for just peppers?! You have a good idea of the things you want to plant, so let's write some code to expedite the ordering process.

### Getting Started
```no-highlight
et get planting-a-garden
cd planting-a-garden
code .
```

Your work will be done in `main.js`.

### Instructions

You are given a few arrays of seeds separated by category. Utilize array methods to answer the following questions:

1. We love making homemade sauce (or gravy) for pasta dinners. Let's write a line of code to return every kind of tomato seed you can order from the `allSeeds` array, then add those seed names to the array `myGarden`.

2. We love having fresh berries on our yogurt. Write a line of code to return every berry seed in the `allSeeds` array, then add those seed names to the array `myGarden`.

3. We are very picky when it comes to our pepper preferences. Write a line of code that will return every pepper in the `allSeeds` array that does *NOT* have the word `"cayenne"` in it. Also add those names to `myGarden`.

4. To make searching easier, we want to see an alphabetized list of available seeds. Write a line of code that will return an alphabetized list of all the seeds available, but does _not_ include any of the seeds currently inside `myGarden`.

5. Looking at the current list of fruits is bothering you. You _know_ that a tomato is a fruit, but you _want_ it to be a vegetable. Write some code that removes all the tomatoes, peppers, and squash from the `fruits` array and adds them to the `vegetables` array.

6. Iceberg lettuce is the worst kind of lettuce, and we all know it. Write some code that deletes that option from all of the arrays that contain it. 

7. You don't have room to plant more than one kind of squash, but you're not too picky. Use a function to return the first squash found in the `allSeeds` array, then add that to `myGarden`.

8. We've lost track of what we want to order. Write some code that logs each item from your `myGarden` array, then tells you how many plants you've selected in total.

Happy Gardening! 