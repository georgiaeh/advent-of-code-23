import * as fs from 'fs';

const data = fs.readFileSync('day-4-data.txt', 'utf-8');
const cards = data.split("\n");

let totalPoints = 0
let copies = Array(cards.length).fill(1)

for(let i = 0; i <= cards.length - 1; i++) {
    const winningNumbers = cards[i].split("|")[0].split(":")[1].trim().split(" ").filter(x => x.length)
    const cardNumbers = cards[i].split("|")[1].trim().split(" ").filter(x => x.length)
    const noWinningNumbers = winningNumbers.filter((number) => cardNumbers.includes(number)).length
    const points = noWinningNumbers >= 1 ? Math.pow(2, noWinningNumbers-1) : 0
    totalPoints = totalPoints + points

    if(noWinningNumbers > 0) {
        for(let j = 1; j <= noWinningNumbers; j++){
            if (copies[i + j]) copies[i + j] += copies[i];
        }
    }
    
}
console.log(totalPoints)
const copiesCount = copies.reduce((acc, val) => acc + val, 0)
console.log(copiesCount)