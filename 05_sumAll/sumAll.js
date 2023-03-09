const sumAll = (start, end) => {
    // Edge cases.
    if (start < 0 || end < 0) {
        return "ERROR"
    }

    if (typeof start !== "number" || typeof end !== "number") {
        return "ERROR";
    }

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    let sumOfAll = 0;

    for (let i = start; i <= end; i++) {
        sumOfAll += i;
    }

    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
