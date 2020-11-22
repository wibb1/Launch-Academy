import fs from 'fs'

/*(1)*/ fs.readFile('twitterData.json', 'utf8', (err, data) => {
  if (err) {  // check if there was a problem reading the file
    console.log('Error reading file.')
    console.log(err)
  } else {  // if no probs reading file, try to parse it
    try {
      /*(2)*/ let twitterData = JSON.parse(data)
      /*(3)*/ console.log(twitterData)
    } catch (err) {
      console.log('Error parsing file.')
      console.log(err)
    }
  }
})
