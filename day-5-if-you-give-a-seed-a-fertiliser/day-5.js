import * as fs from 'fs';

const data = fs.readFileSync('day-5-test.txt', 'utf-8');
const input = data.split("\n");

const seeds = input[0].split(":")[1].split(" ").filter(x => x.length);
