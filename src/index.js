function sum(a, b) {
    return a + b
}

function capitalize(string) {
    const stringToArr = string.split("")
    const firstLetter = stringToArr.shift().toUpperCase();
    const restOfTheString = stringToArr.join("")
    return firstLetter + restOfTheString
}

function reverseString(string) {
    const stringToArr = string.split("");
    const reversedStringToArr = [];
    for(let i = stringToArr.length; i >= 0; i--) {
        reversedStringToArr.push(stringToArr[i])
    }
    return reversedStringToArr.join('')
}
const calculator = {
   add: (a, b) => a + b,
   subtract: (a, b) => a - b,
   multiply: (a, b) => a * b,
   divide: (a, b) => a / b
}

function caesarCipher(string, shiftFactor) {
    const str = string.split("").map((char) => {
        if(char >= 'a' && char <='z') {
            return String.fromCharCode(((char.charCodeAt(0) - 97 + shiftFactor) % 26 + 26) % 26 + 97);
        }
        if(char >= 'A' && char <= 'Z') {
            return String.fromCharCode(((char.charCodeAt(0) - 65 + shiftFactor) % 26 + 26) % 26 + 65);
        }
        else return char
    })
    return str.join('')
}

function analyzeArray(arr) {
    let average = getAverage(arr);
    let min = getMin(arr);
    let max = getMax(arr);
    let length = arr.length;
    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

function getAverage(arr) {
    let sum = 0;
    arr.forEach(elem => sum += elem)
    return sum / arr.length;
}

function getMin(arr) {
    return Math.min(...arr)
}
function getMax(arr) {
    return Math.max(...arr)
}

export {sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray}