function createChessboard(height, width) {
    let output = '';
    for (h = 0; h < height; h++) {
        for (w = 0; w < width; w++) {
            if ((h % 2 + w) % 2 === 0) {
                output += '#';
            } else {
                output += ' ';
            }
        }
        output += '\n';
    }
    console.log(output);
}

createChessboard(8, 8);
