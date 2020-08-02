import * as p5 from "p5/lib/p5.min.js";

let sketch = (sketch) => {
    sketch.canvasWidth = window.innerWidth;
    
    sketch.canvasHeight = window.innerHeight;

    sketch.gridColumns = 59.5;

    sketch.gridRows = 84.2;

    sketch.showGrid = false;

    sketch.shapeSize = 50;    

    sketch.setup = () =>{
        sketch.createCanvas(sketch.canvasWidth, sketch.canvasHeight);
    }

    sketch.draw = () =>{
        //draw grid
        if (sketch.showGrid){
            for (var x = 0; x < sketch.canvasWidth; x += sketch.canvasWidth / sketch.gridColumns) {
                for (var y = 0; y < sketch.canvasHeight; y += sketch.canvasHeight / sketch.gridRows) {
                    sketch.stroke(0, 0, 0, 0.3);
                    sketch.strokeWeight(1);
                    sketch.line(x, 0, x, sketch.canvasHeight);
                    sketch.line(0, y, sketch.canvasWidth, y);
                }
            }
        }

        
        console.log(sketch.mouseIsPressed);
        if (sketch.mouseIsPressed == true) {
            
            sketch.strokeWeight(0);
            sketch.fill(0);
            if (sketch.mouseButton === sketch.LEFT) {
                sketch.strokeWeight(1);
                sketch.line(sketch.mouseX - sketch.shapeSize, sketch.mouseY, sketch.mouseX + sketch.shapeSize, sketch.mouseY);
                sketch.line(sketch.mouseX, sketch.mouseY - sketch.shapeSize, sketch.mouseX, sketch.mouseY + sketch.shapeSize);
            }
            if (sketch.mouseButton === sketch.RIGHT) {
                sketch.fill(128, 128, 128);
                sketch.rect(sketch.mouseX, sketch.mouseY, sketch.shapeSize, sketch.shapeSize);
            }
            if (sketch.mouseButton === sketch.CENTER) {
                sketch.fill(192, 192, 192);
                sketch.ellipse(sketch.mouseX, sketch.mouseY, sketch.shapeSize, sketch.shapeSize);
            }
            console.log(sketch.mouseIsPressed);
            //sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        }
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
