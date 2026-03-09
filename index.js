

//q1

  let productCategorie= [ "Books", "Eletronics", "Pen", "Paper","Fruits"];
  //a
console.log("firstname",productCategorie[0]);

// print last name using .length
console.log('lastname:', productCategorie [productCategorie.length-1]  );

console.log('totalnumber:',productCategorie.length);


productCategorie[1] = "Groceries";
console.log( ' updatearray',productCategorie);  

//q2

let inventory = [10, 20, 30];
inventory.push(40);
inventory.pop();
inventory.unshift(0);
inventory.shift();


inventory.splice(1,1,25,35);
console.log(inventory );   

// q3

let originalScores = [90, 85, 78];
 let referenceCopy = originalScores;
 referenceCopy[0]=100;
 console.log('original:', originalScores);
 console.log('reference:', referenceCopy);
 let spreadCopy =[...originalScores];
spreadCopy[spreadCopy.length - 1] = 50;
console.log("originalScores after spread copy change:", originalScores);
console.log("spreadCopy:", spreadCopy);


 //q4 
 
 let studentNames = ["Alice", "Bob", "Charlie", "Alice", "David"];
  console.log('index of the first occurrence of alice', studentNames.indexOf('Alice')    );

console.log('index of the last occorrence of alice',studentNames.lastIndexOf('Alice')        );

console.log ('Includes Charlie:' ,studentNames.includes('Charlie')    );

console.log('Includes Eve:', studentNames.includes('Eve')     );   

//q5 
let products = [{id: 1, name: "Laptop", price: 1200}, {id: 2, name: "Mouse", price: 25}, {id: 3, name: "Keyboard", price: 75}];

let productId2 = products.find(product => product.id === 2);
console.log("Product with id 2:", productId2);

let productprice = products.findIndex(product => product.price >1000);
console.log("Product with price > 100 :", productprice);

//6 

let userAges = [18, 24, 33, 16, 40];
 let hasUnder18 = userAges.some(age =>age < 18);
console.log("At least one user under 18:", hasUnder18);

let allAdults = userAges.every(age => age >= 18);
console.log("All users are 18 or older:", allAdults);


let hasMultipleOf5 = userAges.some(age => age % 5 === 0);
console.log("Any age is a multiple of 5:", hasMultipleOf5);

// q7


let dataPoints = [42, 10, 500, 2, 77];


let ascending = [...dataPoints].sort((a, b) => a - b);
console.log("Ascending order:", ascending);

let descending = [...dataPoints].sort((a,b)=>b-a );
console.log('descending order :', descending);

let reversed = [...dataPoints].reverse();
console.log("Reversed original order:", reversed);


//q8
 let arr1 = ["A", "B"]; arr2 = ["C", "D"];
 let sentenceParts = ["Hello", "world", "this", "is", "great"];

 let combinedArray = arr1.concat(arr2);
console.log("Combined array:", combinedArray);

let sentence = sentenceParts.join(" ");
console.log("Joined sentence:", sentence);

let middleThree = sentenceParts.slice(1, 4);
console.log("Middle three elements:", middleThree);

//  q9
let nestedList = [1, [2, 3], [4, [5, 6]], 7];


let flatOnce = nestedList.flat();
console.log("Flattened once:", flatOnce);


let fullyFlat = nestedList.flat(Infinity);
console.log("Completely flattened:", fullyFlat);
//Section D: Functional Programming 
// q10 

let pricesUSD = [10.50, 20.00, 5.25];
const exchangeRate = 1.3;


let pricesLocal = pricesUSD.map(price => price * exchangeRate);
console.log("Prices in local currency:", pricesLocal);

let priceStrings = pricesUSD.map(price => `Item price: $${price.toFixed(2)}`);
console.log("Formatted price strings:", priceStrings);

//Q11
let testScores = [45, 78, 92, 30, 65, 88];


let passingScores = testScores.filter(score => score >= 70);
console.log("Passing scores:", passingScores);


let total = testScores.reduce((sum, score) => sum + score, 0);
let average = total / testScores.length;
console.log("Average score:", average);


let belowAverageScores = testScores.filter(score => score < average);
console.log("Below average scores:", belowAverageScores);


//q12 


let  pricesUSD  = [10.50, 20.00,  5.25] ;



let totalCost = pricesUSD.reduce((sum, price) => sum + price, 0);
console.log("Total cost:", totalCost);


let maxPrice = pricesUSD.reduce((max, price) => {
  return price > max ? price : max;
}, pricesUSD[0]);
console.log("Maximum price:", maxPrice);


