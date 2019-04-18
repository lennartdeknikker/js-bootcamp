let arrays = [[1, 2, 3], [4, 5], [6]];
const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);

function flatten2(arrs) {
 arrs.reduce(reducer)
}

console.log(flatten(arrays));
