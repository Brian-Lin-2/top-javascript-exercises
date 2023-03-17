const fibonacci = (place) => {
    // Edge case.
    if (place < 0) {
        return "OOPS";
    }

    place = parseInt(place);

    // Sum of the two preceding numbers.
    const fibonacci = [];

    for (let i = 0; i < place; i++) {
        // First two terms are always 1.
        if (i === 0 || i === 1) {
            fibonacci.push(1);
        }

        else {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
    }

    // The indicated place should be the last number.
    return fibonacci[place - 1];
};

// Do not edit below this line
module.exports = fibonacci;
