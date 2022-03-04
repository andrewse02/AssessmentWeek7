const isPangram = (string) => new Set(string.toLowerCase().split("").filter((char) => /[a-z]/.test(char))).size === 26;

console.log(isPangram("The quick brown fo jumps over the lazy dog!"));

// Space Complexity: O(n)