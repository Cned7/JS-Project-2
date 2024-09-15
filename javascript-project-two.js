// STRING MANIPULATION FUNCTIONS

// 1. Function to reverse a string

let stringData = "Chinedu Nwogu";
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Reversed String Data:", reverseString(stringData));

// 2. Create a function to count characters

let characters = "Welcome to Software Development Bootcamp";
function countCharacters(characters) {
  const characterCount = characters.length;
  console.log("Character count:", characterCount);
}

countCharacters(characters);

// 3. Implement a function that capitalizes the first letter of each word in a sentence.
const sentence =
  "my name is chinedu nwogu, an upcoming software developer based in lagos nigeria.";

function capitalizeFirstLetterOfEachWord(sentence) {
  const words = sentence.split(" ");
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  const capitalizedSentence = capitalizedWords.join(" ");
  console.log("Capitalized First Letters:", capitalizedSentence);
}

capitalizeFirstLetterOfEachWord(sentence);

//ARRAY FUNCTIONS

// 1. Find the maximum and minimum number in an array
const numbersArray = [12, 18, 3, 38, 76, 12, 21, 58, 41, 63];
let result = findMaximumAndMinimumNumbers(numbersArray);

function findMaximumAndMinimumNumbers(numbersArray) {
  let maximumNumber = Math.max();
  let minimumNumber = Math.min();

  for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > maximumNumber) {
      maximumNumber = numbersArray[i];
    }

    if (numbersArray[i] < minimumNumber) {
      minimumNumber = numbersArray[i];
    }
  }

  return { maximumNumber, minimumNumber };
}
console.log("Maximum Number:", result.maximumNumber);
console.log("Minimum Number:", result.minimumNumber);

// 2. Sum of Array

const arrayNumbers = [11, 8, 23, 19, 37, 68, 13, 92, 87, 81];

let sumOfArrayNumbers = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  sumOfArrayNumbers = arrayNumbers[i];
}

console.log("Sum of Array Numbers:", sumOfArrayNumbers);

// 3. Filter Array

const arrayElements = [
  "Chinedu",
  "Emeka",
  "Babatunde",
  "Segun",
  "Mayowa",
  "Austin",
  "Emmanuel",
  "Ayo",
  "Ike",
  "Linda",
];

const shortNames = filterByLength(arrayElements, 5).filter(
  (item) => item.length <= 5
);
const longNames = filterByLength(arrayElements, 6).filter(
  (item) => item.length > 5
);

function filterByLength(array, maxLength) {
  return array.filter((item) => (item.length = maxLength));
}

console.log("Items with 5 or less characters:", shortNames);
console.log("Items with 6 or more characters:", longNames);

// MATHEMATICAL FUNCTIONS

// 1. Factorial

const number = 7;
const factorial = calculateFactorial(number);

function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log("Factorial of", number, "is:", factorial);

// 2. Prime Number Check

const givenNumber = 17;
const isPrimeNumber = isPrime(givenNumber);

function isPrime(givenNumber) {
  if (givenNumber <= 1) {
    return false;
  }

  if (givenNumber <= 3) {
    return true;
  }

  if (givenNumber % 2 === 0 || givenNumber % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= givenNumber; i += 6) {
    if (givenNumber % i === 0 || givenNumber % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
console.log("Is", givenNumber, "a prime number?", isPrimeNumber);

// 3. Fibonacci Sequence
const terms = 15;
const fibonacciNumbers = generateFibonacci(terms);

function generateFibonacci(n) {
  if (n <= 0) {
    return [];
  }

  const fibonacciSequence = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextTerm);
  }

  return fibonacciSequence;
}
console.log("Fibonacci sequence up to", terms, "terms:", fibonacciNumbers);
