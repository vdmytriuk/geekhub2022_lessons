const matrix = (R, C, r0, c0) => {
    let steps = 1;
    const result = [];

    const checkRange = (r0, col) => {
        if (r0 < 0 || col < 0 || r0 >= R || col >= C)
            return;

        result.push([r0, col]);
    }

    while (result.length < R * C) {
        for (let i = 0; i < steps; i++) {
            checkRange(r0, c0++);
        }

        for (let i = 0; i < steps; i++){
            checkRange(r0++, c0);
        }

        steps++;

        for (let i = 0; i < steps; i++) {
            checkRange(r0, c0--);
        }

        for (let i = 0; i < steps; i++) {
            checkRange(r0--, c0);
        }

        steps++;
    }

    return result;
};


console.log(matrix(5, 6, 1 , 4))




