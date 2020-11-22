let overTwoOne = ""
let validID = ""
let jeans = ""
alert("Greetings, and welcome to 'The Crossing Gourd'")
while (isNaN(partyNumber) || partyNumber <= 0) {
  let partyNumberQ = prompt("How many members in your party? Please include only numbers.");
  let partyNumber = parseInt(partyNumberQ)
  //console.log("partyNumber = " + partyNumber)
}
if (partyNumber <= 8) {
  while (overTwoOne != 'yes' && overTwoOne != 'no') {
    let overTwoOneQ = prompt("Is everyone over 21 years of age? [yes or no]");
    overTwoOne = overTwoOneQ.toLowerCase()
    //console.log("overTwoOne = " + overTwoOne)
  }
  if (overTwoOne === "yes") {
    while (validID != 'yes' && validID != 'no') {
      let validIDQ = prompt("Does everyone have a valid ID? [yes or no]");
      validID = validIDQ.toLowerCase()
      //console.log("validID = " + validID)
    }
    if (validID === "yes") {
      while (jeans != 'yes' && jeans != 'no') {
        let jeansQ = prompt("Is anyone in your party wearing jeans? [yes or no]");
        jeans = jeansQ.toLowerCase()
        //console.log("jeans = " + jeans)
      }
      if (jeans === "no") {
        console.log("Please have a seat at the bar while we find you a table.")
      } else {
        console.log("Sorry there is a dress code to be seated, we are sorry we couldn't help you today.")
      }
    } else {
      console.log("Sorry everyone must have a valid ID to be seated, we're sorry we couldn't help you today.")
    }
  } else {
    console.log("Sorry everyone must be over 21 to be seated, we're sorry we couldn't help you today.")
  }
} else {
  console.log("Sorry we can't seat such a large party right now, we're just too busy.  I suggest you seperate the party into groups of eight people or less and start again.")
}

