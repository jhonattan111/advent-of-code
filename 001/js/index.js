const fs = require('fs');
let content = fs.readFileSync('../input').toString();

let fst_arr = [];
let scd_arr = [];

let distances = [];

const char_to_array = () => {
  content = content.replace(/\s/gm, '\n').trim().split('\n');
  content = content.filter(d => d).map(d => +d);
}

const first_arr = () => {
  const arr = [];
  for (let i = 0; i < content.length; i += 2)
    arr.push(+content[i]);

  return arr.sort();
}

const second_arr = () => {
  const arr = [];
  for (let i = 1; i <= content.length - 1; i += 2)
    arr.push(+content[i]);

  return arr.sort();
}

const calculate_distances = () => {
  for (let i = 0; i < fst_arr.length; i++)
    distances.push(Math.abs(fst_arr[i] - scd_arr[i]));

  let distance = distances.reduce((acc, cv) => acc += cv);
  return distance;
}

char_to_array();
fst_arr = first_arr();
scd_arr = second_arr();

let distance = calculate_distances()

console.log(`distance: ${distance}`)