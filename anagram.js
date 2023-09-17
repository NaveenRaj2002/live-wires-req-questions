const anagranChecker = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return str1 === str2;
};

const str1 = "listen";
const str2 = "silent";
const isAnagram = anagranChecker(str1, str2);

if (isAnagram) {
  console.log(`${str1} and ${str2} are anagrams.`);
} else {
  console.log(`${str1} and ${str2} are not anagrams.`);
}


/* 

EXPLANATION:
--> The function starts by comparing the lengths of str1 and str2. If they have different lengths, it immediately returns false. This is a simple optimization to quickly identify cases where the strings cannot be anagrams because they have different numbers of characters.

--> If the lengths of str1 and str2 are the same, the function proceeds to check if they are anagrams.

--> Both str1 and str2 are converted into arrays of characters using the split("") method. This splits each string into an array where each element represents a character in the string.

--> The sort() method is then applied to both arrays. This sorts the characters in each array in alphabetical order. Sorting ensures that if two strings are anagrams, their sorted versions will be identical.

--> After sorting, the arrays of characters are joined back into strings using the join("") method. This results in two new strings, str1 and str2, where the characters are in alphabetical order.

--> Finally, the function compares str1 and str2. If they are identical, it returns true, indicating that the input strings are anagrams. Otherwise, it returns false, indicating that the strings are not anagrams.

*/