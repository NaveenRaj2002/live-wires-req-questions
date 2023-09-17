const arrayWithDuplicates = [2, 4, 6, 8, 2, 10, 12, 6];
const arrEleObj = {};
arrayWithDuplicates.forEach((ele, i) => {
  if (!arrEleObj[ele]) {
    arrEleObj[ele] = 1;
  } else {
    arrayWithDuplicates.splice(i, 1);
  }
});
console.log(arrayWithDuplicates);
// output: [ 2, 4, 6, 8, 10, 12 ]


/*

EPLANATION:
--> Initialize an array called arrayWithDuplicates with some duplicate values.

--> Create an empty object called arrEleObj to keep track of unique elements encountered in the array.

--> Use the forEach method to iterate through the arrayWithDuplicates.

--> Inside the forEach loop, for each element (ele) at index i in the array, check if it exists as a key in the arrEleObj object.

--> If arrEleObj[ele] is falsy (meaning the element has not been encountered before), set arrEleObj[ele] to 1. This marks the element as encountered.

--> If arrEleObj[ele] is truthy (meaning the element has been encountered before), it indicates a duplicate. In this case, the code uses splice to remove the duplicate element from the arrayWithDuplicates. The splice method modifies the original array in-place by removing the element at index i.

--> After the forEach loop has completed, the arrayWithDuplicates should contain only the unique elements, and any duplicates have been removed.

*/