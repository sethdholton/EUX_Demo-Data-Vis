let table;
var unit;
var currentYear = 0;

var colors = [];

function preload() {
    table = loadTable("assets/BPM-data.csv", "csv", "header");
}

function setup() {
    createCanvas(800, 600);

    unit = width/ 20;

    colors.push(color(66, 255, 195)); // 0
    colors.push(color(59, 230, 176)); // 1
    colors.push(color(53, 204, 156)); // 2
    colors.push(color(46, 179, 137)); // 3
    colors.push(color(40, 153, 117)); // 4
    colors.push(color(33, 128, 98)); // 5
    colors.push(color(20, 77, 59)); // 6
    colors.push(color(13, 51, 39)); // 7
    colors.push(color(7, 26, 20)); // 8

    // console.log(table);

    // for(let r = 0; r < table.getRowCount(); r++) {
    //     const title = table.getString(r, "title");
    //     console.log(title);
    // }

    textAlign(CENTER, CENTER);
    textSize(10);
    textFont('Courier New');
}

function draw() {
    background(colors[1]);
    // for (let i = 0; i < table.getRowCount(); i++) {
    //     const year = table.getString(i, "Year");

    //     text(year, 50 * (i+1), height/2);
    // }
    text(table.getString(0, "Year"), width*0.5, height*0.5);
    text(table.getNum(0, "Avg BPM"), width*0.5, height*0.55);
    text(table.getNum(0, "GDP"), width*0.5, height*0.6);

    displayYear();
}

function displayYear() {
    // number background
    fill(colors[0]);
    rectMode(CENTER);
    noStroke();
    rect(unit*2, unit*1.5, unit*2.5, unit*1.5);

    // number display
    fill(colors[7]);
    textSize(unit);
    text(table.getString(currentYear, "Year"), unit*2, unit*1.5);

    // display borders
    fill(colors[1]);
    rect(unit*0.5, unit*1.5, unit*.5, unit*1.5);
    rect(unit*4.5, unit*1.5, unit*2.5, unit*1.5);
}