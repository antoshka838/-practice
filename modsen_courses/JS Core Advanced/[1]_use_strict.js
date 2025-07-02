'use strict'

const countVowels = (str) => str.toLowerCase().split('').filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('Hello Anton!'))