fetch('http://localhost:4567/books.json')
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => console.log(`${body} MAKE SURE YOU DELETE THIS`)) //DELETE THIS BEFORE SAVING
  .catch(error => console.error(`Error in fetch: ${error.message}`));

  let data = {
    book: {
      name: 'book from fetch'
    }
  };
  let jsonStringData = JSON.stringify(data);
  
  fetch('http://localhost:4567/books.json', {
    method: 'post',
    body: jsonStringData
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      console.log(body);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));