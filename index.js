
/* 
git//q1

  let productCategorie= [ "Books", "Eletronics", "Pen", "Paper","Fruits"];
  //a
console.log("firstname",productCategorie[0]);

// print last name using .length
console.log('lastname:', productCategorie [productCategorie.length-1]   );

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
*/

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








