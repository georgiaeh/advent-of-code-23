import * as fs from 'fs';

const data = fs.readFileSync('day-2-data.txt', 'utf-8');
const values = data.split("\n");

const cubes = {
    red: 12,
    green: 13,
    blue: 14
}

const gameData = values.map((value) => {
    const gameCubes = {
        red: 0,
        green: 0,
        blue: 0
    }

    const rounds = value.split(":")[1].split(";");

    rounds.map((round) => {
        round.split(",").map(x => x.trim()).map((x) => {

            Object.keys(cubes).map((colour) => {
                if (x.includes(colour)) {
                    const count = parseInt(x.replace(colour))
                    gameCubes[colour] = count > gameCubes[colour] ? count : gameCubes[colour]
                }
            })
        })
    })

    return {
        id: parseInt(value.split(":")[0].replace("Game ", "")),
        ...gameCubes
    }
})

const sumOfIds = gameData.filter((value) => 
    Object.keys(cubes).every((colour) => value[colour] <= cubes[colour])
).reduce((acc, value) => (acc + value.id), 0)

console.log("Sum Of Ids: ", sumOfIds)

const powersSum = gameData.map((game) => {
    const cubeCount = [game.red, game.blue, game.green].filter(x => x > 0)
    return cubeCount.reduce((acc, curr) => acc * curr, 1)
}).reduce((acc, curr) => acc + curr, 0);

console.log("Sum of Powers: ", powersSum)