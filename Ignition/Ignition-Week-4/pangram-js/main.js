let testData = [
  { sentence: 'The quick brown fox jumps over the lazy dog.', pangram: true },
  { sentence: 'The quick onyx goblin jumps over the lazy dwarf.', pangram: true },
  { sentence: 'Grumpy wizards make toxic brew for the evil queen and jack.', pangram: true },
  { sentence: 'Not a pangram', pangram: false },
  { sentence: '', pangram: false },
]
// define the isPangram() function
let isPangram = (sentence) => {
  // your code, here 

  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let newstring = []
  newstring = sentence.toLowerCase().split()
  if (newstring[newstring.length - 1] = ".") {
    newstring.pop()
  }

  Array.prototype.unique = function () {
    let unique = [];
    for (let i = 0; i < this.length; i++) {
      let current = this[i];
      if (unique.indexOf(current) < 0) unique.push(current);
    }
    return unique.sort();
  }
  newstring = newstring.unique();
  newstring.shift()

  if (newstring = alphabet) {
    return true
  } else {
    return false
  }
}
// test the isPangram() function, and print results to the console.
testData.forEach((trial) => {
  let result = isPangram(trial.sentence)
  let correct = (result == trial.pangram)
  if (correct === true) {
    console.log(`isPangram gave a correct result for: ${trial.sentence}`)
  } else {
    console.log(`isPangram gave an incorrect result for: ${trial.sentence}`)
  }
})

