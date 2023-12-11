import * as fs from 'fs';

const data = fs.readFileSync('day-9-data.txt', 'utf-8');
const input = data.split("\n").map((arr) => arr.split(" ").map((x) => parseInt(x)));

let histories = []
const getDifferencesAtEachStep = (arr) => {
    const result = []
    for(let i = 0; i < arr.length - 1; i++ ){
        result.push(arr[i+1] - arr[i]) 
    }
    return result
}

const isDifferenceZero = (arr) => arr.every(x => x === 0)


const getNextValue = (arr) => {
    const differencesArray = getDifferencesAtEachStep(arr)
    if (isDifferenceZero(differencesArray)) {
       return processHistories(histories)
    } else {
        histories.push(differencesArray)
        return getNextValue(differencesArray)
    }
}

const processHistories = (histories) => {
    let  returnVal
    for(let j = histories.length - 1; j >= 0 ; j--){
        const increase = j === histories.length - 1 ? 0 : histories[j+1].pop();
        const currentLastNumber = histories[j][histories[j].length - 1]
        const newLastNumber = currentLastNumber + increase
        histories[j].push(newLastNumber)


        const decrease = j === histories.length - 1 ? 0 : histories[j+1][0]
        const currentFirstNumber = histories[j][0]
        const newFirstNumber = currentFirstNumber - decrease

        histories[j].unshift(newFirstNumber)
    }
    returnVal = histories[0][0]
    return returnVal
}

let sum = 0
for( let i = 0; i < input.length; i++ ){
    histories.push(input[i])
    const nextVal = getNextValue(input[i])
    histories = []
    sum = sum + nextVal
}
console.log(sum)



