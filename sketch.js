let table;

function preload() {
    table = loadTable("assets/MovieData.csv", "csv", "header");
}

function setup() {
    createCanvas(800, 600);
    background(220);

    // console.log(table);

    for(let r = 0; r < table.getRowCount(); r++) {
        const title = table.getString(r, "title");
        console.log(title);
    }
}

function draw() {
    rect(10, 20, 30, 40);
}