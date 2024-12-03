const fs = require('fs');
let content = fs.readFileSync('../input').toString();

let expressions = content.match(/mul\(\d*,\d*\)/gm);
let total = 0;

for(let expression of expressions) {
  let d = expression.match(/\d*\,\d*/)[0].split(',');
  total += d[0] * d[1];
  console.log(d[0], ' + ', d[1], ' = ', d[0] * d[1]);
}

console.log(total)