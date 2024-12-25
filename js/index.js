
document.addEventListener("DOMContentLoaded", function () {



    //>  ████████████████████████████████████  BRIGHT BACKGROUND

    function getBrightRandomRGB() {
        const rrr = r(86, 255);
        const ggg = r(86, 255);
        const bbb = r(86, 255);
        const rgbColor = `rgb(${rrr}, ${ggg}, ${bbb})`;
        return rgbColor;
    }
    document.body.style.backgroundColor = getBrightRandomRGB();

    //>  ████████████████████████████████████  INITIAL VARIABLES

    const myCanvas = document.getElementById('myCanvas');
    const ctx = myCanvas.getContext("2d");



    resizeCanvas(); // Initial setup

    const offset = {
        x: myCanvas.width / 2,
        y: myCanvas.height / 2,
    }
    ctx.translate(offset.x, offset.y);

    const A = { x: 0, y: 0 }
    const B = { x: 90, y: 120 }
    const C = { x: B.x, y: 0 }

    //^ ████████████████████████████████████  EVENTS    

    update();

    document.onmousemove = (event) => {
        B.x = event.x - offset.x;
        B.y = event.y - offset.y;
        C.x = B.x;
        update();
    }

    //_ ████████████████████████████████████  DRAW FUNCTIONS 

    function resizeCanvas() {
        const canvasWidth = myCanvas.offsetWidth; // Get pixel width
        myCanvas.width = canvasWidth;
        myCanvas.height = canvasWidth * 1; // Maintain aspect ratio (50/80) 
    }

    function drawPoint(location, size = 60, color = "red") {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(location.x, location.y, size / 2, 0, Math.PI * 2);
        ctx.fill();

    }


    function drawLine(p1, p2, color = 'black', width = 8) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
    }


    function drawCoordinateSystem(ctx, offset) {
        ctx.beginPath();
        ctx.moveTo(-offset.x, 0);
        ctx.lineTo(ctx.canvas.width - offset.x, 0);
        ctx.moveTo(0, -offset.y);
        ctx.lineTo(0, ctx.canvas.height - offset.y);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    function drawText(text, location, color = "white") {
        ctx.font = "bold 60px ralewayLight";
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, location.x, location.y);
    }

    function average(p1, p2) {
        return {
            x: (p1.x + p2.x) / 2,
            y: (p1.y + p2.y) / 2
        };
    }
    
    function distance(p1, p2) {
        return Math.hypot(p1.x-p2.x,p1.y-p2.y);
    }
    


    //>  ████████████████████████████████████  MAIN

    function update() {

        const c = distance(A, B);
        const a = distance(B, C);
        const b = distance(A, C);


        ctx.clearRect(-offset.x, -offset.y, myCanvas.width, myCanvas.height);

        drawCoordinateSystem(ctx, offset);

        drawLine(A, B, "red", 8);
        drawText('c',average(A, B), "white");
        drawLine(A, C, "orange", 8);
        drawText('b',average(A, C), "white");
        drawLine(B, C, "yellow", 8);
        drawText('a',average(B, C), "white");


    }
})

//_  ████████████████████████████████████  GENERAL PROGRAM




// console.log(document.documentElement);

//< ████████████████████████████████████  MISC



