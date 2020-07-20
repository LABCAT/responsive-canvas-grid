import * as p5 from "p5/lib/p5.min.js";

let sketch = (sketch) => {
    sketch.canvasWidth = window.innerWidth;
    
    sketch.canvasHeight = window.innerHeight;

    sketch.gridColumns = 10;

    sketch.gridRows = 10;

    sketch.setup = () =>{
        sketch.createCanvas(sketch.canvasWidth, sketch.canvasHeight);
    }

    sketch.draw = () =>{
        //draw grid
        for (var x = 0; x < sketch.canvasWidth; x += sketch.canvasWidth / sketch.gridColumns) {
            for (var y = 0; y < sketch.canvasHeight; y += sketch.canvasHeight / sketch.gridRows) {
                sketch.stroke(0);
                sketch.strokeWeight(1);
                sketch.line(x, 0, x, sketch.canvasHeight);
                sketch.line(0, y, sketch.canvasWidth, y);
            }
        }
    }

    sketch.updateCanvasDimensions = () => {
        console.log('sdfsdfsdf');
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