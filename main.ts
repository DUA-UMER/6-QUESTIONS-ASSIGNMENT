//QUE 01:
 //*Creat a variable named miles & assign value representing distance in miles.
 //*calculate the equivalent distance in kilometers using the conversion factors (1 miles = 1.60934 kilometers), you can achive this by multiplying miles by 1.60934.
 //*store the converted distance in kilometers in a variable named kilometers.
 //*use console.log to print a message in th efollowing formula.

import inquirer from "inquirer";

const miles :  number = 1.60934;;
 
const kilometer = await inquirer.prompt(
    {
        type: "number",
        name: "distance",
        message: "Enter the distance in kilometer",
    }
);

console.log(`The distance of ${kilometer.distance} kilometer is equal to ${miles*kilometer.distance} miles`);



//question:02
//*prompt the user to enter the number.
//*compare the entered number with a daynamic number value.
//*Output the result indicating whether the entered number is greater than ,  equal to , or less than the dynamic number value.

let num = await inquirer.prompt([
    {
        type: "number",
        name: "userNumber",
        message: "enter a user number",
    }
]);
let dynamicNumber = 31;

if (num.userNumber > dynamicNumber){
    console.log("your number is greater than 31")
}
else if (num.userNumber < dynamicNumber){
    console.log("your number is less than to 31")
}
else if (num.userNumber = dynamicNumber) {
    console.log("your number is equal to 31")
}
else{};

//question no03
//*prompt the user to enterd a name.
//*use a switch statement to check if the entered name is a known friend.
//*Output a confirmation message if the entered name is a known , otherwise output a default response.

let user:{name:string} = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "enter your name",
    },
]);
let {name} = user;
let userName = name.toUpperCase();
switch(userName) {
    case "Abrish":
        console.log("brish is a known friend. Hello Abrish");
        break;
    case "dua":
        console.log("dua is a known friend. Hello dua");
        break;
    default:
        console.log("unknown user");
}
//question no 04
//*set up two different variables with deffirent values.
//*call a function with these variable as arguments & output the result using console.log.
//*creat a second call to the function with two more numbers as arguments.

let num1 : number = 8;
let num2 : number = 10;
function numQ (num1 : number, num2 : number){
    let result = num1 + num2
    console.log(result);
}
num(num1,num2) ;

let num3 : number = 2;
let num4 : number = 9;
num(num3,num4);


//Question:05
//*set up two variables containing number values.
//*set up a variable to hold an operator(+or-).
//* creat a function that takes two numbers and an operators as parameters, performs the corresponding operation, and returns the result.
//*Update the operators value and call the function again with the updated arguments

let num8 : number = 20;
let num9 : number =9;
let operator = "+";

function calculate(num8 : number, num9 : number, operator : string){
 return operator === "+" ? num8 + num9 : num8 - num9;
}
console.log(`result of ${num8} ${operator} ${num9} is:`,calculate(num8, num9, operator)) ;
operator = "-";
console.log(`result of ${num8} ${operator} ${num9} is:`,calculate(num8, num9, operator));




//Question:06
//*Assign a function expression to a variable, with one parameter that outputs the provided argument to the console.
//*pass an argument in to the function.
//*creat the same function as a normal function declaration.


let function1 =  function (watch:string){
    console.log(watch);
};
function1("Hello MALIKRIMSHA");
function function2(watch:string){
    console.log(watch);
}
function2("Hello");



 


