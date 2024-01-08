import * as fs from 'fs';

const data = fs.readFileSync('day-11-test.txt', 'utf-8');
const lines = data.split("\n")

console.log(lines)

let spings = '.??..??...?##.'
let groups = [1,1,3]


const calculateArrangements = (springs, groups) => {

    if (springs[0] === '.') {
        //recursive
    }

    

}

console.log(calculateArrangements(spings, groups))