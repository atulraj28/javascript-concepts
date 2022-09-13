//FUNCTIONS

// let us take an example of table for making a table fuction

// function MulTable(){
//     for(i=1;i<=10;i++){
//         document.write(`2*${i}=${2*i}`);
//         document.write("<br>");

//     }
//     document.write("<br>");
//     document.write("<br>");
// }

// MulTable();

// document.write("Hello <br>");

// MulTable();

// PARAMETERS AND ARGUMENTS
// function MulTable(num){
//     for(i=1;i<=10;i++){
//         document.write(`${num}*${i}=${num*i}`);
//         document.write("<br>");

//     }
//     document.write("<br><br>");
// }

// MulTable(3);
// MulTable(12);

// example two number add for multiple parameters
// function add(num1,num2){
//     document.write(num1+num2);
// }

// add(5,7);

// arguments objects

function add() {
  if (arguments.length == 0) {
    console.log("no argument passed");
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }
    console.log(sum);
  }
}

let addition = add;

add(1, 2, 3);

// retun in fuction

function addnew(a, b) {
  return a + b;
}

let c = addnew(6, 6);
console.log(c);

// when the code reaches its first return the programm will terminate itself form that point 
// we can use multiple return in conditonal statement or in other programm but after return no code will run
//LIKE

function compare(a,b){
    if(a>b){
        return 1;
    } else if(a<b){
        return -1;
    } else{
        return 0;
    }
}

let abc=compare(7,6);
console.log(abc);


//local and gloable variable--> local variable can not be used outside the function where it  is defiened but hte globale vaeiable can be used anywhere in the programm.


let car="audi";// gloable variable

function additionadd(){
    let result=33;//local variable
    console.log(result);
}

additionadd();