 function min() {
    let minimum = null;
    for (i = 0; i < arguments.length; i++) {
        if (minimum === null || minimum > arguments[i]) {
            minimum = arguments[i];
        }
    }
    return minimum;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
