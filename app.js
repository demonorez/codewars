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

// create a function which returns an RNA sequence from the given DNA sequence
// 3/7/2023 codewar Challenge
function DNAtoRNA(dna) {
  let rna = dna.replace(/T/g, "U")
  return rna
}

console.log(DNAtoRNA("TTTT"));

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.
// 3/8/2023 Codewars challenge


function checkForFactor (base, factor) {
  if (base % factor === 0 ) {
    return true
  } else {
    return false
  }
} 


console.log(checkForFactor(6, 3))