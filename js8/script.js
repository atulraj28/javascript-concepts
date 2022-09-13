// ARRAY

// let book1="math";
// let book2="physics";
// let book3="bio";
// let book4="computer science";

// console.log(book3);
//these were the traditional methods

let book = ["math", "physics", "bio", "computer science"]; // first way of decalring array
// let book1=new Array("math","physics","bio","computer science");second method of decalring array
console.log(book);

book[1] = "english"; //updating any array;
console.log(book);
console.log(book.length); // length of array
book.push("hindi"); // to add another element at the end
console.log(book);
book.unshift("hindi"); // to add another element at the front
console.log(book);

book.pop(); // to remove one element form end
console.log(book);
book.shift(); // to remove one element from front
console.log(book);

book.splice(1, 1); // is used to remove elements from any where and can remove many elemnet at once its first parameter is the INDEX of the start of the removal of element and second element the INDEX  of the elements to remove like from index 1 ot index 2;
console.log(book);

// book.length=0;// to empty the array
// book=[];//another method to empty an array

let postionof = book.indexOf("bio");
console.log(postionof);

console.log(Array.isArray(book)); // to check wether the given variable is an array or not it return true or false

let text = "this is a random text";
let wordarray = text.split(" "); //split variable split a text into different element and stores in array the paranthesis takes the paramenter of the charecter from which the spliting should be done here we have given a space to split from we provide any charecter
console.log(wordarray);

let joinedarray = book.join(" "); //join is used to join the elements of the array into text form and parameter is the charecter which will be between two element after joining
console.log(joinedarray);

let anotherbook = ["hindi", "english"];
let NewBook = book.concat(anotherbook);
console.log(NewBook);

//MULTIDIAMENTIONAL ARRAY

let bookWithPages = [
  ["math", "300"],
  ["physics", "500"],
  ["bio", "400"],
];

let fetch=bookWithPages[1][0];
console.log(fetch);



// accecing the element with loops

let newbooks=["math","bio","computer science","english","hindi","zoology"];
console.log(newbooks);

let newbookslength= newbooks.length;
console.log(newbookslength);

for(i=0;   i<newbookslength;   i++){

    console.log(`element ${i} is ${newbooks[i]} \n`);
}



// for each function

newbooks.forEach(myfu);

function myfu(value){
    console.log(value);
}