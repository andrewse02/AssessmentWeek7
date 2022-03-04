function addToZero(array) {
    if(array.length <= 1) return false;

    const stored = [];

    for(let i = 0; i < array.length; i++) {
        if(stored.includes(array[i] * -1)) return true;
        stored.push(array[i]);
    }

    return false;
}

console.log(addToZero([1,2,3,-2]));

// Space Complexity: O(n)