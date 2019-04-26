function triangle(height) {
    for (i = 0; i <= height; i++) {
        let line = '';
        for (l = 0; l < i; l++) {
            line += '#';
        }
        console.log(line);
    }
}

triangle(7);
