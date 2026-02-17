
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
*/
//6 

let userAges = [18, 24, 33, 16, 40];
 let hasUnder18 = userAges.some(age =>age < 18);
console.log("At least one user under 18:", hasUnder18);

let allAdults = userAges.every(age => age >= 18);
console.log("All users are 18 or older:", allAdults);


let hasMultipleOf5 = userAges.some(age => age % 5 === 0);
console.log("Any age is a multiple of 5:", hasMultipleOf5);

// q7



