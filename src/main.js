import * as p5 from "p5/lib/p5.min.js";

import './assets/style.css';

let sketch = (sketch) => {

    sketch.showGrid = true;

    sketch.canvasWidth = window.innerWidth;
    
    sketch.canvasHeight = window.innerHeight;

    sketch.gridColumns = 8;

    sketch.gridRows = 8;

    sketch.gridColumnWidth = sketch.canvasWidth / sketch.gridColumns;

    sketch.gridColumnHeight = sketch.canvasHeight / sketch.gridRows;

    sketch.setup = () =>{
        sketch.angleMode(sketch.DEGREES);
        sketch.createCanvas(sketch.canvasWidth, sketch.canvasHeight);
    }

    sketch.draw = () =>{
        //draw grid
        if (sketch.showGrid) {
            for (var x = 0; x < sketch.canvasWidth; x += sketch.canvasWidth / sketch.gridColumns) {
                for (var y = 0; y < sketch.canvasHeight; y += sketch.canvasHeight / sketch.gridRows) {
                    sketch.stroke(0);
                    sketch.strokeWeight(1);
                    sketch.line(x, 0, x, sketch.canvasHeight);
                    sketch.line(0, y, sketch.canvasWidth, y);
                }
            }
        }
        sketch.drawTheLetterB();
    }

    sketch.squareColours = [
        //column 1
        [0, 0, 0],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
        [0, 0, 0],
        //column 2
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        //column 3
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        //column 4
        [0, 0, 0],
        [255, 255, 255],
        [255, 255, 255],
        [0, 0, 0],
        [0, 0, 0],
        [255, 255, 255],
        [255, 255, 255],
        [0, 0, 0],
        //column 5
        [0, 0, 0],
        [255, 255, 255],
        [255, 255, 255],
        [0, 0, 0],
        [0, 0, 0],
        [255, 255, 255],
        [255, 255, 255],
        [0, 0, 0],
        //column 6
        [0, 0, 0],
        [255, 255, 255],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [255, 255, 255],
        [0, 0, 0],
        //column 7
        [0, 0, 0],
        [255, 255, 255],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [255, 255, 255],
        [0, 0, 0],
        //column 8
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    sketch.drawTheLetterB = () => {
        let count = 0;
        for (var x = 0; x < sketch.gridColumns; x++) {
            for (var y = 0; y < sketch.gridRows; y++) {
                sketch.gridRect(x, y, 1, 1, sketch.squareColours[count])
                count++;
            }
        }
    }

    sketch.gridRect = (x, y, width = 1, height = 1, fill = [0,0,0]) => {
        let calulatedWidth = width * sketch.gridColumnWidth;
        let calulatedHeight = height * sketch.gridColumnHeight;
        sketch.fill(fill[0], fill[1], fill[2]);
        sketch.rect(x * sketch.gridColumnWidth, y * sketch.gridColumnHeight, calulatedWidth, calulatedHeight);
    }

    sketch.updateCanvasDimensions = () => {
        sketch.canvasWidth = window.innerWidth;
        sketch.canvasHeight = window.innerHeight;
        sketch.resizeCanvas(sketch.canvasWidth, sketch.canvasHeight);
        sketch.redraw();
    }

    sketch.randomColor = () => {

    }
}

const grid = new p5(sketch);

if (window.attachEvent) {
    window.attachEvent(
        'onresize', 
        function () {
            grid.updateCanvasDimensions();
        }
    );
}
else if (window.addEventListener) {
    window.addEventListener(
        'resize', 
        function () {
            grid.updateCanvasDimensions();
        }, 
        true
    );
}
else {
    //The browser does not support Javascript event binding
}
