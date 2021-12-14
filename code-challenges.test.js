// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divByThree", () => {
  it("takes a number and decides if it is evenly divisble by three or not", () => {
    expect(divByThree(15)).toEqual("15 is divisible by three")
    expect(divByThree(0)).toEqual("0 is divisible by three")
    expect(divByThree(-7)).toEqual("-7 is not divisible by three")
  })
})

//Ran $ yarn jest and got 1 failed. error Command failed with exit code 1.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"



// b) Create the function that makes the test pass.

//create function named divByThree
//function takes 1 paramater, num
//use a conditional and the modulo operator to get desired output
//run yarn jest

const divByThree = (num) => {
  if (num % 3 === 0) {
    return num + ' is divisible by three'
  } else {
    return num + ' is not divisible by three'
  }
}

//originally got 1 failed
//reason was missing '+' after last num.
//corrected, and passed



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capWords", () => {
  it("returns an array with all the words capitalized", () => {
    expect(capWords(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capWords(["temperature", "database", "chopsticks", "mango", "deduction"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//$ yarn jest. 1 failed, function not defined

// b) Create the function that makes the test pass.

//create capWords function
//iterate over array using map
//use map to change first index use to uppercase to change the first letter
//return result arrays

const capWords = (array) => {

  let words = array.map(value => {
// here I realized I need to access the zero index then add the rest of the word
    return value[0].toUpperCase() + value.substring(1)

  })
  return words
}



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowelIndex", () => {
  it("logs the index of the first vowel", () => {
    expect(firstVowelIndex("learn")).toEqual(1)
    expect(firstVowelIndex("academy")).toEqual(0)
    expect(firstVowelIndex("challenges")).toEqual(2)
  })
})



//$ yarn jest. 1 failed, function not defined

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2



// b) Create the function that makes the test pass.

//iterate over string using for loop
//check if the current letter = a, e, i , o , or u
//if it is one of those, return i


const firstVowelIndex = (str) => {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a'|| str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] ==='u') {
      return i
    }
  }
}
//
