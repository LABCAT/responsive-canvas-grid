import * as p5 from "p5/lib/p5.min.js";

let sketch = (sketch) => {

    sketch.showGrid = false;

    sketch.canvasWidth = window.innerWidth;
    
    sketch.canvasHeight = window.innerHeight;

    sketch.gridColumns = 30;

    sketch.gridRows = 30;

    sketch.gridColumnWidth = sketch.canvasWidth  / sketch.gridColumns;

    sketch.gridColumnHeight = sketch.canvasHeight / sketch.gridRows;
    
    sketch.sizes = {
        size1: {
            width: 30,
            height: 30
        },
        size2: {
            width: 21,
            height: 21
        }, 
        size3: {
            width: 12,
            height: 12
        }, 
        size4: {
            width: 6,
            height: 6
        }, 
    }

    sketch.setup = () =>{
        sketch.createCanvas(sketch.canvasWidth, sketch.canvasHeight);
    }

    sketch.draw = () =>{
        //draw grid
        // sketch.rectMode(sketch.CENTER);
        // sketch.angleMode(sketch.DEGREES);
        for (var x = 0; x < sketch.canvasWidth; x += sketch.canvasWidth / sketch.gridColumns) {
            for (var y = 0; y < sketch.canvasHeight; y += sketch.canvasHeight / sketch.gridRows) {
                if(sketch.showGrid){
                    sketch.stroke(0, 0, 0);
                    sketch.strokeWeight(1);
                    sketch.line(x, 0, x, sketch.canvasHeight);
                    sketch.line(0, y, sketch.canvasWidth, y);
                }
                
                sketch.blackRect(
                    13,
                    2,
                    sketch.sizes.size3.width,
                    sketch.sizes.size3.height
                );

                sketch.blackRect(
                    13,
                    16,
                    sketch.sizes.size3.width,
                    sketch.sizes.size3.height
                );

                sketch.blackRect(
                    -20,
                    0,
                    sketch.sizes.size1.width,
                    sketch.sizes.size1.height
                );

                sketch.blackRect(
                    28,
                    12,
                    sketch.sizes.size4.width,
                    sketch.sizes.size4.height
                );
            }
        }
    }

    sketch.blackRect = (x, y, width, height) => {
        let calulatedWidth = width * sketch.gridColumnWidth; 
        let calulatedHeight = height * sketch.gridColumnHeight; 
        sketch.rect(x * sketch.gridColumnWidth, y * sketch.gridColumnHeight, calulatedWidth, calulatedHeight);
        sketch.fill(0,0,0)
    }

    sketch.updateCanvasDimensions = () => {
        sketch.canvasWidth = window.innerWidth;
        sketch.canvasHeight = window.innerHeight;
        sketch.gridColumnWidth = sketch.canvasWidth / sketch.gridColumns; 
        sketch.gridColumnHeight = sketch.canvasHeight / sketch.gridRows; 
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
