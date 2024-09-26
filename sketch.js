let gen = [];
let size = 250;
let generation = 0;
let w = 5;
let cols, rows;

let ruleset;
// ruleset = [0, 1, 0, 1, 1, 0, 1, 0];  // ruleset 90
// ruleset = [0, 0, 0, 1, 1, 1, 1, 0];  // ruleset 30
// ruleset = [1, 1, 0, 1, 0, 1, 0, 1]; // rule 34 haha

// 01011010
// 2 + 8 + 16 + 64 = 90s

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(windowWidth / w);
  rows = floor(windowHeight / w);

  ruleset = createRuleSet(73);

  gen.length = cols;
  //gen = Array(cols);
  console.log(gen[0]);

  for (let i = 0; i < gen.length; i++) {
    gen[i] = 0;
    if (i == Math.floor(gen.length / 2)) {
      gen[i] = 1;
    }
  }
}

function draw() {
  //background(230);
  noStroke();

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] == 0) {
            fill(255);
        } else {
            fill(0);
        }
        rect(i * w, generation * w, w, w);
    }
  }

//   for (let i = 0; i < gen.length; i = i + 1) {
//     if (gen[i] == 0) {
//       fill(255);
//     } else {
//       fill(0);
//     }
//     rect(i * w, generation * w, w, w);
//   }

  if (generation < 120) {
    computeNextGen();
  }
}

function computeNextGen() {
  let nextGen = Array(cols);
  let len = grid.length;
  let prevGen = grid[len-1];

  for (let i = 0; i < gen.length; i = i + 1) {
    let a = gen[i - 1];
    if (a == undefined) {
      a = 0;
    }
    let b = gen[i];
    let c = gen[i + 1];
    if (c == undefined) {
      c = 0;
    }
    nextGen[i] = rule(a, b, c);
  }
  gen = nextGen;
  generation++;
}

//let ruleset = [0, 1, 0, 1, 1, 0, 1, 0]; 

function rule(a, b, c) {
  let numberString = "" + a + b + c;
  let index = parseInt(numberString, 2);
  return ruleset[7 - index];
}

function createRuleSet(num) {

    return newRuleSet;
}

function setUpGeneration() {
    grid = [];
    let row = Array(cols);
    for(let i = 0; i < cols; i++) {
        row[i] = 0;
    }
    row[floor(cols/2)] = 1;
    grid.push(row);
}

function createUI() {
    sel = createSelect();
    sel.position(10, 10);
    for(let i = 0; i < 256; i++) {
        sel.option("" + i);
    }
    sel.changed(handleSelection);
}

function (handleSelection() {
    let num = parseInt(sel.value);
}