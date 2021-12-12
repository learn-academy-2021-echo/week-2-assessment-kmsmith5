// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log

var cohort = "Echo 2021"
console.log(cohort.split(""))

// a Your answer: ['E', 'c', 'h', 'o', ' ', '2', '0', '2', '1']
// b) Verify and explain: correct, the split method acts on a string. It splits the letters into an array based on the argument passed. in this case .split('') would split every single character (and empty space) as it's own index of the array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: 'Hello, LEARN Student!'
// b) Verify and explain: undefined, because there is no return for the greeter function.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: correct, the .map() method acts on an array and returns an array of the same length with specificed changes. Here each value of the array is multiplied by 2, then the variable representing the code is logged to the console.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: correct, the .filter() method acts on an array and returns an array with only the values specified by the code. Here, it is checked whether each value divided by two does leave a remainder. If so, that value is included in the result. then the variable representing the code is logged to the console.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: 'Javascript'
// b) Verify and explain: correct, the variable logged to the console represents the code that accesses the value at key "languages" of the object myCodingSkills at the zero index.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:  { name: 'George', cohort: 'Delta', year: 2021}
//b) Verify and explain: correct, the variable learnStudent is logged to the console, and it represents an object created with the class of Learn called with "George"
//
