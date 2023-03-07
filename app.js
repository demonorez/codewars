// Daily code war challenege 3/2/2023
// Return a string of the number here!
function numberToString(num) {
  let numString = num.toString()
  return numString
}

// Daily code war challenge 3/3/2023
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters 


function abbrevName(name){
  
  let nameString = name.split(" ")
  let initials = ""
  for (let i = 0; i < nameString.length; i++) {
    if (nameString[i].length > 0 && nameString[i] !== "") {
      initials += nameString[i][0]
    }
  }
  return initials
}

console.log(abbrevName("Robert Frost"))

// Write a function "greet" that returns "hello world!"

function greet(){
  return "hello world!"
}