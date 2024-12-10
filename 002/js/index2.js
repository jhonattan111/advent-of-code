const fs = require("fs");
let content = fs.readFileSync("../input_test").toString();

let levels = [];
let safe_reports = 0,
  unsafe_reports = 0;

const char_to_array = () => {
  for (let c of content.split(/\n/)) {
    levels.push(c.split(/\s/).filter((d) => d));
  }
};

const check_array_and_trim = (lvls) => {
  let canRemove = true;
  for(let i = 0; i < lvls.length - 1; i++) {
    console.log(`${lvls[i]} - ${lvls[i+1]} = ${lvls[i] - lvls[i+1]}`);
  }

  return lvls
}

const calculate_and_classify = () => {
  safe_reports = levels.length;

  for (let level of levels) {
    let lower = 0, higher = 0;

    level = check_array_and_trim(level)

    for (let i = 0; i < level.length - 1; i++) {
      let differece = level[i] - level[i + 1];
      if (differece > 0) {
        higher++;
      } else if (differece < 0) {
        lower++;
      }

      let distance = Math.abs(differece);

      if (distance == 0 || distance > 3 || (higher > 0 && lower > 0)) {
        ++unsafe_reports;
        --safe_reports;
        break;
      }
    }
  }
};

char_to_array();
calculate_and_classify();

console.log(`safe: ${safe_reports}`);
console.log(`unsafe: ${unsafe_reports}`);
