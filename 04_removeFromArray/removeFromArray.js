const removeFromArray = function(array, ...args) {
    const clone = [];
    let index = 0;

    for (let i = 0; i < array.length; i++) {
        if (args.includes(array[i])) {
            continue;
        }

        clone[index++] = array[i];
    }

    return clone;
};

// Do not edit below this line
module.exports = removeFromArray;
