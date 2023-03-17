const palindromes = (word) => {
    // Filter out lowercase, punctuation, and spaces.
    let filtered = word.toLowerCase().replace(/[^a-z]/g, "");

    // Splits into array, uses reverse method to swap all the indices, rejoins into a String and compares.
    return filtered.split("").reverse().join("") === filtered;
};

// Do not edit below this line
module.exports = palindromes;