let countAbove15 = pricesUSD.reduce((count, price) => {
  return price > 15 ? count + 1 : count;
}, 0);
console.log("Prices greater than $15:", countAbove15);


//Section E: Objects Inside Arrays 
//q13

let users = [
  { name: "Zoe", age: 30 },
  { name: "Adam", age: 25 },
  { name: "Charlie", age: 30 }
];


let sortByAge = [...users].sort((a, b) => a.age - b.age);
console.log("Sorted by age:", sortByAge);


let sortByAgeThenName = [...users].sort((a, b) => {
  if (a.age !== b.age) {
    return a.age - b.age; 
  }
  return a.name.localeCompare(b.name); 
});
console.log("Sorted by age then name:", sortByAgeThenName);

// q14



let userNames = users.map(user => user.name);
console.log("User names:", userNames);


let usersOlderThan28 = users.filter(user => user.age > 28);
console.log("Users older than 28:", usersOlderThan28);


//Section F: Multi-Dimensional Arrays 

// q15
// Create a 3x3 matrix initialized with zeros
let gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];


gameBoard[1][1] = 1;


console.log("Top-right corner value:", gameBoard[0][2]);

console.log("Game board:", gameBoard);


//q16 


let gameBoard = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];

let sum = 0;


for (let row = 0; row < gameBoard.length; row++) {
  for (let col = 0; col < gameBoard[row].length; col++) {
    console.log(`Value at [${row}][${col}]:`, gameBoard[row][col]);
    sum += gameBoard[row][col];
  }
}


console.log("Sum of all elements:", sum);


//Section G: Mini Projects
 // project 1
 
let students = [
  { name: "A", score: 85 },
  { name: "B", score: 45 },
  { name: "C", score: 92 },
  { name: "D", score: 68 }
];


let passedStudents = students.filter(student => student.score >= 70);
console.log("Passed students:", passedStudents);


let totalScore = students.reduce((sum, student) => sum + student.score, 0);
let averageScore = totalScore / students.length;
console.log("Average score:", averageScore);


let topScorer = students.reduce((top, student) => {
  return student.score > top.score ? student : top;
});
console.log("Top scorer:", topScorer);

// project 2
//a

let cart = [
  { id: 1, name: "Shirt", price: 20, quantity: 2 },
  { id: 2, name: "Pants", price: 50, quantity: 1 }
];


// b
let totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

console.log("Total cost:", totalCost);


// c

cart = cart.map(item => {
  if (item.id === 1) {
    return { ...item, quantity: 3 };
  }
  return item;
});

console.log("Cart after quantity update:", cart);



cart = cart.filter(item => item.id !== 2);

console.log("Cart after removing item:", cart);



// Section H: Advanced Challenges

// challenge 1


let data = [1, 5, 2, 8, 5, 1, 9, 2];

let uniqueData = data.filter((value, index) => data.indexOf(value) === index);

console.log("Unique data:", uniqueData);



// challenge 2


function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}

let numbers = [1, 2, 3, 4];

let sum = myReduce(numbers, (acc, num) => acc + num, 0);

console.log("Sum using myReduce:", sum);



// challenge 3


let company = [
  { name: "A", details: { city: "NY" } }
];

// a
let spreadCopy = [...company];

spreadCopy[0].details.city = "London";

console.log("Original company:", company);
console.log("Spread copy:", spreadCopy);




// b

let deepCopy = JSON.parse(JSON.stringify(company));

deepCopy[0].details.city = "Paris";

console.log("Original company after deep copy:", company);
console.log("Deep copy:", deepCopy);



// Final Challenge


// a
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];


// b
board[0][0] = "X";
board[1][1] = "O";

console.log("Board:", board);


// c
function checkWin(board, playerSymbol) {

  
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === playerSymbol &&
      board[i][1] === playerSymbol &&
      board[i][2] === playerSymbol
    ) {
      return true;
    }
  }

  
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] === playerSymbol &&
      board[1][i] === playerSymbol &&
      board[2][i] === playerSymbol
    ) {
      return true;
    }
  }

  
  if (
    board[0][0] === playerSymbol &&
    board[1][1] === playerSymbol &&
    board[2][2] === playerSymbol
  ) {
    return true;
  }

  if (
    board[0][2] === playerSymbol &&
    board[1][1] === playerSymbol &&
    board[2][0] === playerSymbol
  ) {
    return true;
  }

  return false;
}



console.log("X wins:", checkWin(board, "X"));
console.log("O wins:", checkWin(board, "O"));






