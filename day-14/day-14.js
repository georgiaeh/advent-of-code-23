import * as fs from 'fs';

const data = fs.readFileSync('day-14-test.txt', 'utf-8');
const lines = data.split("\n")
console.log(lines)

const moveRocks = (lines) => {
//if top line no change
const result = lines
//forEach line
    for(let j = 1; j<lines.length; j++) {
        let line = lines[j]
        //for each point in the line see if there is space in the line above
            for(let i = 0; i <= line.length; i++){
                if(line[i] === 'O' && lines[j-1][i] === '.') {
                    result[j-1] = result[j-1].substring(0, i) + 'O' + result[j-1].substring(i + 1);
                    result[j] = result[j].substring(0, i) + '.' + result[j].substring(i + 1);
                }
            }
    }
    console.log(result)
    return result
}

moveRocks(lines)

