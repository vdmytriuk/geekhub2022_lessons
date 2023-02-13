const getRandomNumb = (max: number, min?: number): number => {
    if (min) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return Math.floor(Math.random() * max);
}

export default getRandomNumb;