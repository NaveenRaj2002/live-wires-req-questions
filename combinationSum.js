function combinationSum(candidates, target) {
    const dp = new Array(target + 1).fill().map(() => []);

    for (let candidate of candidates) {
        for (let i = candidate; i <= target; i++) {
            if (i === candidate) {
                dp[i].push([candidate]);
            } else {
                for (let combination of dp[i - candidate]) {
                    dp[i].push([...combination, candidate]);
                }
            }
        }
    }

    return dp[target];
}

// Example usage:
const candidates = [2, 3, 6, 7];
const target = 7;
const combinations = combinationSum(candidates, target);

console.log(combinations);

/* 

EXPLANATION:
--> create an array dp of length target + 1, where each element is an empty array. dp[i] will store all unique combinations that add up to i.

--> Iterate through the candidates array and for each candidate, Iterate from the candidate value to the target value.

--> If i is equal to the candidate value, then push a new array [candidate] to dp[i] because it forms a valid combination.

--> If i is greater than the candidate value, then iterate through dp[i - candidate] (the combinations that add up to i - candidate) and append the current candidate to each of those combinations to create new combinations. Then push these new combinations to dp[i].

--> After processing all candidates, dp[target] will contain all unique combinations that add up to the target sum.

*/