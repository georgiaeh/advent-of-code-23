import * as fs from 'fs';

const data = fs.readFileSync('day-2-data.txt', 'utf-8');
const values = data.split("\n");

const cubes = {
    red: 12,
    green: 13,
    blue: 14
}

const total = values.map((value) => {
    const gameCubes = {
        red: 0,
        green: 0,
        blue: 0
    }

    const rounds = value.split(":")[1].split(";");

    rounds.map((round) => {
        round.split(",").map(x => x.trim()).map((x) => {
            if (x.includes("red")){
                gameCubes.red = parseInt(x.replace("red")) > gameCubes.red ? parseInt(x.replace("red")) : gameCubes.red
            }
            if(x.includes("blue")){
                gameCubes.blue = parseInt(x.replace("blue")) > gameCubes.blue ? parseInt(x.replace("blue")) : gameCubes.blue
            }
            if(x.includes("green")){
                gameCubes.green = parseInt(x.replace("green")) > gameCubes.green ? parseInt(x.replace("green")) : gameCubes.green
            }
        })
    })

    return {
        id: parseInt(value.split(":")[0].replace("Game ", "")),
        ...gameCubes
    }
}).filter((value) => {
    return value.red <= cubes.red && value.blue <= cubes.blue && value.green <= cubes.green}
).reduce((acc, value) => (acc + value.id), 0)

console.log(total)