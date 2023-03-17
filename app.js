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

// 3/9/2023 
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
  let needle = haystack.indexOf("needle")
  return `found the needle at position ${needle}`
}

// 3/10/2023 
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  let hoopCounts = n
  if (hoopCounts < 10) return "Keep at it until you get it."
  if (hoopCounts >= 10) return "Great, now move on to tricks"
}

console.log(hoopCount(10));

// Easier solution 
// function hoopCount (n) {
//   return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
// }

// 3/13/2023
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  return num < 0 ? num : -num;
}

// 3/14/2023 
// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// 3/17/2023
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let newStr = str.replace(/a/g, '').replace(/A/g, '').replace(/E/g, '').replace(/e/g, '').replace(/i/g, '').replace(/I/g, '').replace(/o/g, '').replace(/O/g, '').replace(/u/g, '').replace(/U/g, '')
  return newStr;
}