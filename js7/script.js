 //string manipulation

// let str = "atul raj";
// // let greet=`Hi ${str}`;
// // console.log(greet);

// let str= "atul\n raj";
// console.log(str);

// let str= "atul raj";
// console.log(str.length);
// console.log(str[2]);

// comparing two string
// let str="atul";
// if("atul"==str){
//     console.log("equal");

// }
// else{
//     console.log("not equal");
// }
//javascript is case sensitive

//concatinating two string
// let str ="atul";
// let str2="raj";
// let str3= str.concat(" " ,str2);
// console.log(str3);

// fetching sub string or small part of string.
let str="This is JavaScript tutorial. it is a good tutorial.";
// let substrings=str.substr(8,19 ); // in this function first parameter which is 8 denotes the position of start charecter and second parameter 19 denotes the length of the string which start form 1 not 0
let positon=str.substring(8,18);// in this fuction first parameter which is 8 denotes the starting positon like above function but the second parameter in this function shows the positon from start which start from 0 and calculated from start

console.log(positon);
let position2=str.indexOf('good',6);// this indexof function uses the word as its parameter to give the index of the word which it find the at very first it does not matter if it is a part of different word.the second parameter is the position of from where we want to search from
let position3=str.lastIndexOf('is');// this function searches the word form last of the string
console.log(position3);
console.log(str);
let trimmedstr=str.trim();// we use this funciton to trim the extra space from string we can also use "trimStar"and "trimEnd" to trim the start and end spacees only

console.log(trimmedstr);
console.log(str.toUpperCase());
console.log (str.toLocaleLowerCase());

let replacednewstr=str.replace('good','best'); // it is used to replace the strings with other string
console.log(replacednewstr);

let incluededstr=str.includes('html');// includes is used to check that a particular string is present or not in the total string.it gives a boolean output.
console.log(incluededstr);