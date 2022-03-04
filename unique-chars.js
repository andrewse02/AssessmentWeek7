const hasUniqueCharacters = (string) => new Set(string.split("")).size === string.length;

console.log(hasUniqueCharacters("Moonday"));

// Space Complexity: O(n)