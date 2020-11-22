
//EXAMPLES FROM THE FETCH-API-PRACTICE

fetch('http://localhost:4567/books.json') // EXAMPLE FETCH WITH ADDING TO INNER HTML
  .then(response => {
    if (response.ok) { //CHECKS TO SEE IF THE RESPONSE IS IN AN ACCEPTABLE FORMAT
      return response;//RETURNS ACCEPTABLE DATA
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);//COMPILES AN ERROR MESSAGE
      throw(error);//'BAD' RETURN
    }
  })
  .then(response => response.text())//CONVERTS RESPONSE
  .then(body => {
    console.log("The body of the response from the fetch call:");//SHOWS THE BODY OF THE RESPONSE-NOT NEEDED BUT HELPFUL DURING TESTING
    console.log(body);
    let bodyParsed = JSON.parse(body);//REQUIRED FORMATING OF THE DATA - PARSES JSON CREATING ARRAY
    console.log("The same body in a much more readable format:");//SHOWS THE BODY OF THE RESPONSE-NOT NEEDED BUT HELPFUL DURING TESTING
    console.log(bodyParsed);
    bodyParsed.books.forEach((book) => { // SENDS ARRAY THROUGH A FOREACH LOOP 
      console.log(book.name);
      document.getElementById("books").innerHTML += `<li>${book.name}</li>`;//SENDS ARRAY DATA INTO A <LI> INNERHTML ALLOWING DATA TO GO DIRECTLY TO THE HTML PAGE W/O HAVING TO CREATE A NEW CHILD
  });
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`)); 
  // END OF EXAMPLE FETCH WITH ADDING TO INNER HTML


post "/books.json" do //EXAMPLE POST TO JSON FILE
  parsed_data = JSON.parse(request.body.read) //CONVERTS JSON DATA TO A JS OBJECT
  book_name = parsed_data["book"]["name"] //SETS THE BOOK NAME TO THE PARSED DATA BOOK : NAME
  if !book_name.empty? //CHECKS IF THE NAME IS NOT EMPTY
    book = {
      id: get_next_book_id,  //SEE BELOW - GET NEXT BOOK ID GETS THE NEXT AVAILABLE LINE IN THE JSON
      name: book_name
    }
    books = parsed_books_json_data["books"] //ARRAY OF PARSED DATA SEE = PARSED DATA JSON BELOW
    books.push(book)
    update_books_json_data(books)

    status 201
    json({ book: book })
  else
    status 422
    json({ name: ["Can't be blank"] })
  end
end


//FUNCTIONS USED IN JSON CALL
CURRENT_FILE_PATH = File.dirname(__FILE__) //GETS THE FULL FILE NAME

def parsed_books_json_data //PARSE DATA IN JSON
  data = File.read(CURRENT_FILE_PATH + "/books.json") //GETS JSON DATA
  JSON.parse(data) //PARSES JSON DATA
end

def get_next_book_id //GET NEXT BOOK ID - GETS NEXT AVAILABLE LINE IN THE JSON
  books = parsed_books_json_data["books"]//GETS PARSED DATA FROM ONE "DEF" ABOVE - PARSED_BOOKS_JSON_DATA
  book_with_highest_id = books.max_by { |book| book["id"] } //GETS THE LAST BOOK IN THE ARRAY
  highest_book_id = book_with_highest_id["id"] //GETS THE ID OF THE LAST BOOK IN THE ARRAY
  highest_book_id + 1 // ADDS 1 TO THE BOOK ID - WHICH IS THE NEXT AVAILABLE BOOK ID
end

def update_books_json_data(books) //UPDATE BOOKS JSON DATA - WRITES DATA TO JSON
  data = { books: books } // BEGINS TO PUT THE FORMAT BACK INTO A JSON FORMAT
  json_formatted_data = JSON.pretty_generate(data, indent: '  ') //COMPLETES THE JSON FORMAT
  File.write(CURRENT_FILE_PATH + '/books.json', json_formatted_data) // POSTS THE INFORMATION TO THE JSON FILE 
end














get "/test" do  // EXAMPLE GETS FROM JSON
  status 200
  "Hello world"
end

get "/test_error" do
  status 500
end

get "/books.json" do
  status 200
  json parsed_books_json_data 
end

