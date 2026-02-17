//q1

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

