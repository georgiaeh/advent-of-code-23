import * as fs from 'fs';

const data = fs.readFileSync('day-8-data.txt', 'utf-8');
const input = data.split("\n");

const instructions = input[0].split("").map((instruction) => instruction === 'L' ? 0 : 1 )

const map = {}
data.split("\n").filter(x => x.length).slice(1).map((line) => {
    const key = line.split(" = ")[0]
    const elements = line.split(" = ")[1].replace(")", "").replace("(", "").split(", ")
    map[key] = elements
})

const count = 0

const getNextKey = (currentKey, instruction) => { 
    return map[currentKey][instruction]
} 

let currentKey = "AAA"
let steps = 0;

for(let i = 0; i < instructions.length; i++){
    steps = steps + 1
    const nextKey = getNextKey(currentKey, instructions[i])
    if(nextKey !== 'ZZZ') {
        currentKey = nextKey
        if(i + 1 === instructions.length) {
            i=-1
        }
    } else {
        console.log(steps)
    }
}

