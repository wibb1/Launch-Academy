// your code, here
let myObject = {
 firstName: "Will",
 lastName: "Campbell",
 hometown: "North Attleboro",
 occupation: "Student",
 catchPhrase: "When all other contingencies fail, whatever remains, however improbable, must be the truth.",
 name() {
   return this.firtsname + " " + this.lastName
 }
};

console.log(myObject)
console.log(myObject.name)