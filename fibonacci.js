const n = 10;

let num1 = 0;
let num2 = 1;

for (let i = 0; i <= n; i++) {
  const num3 = num1 + num2;
  console.log(num1);
  num1 = num2;
  num2 = num3;
}


/* 

EXPLANATION:
--> const n = 10;: This sets the value of n to 10, indicating that you want to generate the first 10 Fibonacci numbers.

--> Initialize num1 and num2 to 0 and 1, respectively. These two variables represent the first and second Fibonacci numbers.

--> The for loop iterates from i = 0 to i <= n. Inside the loop:

--> const num3 = num1 + num2; calculates the next Fibonacci number by adding num1 and num2.

--> console.log(num1); prints the current Fibonacci number (num1) to the console.

--> num1 is updated to num2, and num2 is updated to num3, effectively shifting the variables to prepare for the next iteration.

--> This process continues for n iterations, printing the first n Fibonacci numbers.

*/