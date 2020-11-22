// Your code goes here!
let todo = ["Write some Javascript", "Submit System Check", "Take a break"];

let unorderedList = document.getElementById('todo-list');
todo.forEach(todo => {
  unorderedList.innerHTML += `<li> ${todo}</li>`;  
});