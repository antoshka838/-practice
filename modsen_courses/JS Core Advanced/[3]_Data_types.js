const sum = (num) => {
    const numbers = String(num).split('');
    const firstNum = Number(numbers[0]);
    const secondNum = Number(numbers[numbers.length-1]);
    return firstNum + secondNum;
}

console.log(sum(53426256245))

console.log(this);