// Method 1
const name = "naveenraj";
const reversedString = name.split("").reduce((acc, letter) => letter + acc, "");
console.log(reversedString);

/* 

EXPLANATION:
--> The code takes a string name, splits it into individual characters, and then uses the reduce method to reverse the order of those characters, producing a reversed string. Finally, it prints the reversed string to the console.

*/

// Method 2
let revStr = "";
for (let i = name.length - 1; i >= 0; i--) {
  revStr += name[i];
}
console.log(revStr);


/* 

EXPLANATION:
--> let revStr = "";: Initialize an empty string revStr to store the reversed string.

--> for (let i = name.length - 1; i >= 0; i--) {: Start a for loop that iterates backward through the characters of the name string, starting from the last character and moving towards the first character.

--> revStr += name[i];: In each iteration of the loop, it appends the current character (name[i]) to the revStr string. This effectively builds the reversed string character by character.

--> Finally, console.log(revStr); prints the reversed string to the console.

*/