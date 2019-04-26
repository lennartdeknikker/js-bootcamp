 function range(start, end, step = 1) {
    let output = [];
    if (step < 0) {
        step = -step;
    }
    if (start < end) {
        for (i = start; i <= end; i += step) {
            output.push(i);
        }
    } else {
        for (i = start; i >= end; i -= step) {
            output.push(i);
        }
    }
    return output;
}

function sum(numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
