let table;

function preload() {
    table = loadTable("assets/eggpression.csv", "csv", "header");
}

function setup() {
    createCanvas(800, 600);
    background(220);

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
    for (let i = 0; i < table.getRowCount(); i++) {
        const year = table.getString(i, "Year");

        text(year, 50 * (i+1), height/2);
    }
    text("Annual Cost of Dozen Eggs in Relation to National Depression Rate", 225, height*0.6);
    
}