function fizzBuzz(lowest, highest) {
    for (i = lowest; i <= highest; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                console.log('FizzBuzz');
            } else {
                console.log('fizz');
            }
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}


fizzBuzz(1, 100);
