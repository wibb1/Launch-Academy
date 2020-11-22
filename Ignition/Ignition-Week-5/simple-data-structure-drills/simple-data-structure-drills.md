Time to practice your skills!

## Getting Started
```no-highlight
et get simple-data-structure-drills
cd simple-data-structure-drills
code .
```

We're looking for not only the correct data, but the **correct formatting**. Make sure that your output and format matches what is given below.

### Array Drills

Dr. Dre needs some help with his banking.
Below is a list of his most recent transactions (deposits are positive and withdrawals are negative):

```ruby
transactions = [50_000, -2_000, -25_000, 4_000, -12_000, 5_000, -800, -900, 43_000, -30_000, 15_000, 62_000, -50_000, 42_000]
```

**Note**: an `_` can be used like a comma when separating large numbers by three digits

Write Ruby code to print out the answers to the following questions. Example outputs have been provided for your reference.
You should **NOT** hard-code any of these values as your answers - these are only for you to check your results against.

* What is the value of the first transaction?
```no-highlight
The first transaction is:
50000
```
* What is the value of the second transaction?
```no-highlight
The second transaction is:
-2000
```
* What is the value of the fourth transaction?
```no-highlight
The fourth transaction is:
4000
```
* What is the value of the last transaction?
```no-highlight
The last transaction is:
42000
```
* What is the value of the second from last transaction?
```no-highlight
The second from the last transaction is:
-50000
```
* What is the value of the 5th from last transaction?
```no-highlight
The fifth from the last transaction is:
-30000
```
* What is the value of the transaction with index 5?
```no-highlight
The transaction with the index of 5 is:
5000
```
* How many transactions are there in total?
```no-highlight
The total number of transactions is:
14
```
* How many positive transactions are there in total?
```no-highlight
The total number of positive transactions is:
7
```
* How many negative transactions are there in total?
```no-highlight
The total number of negative transactions is:
7
```
* What is the largest withdrawal?
```no-highlight
The largest withdrawal is:
-50000
```
* What is the largest deposit?
```no-highlight
The largest deposit is:
62000
```
* What is the smallest withdrawal?
```no-highlight
The smallest withdrawal is:
-800
```
* What is the smallest deposit?
```no-highlight
The smallest deposit is:
4000
```
* What is the net balance of all the transactions?
```no-highlight
The total value of all the transactions is:
100300
```
* Let's assume this array is the transaction history of a recently opened account. If Dr. Dre had $239,900 in this account when it opened, how much does he have in his account after these transactions are applied?
```no-highlight
Dr. Dre's balance is 340200
```

**Note**: The [Ruby docs on Arrays][ruby-array-docs] serve as great reference
material when it comes to working with Arrays.

## Hash Drills

```ruby
best_records = {
  "Tupac" => "All Eyez on Me",
  "Eminem" => "The Marshall Mathers LP",
  "Wu-Tang Clan" => "Enter the Wu-Tang (36 Chambers)",
  "Weird Al" => "Running With Scissors",
  "Led Zeppelin" => "Physical Graffiti",
  "Metallica" => "The Black Album",
  "Pink Floyd" => "The Dark Side of the Moon",
  "Pearl Jam" => "Ten",
  "Nirvana" => "Nevermind"
}
```

Write Ruby code to print out the answers to the following questions, some example outputs have been provided for guidance:

* How many records are in `best_records`?
```no-highlight
Total records: 8
```
* Who are all the artists listed?
```
All of the artists:
Tupac
Eminem
Wu-Tang Clan
Led Zeppelin
Metallica
Pink Floyd
Pearl Jam
Nirvana
```
* What are all the album names in the hash?
```no-highlight
All of the albums:
All Eyez on Me
The Marshall Mathers LP
Enter the Wu-Tang (36 Chambers)
Physical Graffiti
The Black Album
The Dark Side of the Moon
Ten
Nevermind
```
* Delete the `Eminem` key-value pair from the list and print an updated list of just the artists.
```no-highlight
Eminem Deleted:
Tupac
Wu-Tang Clan
Led Zeppelin
Metallica
Pink Floyd
Pearl Jam
Nirvana
```
* Add your favorite musician and their best album to the list and print an updated list of all the artists and albums. In the example output below we've added `Queen: Somebody to Love`:
```no-highlight
My favorite artist added:
Tupac: All Eyez on Me
Wu-Tang Clan: Enter the Wu-Tang (36 Chambers)
Led Zeppelin: Physical Graffiti
Metallica: The Black Album
Pink Floyd: The Dark Side of the Moon
Pearl Jam: Ten
Nirvana: Nevermind
Queen: Somebody to Love
```
* True or False: `Nirvana` is included in `best_records`?
```no-highlight
True or False: `Nirvana` is included:
true
```
* Change `Nirvana`'s album to another and then print the updated list of Artists and Albums.

* True or False: `Soundgarden` is included in `best_records`?

* If `Soundgarden` is not in `best_records` then add a key-value pair for the band and then print the updated list of Artists and Albums.

* Which key-value pairs have a key that has a length less than or equal to 6 characters?
```no-highlight
key-value pairs with a key less than or equal to 6 characters: Tupac: All Eyez on Me
```
* Which key-value pairs have a value that is greater than 10 characters?
```no-highlight
key-value pairs with a value greater than 10 characters:
Tupac: All Eyez on Me
Wu-Tang Clan: Enter the Wu-Tang (36 Chambers)
Led Zeppelin: Physical Graffiti
Metallica: The Black Album
Pink Floyd: The Dark Side of the Moon
Soundgarden: King Animal
Queen: Somebody to Love
```

**Note**: The [Ruby docs on Hashes][ruby-hash-docs] serve as great reference for
working with hashes.

[ruby-array-docs]: http://www.ruby-doc.org/core/Array.html
[ruby-hash-docs]: http://www.ruby-doc.org/core/Hash.html
