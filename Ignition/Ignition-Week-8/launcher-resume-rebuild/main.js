// Your code here!
let projects = ["Provided project management for environmental studies and analyses necessary for completion of permit applications associated with several approximately 100 MW solar energy facilities in the mid-west.  Specific efforts included providing project support and internal coordination to ensure project timelines and budgets were adhered to, coordinating onsite teams for wetlands and cultural analysis, composing permit document sections, providing overall project oversight, and coordination with the client.", "Provided technical input on chemistry and operation to reduce lime use in the spray dryer absorbers which saves the plant approximately $1,000,000 per year", "Supported permitting associated with federal funding for five proposed solar energy facility sites in Rhode Island.  Tasks included developing necessary documentation for United States Department of Agriculture authorization; coordinating bat monitoring to obtain tree clearing concurrence from United States Fish and Wildlife Service; and cultural resource evaluation and consultation with the Rhode Island Historical Preservation and Heritage Commission."];
let quotes = ["It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.", "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.", "No man burdens his mind with small matters unless he has some very good reason for doing so."];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function displayQuote() {
  let number = getRandomInt(0, 2);
  document.getElementById("quote").innerHTML = quotes[number];
}
function displayProjects() {
  let number = getRandomInt(0, 2);
  document.getElementById("project1").innerHTML = projects[number];
  if (number < 2) {
    document.getElementById("project2").innerHTML = projects[number + 1]
  } else {
    document.getElementById("project2").innerHTML = projects[number - 1]
  }
}