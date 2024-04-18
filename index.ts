// Assign "Hello, World!" to this variable and print it.
console.log(" \n \n-------Question 1 -------");
let greeting="Hellow World";
console.log(greeting);

// Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient
console.log(" \n \n-------Question 2 -------");    
let num1=2;
let num2=3;
console.log("Addition" , num1 + num2);
console.log("Substraction" , num1 - num2);
console.log("Multiply" , num1 * num2);
console.log("Division" , num1 / num2);
console.log("Power" , num1 ** num2);
console.log("Modulus %" , num1 % num2);

//Swap the values of two variables without using a third variable
console.log(" \n \n-------Question 4 ------- ");
let a = 2;
let b = 3;
console.log("A Value = ", a, "B Value = ", b);
[a, b] = [b, a]
console.log("Swap A Value = ", a, "Swap B Value = ", b);

//Use the modulus operator to find the remainder of two numbers.
console.log(" \n \n-------Question 5 -------");
let num3=5, num4=3; 
console.log("Number1 =", num3, "Number 2 = ", num4);
let mod=num3 % num4;
console.log("Modulus for Num1 and Num2= ", mod);

//Increment a variable's value by 1 using two different methods
console.log(" \n \n-------Question 6 ------- ");
let counter = 0; 
console.log("Counter",counter);
console.log("Counter Incremented", ++counter);

//Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
console.log(" \n \n-------Question 7 ------- ");
let aa = true,  bb = false,  cc = true; // Write expressions using these.
console.log("aa= ", aa, "bb= ", bb, "cc= ", cc);
console.log("AND Operator= ", aa && bb && cc);
console.log("OR Operator= ", aa || bb || cc);
console.log("Not Operator= ", !((aa)));

//Instructions: Show examples of using compound assignment operators.
console.log(" \n \n-------Question 8 ------- ");
let x = 10; 
let y=5;
console.log("x = ", x, " and y = ", y);

x += y;
console.log("x afer addition:", x);
x -= y;
console.log("x afer subtraction:", x);
x *= y;
console.log("x afer multiplication:", x);
x /= y;
console.log("x afer division:", x);

//Instructions: Write a program to check if a number is even or odd.
console.log(" \n \n-------Question 9 ------- ");
let checknum=5;
console.log("Number= ",checknum);
if (checknum % 2  === 0){
    console.log(checknum, "is even")
}else{
    console.log(checknum, "is odd")
}

//Instructions: Check if a person is eligible to vote
console.log(" \n \n-------Question 10 ------- ");
const age=18;
console.log("Age is= ",age);
if (age >= 18){
    console.log("You are eligible for voting")
}else{
    console.log("Sorry You are not eligible for voting")
}

//Instructions: Assign a grade based on a numerical score.
console.log(" \n \n-------Question 11 ------- ");
let score=60; // Use conditionals to assign and print grades A, B, C, D, or F.
if (score <=30){
    console.log("Your Score is", score, "and Your Grade is F")
}else if(score <=50){
    console.log("Your Score is", score, "and Your Grade is D")
}else if(score >=50 && score <=70){
    console.log("Your Score is", score, "and Your Grade is C")
}else if(score >=70 && score <=85){
    console.log("Your Score is", score, "and Your Grade is B")
}else if(score >=85 && score <=100){
    console.log("Your Score is", score, "and Your Grade is A")
}

//Instructions: Find the maximum of three numbers.
console.log(" \n \n-------Question 12 ------- ");
let num5=70, num6=20, num7=30; // Determine the largest among these.
console.log("Here are Three numbers ",num5 ," ", num6 ," ", num7);
if (num5 >= num6 && num5>=num7){
    console.log("Largest Number is", num5)
}else if(num6 >= num5 && num6>=num7){
    console.log("Largest Number is", num6)
}else {
    console.log("Largest Number is", num7)
}

//Instructions: Check if a given year is a leap year.
console.log(" \n \n-------Question 13 ------- \n \n");
let year; // Determine if this is a leap year.

//Fahrenheit to Celsius Converter
console.log(" \n \n-------Question 14 ------- ");
let fahrenheit= 222; // Convert this to Celsius and print the result.
console.log("Fahrenheit =", fahrenheit);
console.log(fahrenheit,"Fahrenheit in Celsius",(fahrenheit-32)*5/9);

//Instructions: Check if a number is positive, negative, or zero.
console.log(" \n \n-------Question 15 ------- ");
let checknum2 = -3;
console.log("The number is ", checknum2);
if (checknum2 > 0){
    console.log("Number is Postive")
}else if(checknum2 < 0){
    console.log("Number is Negative")
}else {
    console.log("Number is Zero")
}

//Instructions: Write a program that prints the multiplication table of a given number up to 10.
console.log(" \n \n-------Question 16 ------- ");
console.log("Table of 2");
const table=2;
console.log(table, "*  1 = " , table*1);
console.log(table, "*  2 = " , table*2);
console.log(table, "*  3 = " , table*3);
console.log(table, "*  4 = " , table*4);
console.log(table, "*  5 = " , table*5);
console.log(table, "*  6 = " , table*6);
console.log(table, "*  7 = " , table*7);
console.log(table, "*  8 = " , table*8);
console.log(table, "*  9 = " , table*9);
console.log(table, "*  10 = " , table*10);