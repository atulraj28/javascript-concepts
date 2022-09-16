// OBJECT
//properties of object
// differece between object and array is its brackets we use  () for array and {} for object


let person ={
    firstName:'atul',
    lastName:'raj'
};

console.log(person.lastName);// fist method to invoke object containt
console.log(person['firstName']);// second methos to invoke object containt

//modifying the objects 
person.firstName='ar';//this will change the containt of firstName

person.age=22;// this will add extra property in the person object

delete person.age;// this will delete the property age from person object

console.log('height' in person);// this will give true or false value if the asked property (in this case height ) is in the object or not 

for(let key in person){
    console.log(key+ ": " +person[key]);
}



//methods in object

person.sayHello=function(){
    console.log("Hello");
}// this is the first way to make method 
person.sayHello();

function helloo(){
    console.log("hello");
}
person.sayHello2=helloo;//second way to create method in object
person.sayHello2();

//third method to create a method 
let person2={
    firstName:"amit",
    lastName:"kumar",
    sayHello3:  function(){
        console.log("hello again");
    }
}
person2.sayHello3();

// fourth method to create a method

let person3={
    firstName:"amit",
    lastName:"kumar",
    sayHello4 (){
        console.log("hello again again");
    }
}
person3.sayHello4();


//this in object 

let personthis={
    firstName:"amit",
    lastName:"kumar",
    sayHellothis (){
        console.log("Hello i am "+this.firstName+" i have a "+car.brand+" car");
    }
}
let car={
    brand:'tata',
    model:'safari'
}

personthis.sayHellothis();

//math object like

console.log(Math.PI);
console.log(Math.E);


var x=Math.round(4.5);//round method will roundup the value to its nearest number if greater than or equl to .5 then the upper and if lower the lower

console.log(x);
var x1=Math.ceil(4.5);//will show the upper limit when there is decimal
console.log(x1);

var x2=Math.floor(4.5);//will show the lower limit when there is decimal
console.log(x2);

var x3=Math.trunc(4.5);// will remove decimal
console.log(x3);

var x4=Math.pow(2,3);//calculate the power of first to second ie 2^3
console.log(x4);

var x5=Math.sqrt(100);// will show the square root
console.log(x5);

var x6=Math.min(2,4,63,52,-24,42);// will show the minimum among the given number
console.log(x6);

var x7=Math.max(2,4,63,52,-24,42);// will show the maximum among the given number
console.log(x7);

//GENERATING RANDOM NUMBER

let a=Math.random();// will generate random number between o-1
console.log(a);

let a1 = Math.floor(Math.random()*10)+1; //will give random number between 1-10
console.log(a1);

let a2=Math.floor(Math.random()*(25-15)+15);//will give random number between 15-25 included 15,25
console.log(a2);

function getrandom(min,max){
    let a3=Math.floor(Math.random()*(max-min+1)+min);

return a3};

console.log(getrandom(1,6));// will genereate random values between two given numbers


// DATE OBJECTAS

let d = new Date();// date will be what is currently on computer
console.log(d);

let d2= new Date(2018,11,13,10,33,56,7);// PARAMETERSS are year month day hour minute second milisecond
console.log(d2);


console.log(d2.getFullYear());//will give you the specific thing that you demand ie year month day hour minute second milisecond

d2.setFullYear(2020);// change the specific things that you want to change

d2.setDate(d2.getDate()+50);// it will change the date from the given date to that of 50 days later
console.log(d2);

//compare two dates 
if (d>d2){
    console.log("d2 is past date");
}
else if(d2>d){
    console.log("d2 is future date");

}
else{
    console.log("d2 is same date");
}

//new key word 

var people = new Object(); // this is another way of making new onbject

people.name="atul raj";


console.log(people.name);

var people2 = {
    name: "atul",
    age:22,
    // get getname(){
    //     return this.name.toUpperCase();
    // },

    set setname(n){
        this.name=n.toUpperCase();
    }
};

people2.setname ="ajit";

console.log(people2);

//OBJECT CONSTRUCTOR
// var student1={
//     firstName="atul",
//     lastNmae= "raj",
//     age =22,
//     class: 5
// }

// var student2={
//     firstName :"atul",
//     lastNmae: "raj",
//     age :25,
//     class: 6
// }

function Student (first,last,age,cls){
    this.firstName =first;
    this.lastName= last;
    this.age=age;
    this.class=cls;
}

var student2=new Student("atul","raj",23,5);

student2.nationality= "Indian";

console.log(student2);


//PROTOTYPE OBJECT

Student.prototype.city="gaya";
// since we can not add directely into  constructor we have to use the keyword prototype to add another property in to the constuctore object
console.log(student2.city);



// nested object 
var user={
    id:101,
    email: "abc@gamil.com",
    personlInfo:{
        name:"abc",
        adress:{
            street:"akhg",
            city:"delhi",
            country:"india"
        }
    }
};

console.log(user.personlInfo.adress);

// HOISTNG(to lift or pull)


function suno(){
    console.log("helo");
}

suno();

//"use strict"
// when we use the upper function then we can't use the any variable before declaring it priyar 