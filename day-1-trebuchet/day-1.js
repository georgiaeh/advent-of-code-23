import * as fs from 'fs';

const data = fs.readFileSync('day-1-data.txt', 'utf-8');
const values = data.split("\n");

const sumFirstLastDigit = (values) => {
    const sum = values.reduce((acc, value) => {
        const regex = /\d/g
        const digits = [...value.match(regex)]
        return acc + parseInt(`${digits[0]}${digits[digits.length-1]}`)
    }, 0)

    return sum
}

const replaceNumbers = (values) => {
    const numbers = {
    'one': 'o1e',
    'two': 't2o',
    'three': 't3e',
    'four': 'f4r',
    'five': 'f5e',
    'six': 's6x',
    'seven': 's7n',
    'eight': 'e8t',
    'nine': 'n9e'
 }

    const replacedValues = values.reduce((acc, value) => {
        const replaced = Object.keys(numbers).reduce((acc, number) => {
            acc = acc.replaceAll(number, numbers[number])
           return acc
        }, value)
        return [...acc, replaced]
    }, [])

    return replacedValues
}

const getCalibrationValue = (values) => {
    const replacedValues = replaceNumbers(values)
    return sumFirstLastDigit(replacedValues )
}

getCalibrationValue(values)