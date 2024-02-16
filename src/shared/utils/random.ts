export const getRandom = (max: number): number => {
    return Math.floor(Math.random() * max);
}

export const getRandomRange = (min: number, max: number): number => {
    return  Math.random() * (max - min) + min;
}