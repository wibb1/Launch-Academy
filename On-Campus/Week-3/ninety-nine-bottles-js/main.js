// YOUR CODE HERE
const bottles_wall = " bottles of beer on the wall.\n"
const bottle_wall = " bottle of beer on the wall.\n"
const bottles_beer1 = " bottles of beer.\n"
const bottles_beer2 = " bottles of beer!\n"
const bottle_beer = " bottle of beer."
const take_around = "Take one down and pass it around,\n"
let bottles = 99
let question = ""

while (bottles > 1) {
  if (bottles % 10 === 0) {
    console.log(bottles + bottles_wall + bottles + bottles_beer2 + take_around + (bottles - 1) + bottles_wall)
  } else {
    console.log(bottles + bottles_wall + bottles + bottles_beer1 + take_around + (bottles - 1) + bottles_wall)
  }
  bottles--
}
console.log(bottles + bottle_wall + bottles + bottle_beer + take_around + "no more " + bottle_wall)
console.log("No more" + bottles_wall + "no more" + bottles_beer1)
bottles = 99
console.log("Go to the store and buy " + bottles + " more, " + bottles + bottles_wall)
