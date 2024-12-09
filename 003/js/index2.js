const fs = require('fs');
let content = fs.readFileSync('../input').toString();

//content = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

content = content.replace(/(?:don't).*?(?=(do\(\)|don't)|$)/gs, '');

let expressions = content.match(/mul\(\d*,\d*\)/gm);
let item_quantity = 0;
let total = 0;
for(let expression of expressions) {
  let d = expression.match(/\d*\,\d*/)[0].split(',');
  total += d[0] * d[1];
  item_quantity++
}

console.log(total, item_quantity)