function maxSubArraySum(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(array)); // Output: 6 (corresponding to [4, -1, 2, 1])

/* 

EXPLANATION:
--> Initialize two variables:
    maxSum: This variable keeps track of the maximum subarray sum encountered so far. It is initially set to negative infinity (-Infinity) to ensure that any positive value in the array will be considered as a potential maximum.

    currentSum: This variable represents the sum of the current subarray being examined. It is initially set to 0.
Start a for loop that iterates through the elements of the input array arr.

--> Inside the loop, update currentSum by adding the current element (arr[i]) to it. This step simulates extending the current subarray.

--> Check if currentSum is greater than maxSum. If it is, update maxSum with the value of currentSum. This is where we keep track of the maximum subarray sum encountered so far. If currentSum becomes greater than maxSum, it means the current subarray has a greater sum than any subarray encountered before.

--> Check if currentSum is less than 0. If it is, reset currentSum to 0. This step is crucial because if the current subarray sum becomes negative, it means that including it in any subsequent subarray will only decrease the total sum. Therefore, it's better to start a new subarray from the next element.

--> Repeat the above process for each element in the array, effectively scanning through the entire array while keeping track of the maximum subarray sum and handling negative subarrays.

--> After the loop has completed, maxSum will contain the maximum subarray sum encountered in the array.

--> Finally, return the value of maxSum as the result.

*/