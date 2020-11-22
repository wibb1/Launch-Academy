## Getting Started

```no-highlight
et get smart-vending-machine
cd smart-vending-machine
code .
```

## Part 1

You think you've tested your prior programs enough to now make a fully-functional vending machine! Well, at least one that properly dispenses words. Write a program that achieves the following steps:

1. Ask the user what vending machine item they would like.
2. Accept the user answer and save it as a variable.
3. Ask the user how many of the vending machine item they would like.
4. Accept the user's answer (should be a number) and save it as a variable
5. Use the answer to start a `.times` loop, in which you print the word the user asked for, the number of times that they specified.

#### Sample Output

```no-highlight
Hello, I'm the first and only Talking Vending Machine.
What would you like today?
> Bag of chips
How many of those would you like?
> 3
Bag of chips
Bag of chips
Bag of chips
There you go! Come again!
```

## Part 2

Next, we want to add one more feature to our vending machine in which a user
can ask for "tons" of something as an amount, and get a random amount of
whatever they asked for. Modify your program so it achieves the following:

1. Start by going through the same steps as above.
2. When the user is asked how many things they would like, if they say "tons", print the vending machine item the user requested a random number of times less than 20.

#### Sample Output:

```no-highlight
Hello, I'm the first and only Talking Vending Machine.
What would you like today?
> Bag of chips
How many of those would you like?
> tons
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
There you go! Come again!
```

## Part 3

Some of your space explorers are getting so excited by the prospect of getting "tons" of food that they aren't following our rules very well, and typing invalid input like "I want tons!!!!!" when asked how many items they want. Let's modify our program so that instead of needing to type the word "tons" exactly, a user can now type the word "tons" *anywhere* in their answer to get the same result as described in Part 2.

Modify your program to check if the user input contains the string "tons".

#### Sample Output:

```no-highlight
Hello, I'm the first and only Talking Vending Machine.
What would you like today?
> Bag of chips
How many of those would you like?
> oh boy, tons!!!!!
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
Bag of chips
There you go! Come again!
```
