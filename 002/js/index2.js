const fs = require("fs");
let content = fs.readFileSync("../input").toString();

let levels = [];
let safe_reports = 0,
  unsafe_reports = 0;

const char_to_array = () => {
  for (let c of content.split(/\n/)) {
    levels.push(c.split(/\s/).filter((d) => d));
  }
};

check_if_is_safe = (lvl) => {
  let lower = 0,
    higher = 0;
  console.log("current loop", lvl);
  let unsafe_loop = 0,
    safe_loop = lvl.length;
  for (let i = 0; i < lvl.length - 1; i++) {
    let differece = lvl[i] - lvl[i + 1];
    if (differece > 0) {
      higher++;
    } else if (differece < 0) {
      lower++;
    }

    let distance = Math.abs(differece);
    console.log("distance", distance);
    if (distance == 0 || distance > 3 || (higher > 0 && lower > 0)) {
      ++unsafe_loop;
      --safe_loop;
    }
  }

  return unsafe_loop == 0;
};

const try_possibilities = (lvl) => {
  if (check_if_is_safe(lvl)) return true;
  for (let i = 0; i < lvl.length; i++) {
    let new_lvl = JSON.parse(JSON.stringify(lvl));
    new_lvl.splice(i, 1);
    if (check_if_is_safe(new_lvl)) return true;
  }

  return false;
};

const calculate_and_classify = () => {
  char_to_array();
  safe_reports = levels.length;

  for (let level of levels) {
    let isSafe = try_possibilities(level);

    if (!isSafe) {
      safe_reports--;
      unsafe_reports++;
      continue;
    }
  }
};

calculate_and_classify();

console.log(`safe: ${safe_reports}`);
console.log(`unsafe: ${unsafe_reports}`);
