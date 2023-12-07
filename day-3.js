import * as fs from 'fs';

// const data = fs.readFileSync('day-3-data.txt', 'utf-8');
const data = fs.readFileSync('day-3-test.txt', 'utf-8');

const lines = data.split("\n");

const symbolRegex = /[^\d\.]/g

const getPartsPerLine = (line) => {
    const regex = /\d+/g
    const digits = line.match(regex)
    return digits?.map((digit) => 
        ({ number: parseInt(digit), coord: [line.indexOf(digit), line.indexOf(digit) + digit.length - 1 ]})
    )
}

const totalPerLine = lines.map((line, i) => {
   
    const parts = getPartsPerLine(line)

    if(parts) {
        const total =  parts.filter((part) => {
            const currentLine = lines[i]
            const lineAbove = lines[i - 1] ?? lines[i];
            const lineBelow = lines[i + 1] ?? lines[i];
           
            const start = part.coord[0] - 1 > 0 ? part.coord[0] - 1  : 0
            const end = part.coord[1] + 2 > line.length ? line.length : part.coord[1] + 2

            // for(let p = Math.max(0, i - 1); p  <= Math.min(lines.length - 1, i+ 1); p++) {
            //     if(line[p].slice(start, end).match(symbolRegex)){
            //         return true
            //     }
            //     return false
            // }
            if(currentLine.slice(start, end).match(symbolRegex)) {
                return true
            } 
            if(lineAbove && lineAbove.slice(start, end).match(symbolRegex)){
                return true            
            }
            if (lineBelow && lineBelow.slice(start, end).match(symbolRegex)){
                return true            
            }
            return false
        }).reduce((acc, curr) =>  acc + curr.number, 0)
        return total
    } 
    return 0
})

console.log(totalPerLine)

const total = totalPerLine.filter(x => !!x).reduce((acc, curr) => acc + curr, 0)

console.log(total)

