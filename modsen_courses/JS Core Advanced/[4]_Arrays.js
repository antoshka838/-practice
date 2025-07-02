const sumSq = (arr) => {
    return arr.map(item => Math.pow(item, 2)).reduce((acc, item) => acc + item, 0);
}

console.log(sumSq([1, 2, 3, 4, 5, 6, 7, 8, 9]))