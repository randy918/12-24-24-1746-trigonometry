
document.addEventListener("DOMContentLoaded", function () {
    // Your code here

    document.body.style.backgroundColor = 'green';

    //>  ████████████████████████████████████  CHILDREN






    //>  ███████████████ OPEN WEATHER API d1a7fcdb2d6f38c6b216b37322444de9

    //>  ████████████████████████████████████  BRIGHT BACKGROUND

    function getBrightRandomRGB() {
        const rrr = r(86, 255);
        const ggg = r(86, 255);
        const bbb = r(86, 255);
        const rgbColor = `rgb(${rrr}, ${ggg}, ${bbb})`;
        return rgbColor;
    }

    document.body.style.backgroundColor = getBrightRandomRGB();

    //_ ████████████████████████████████████  DATA STRUCTURES 

    //_ ████████████████████████████████████  DATA STRUCTURES 


    //>  ████████████████████████████████████  INITIAL VARIABLES

    const myCanvas = document.getElementById('myCanvas');
    const ctx = myCanvas.getContext("2d");

    const tallFont = new FontFace('bold', 'url("../fonts/FiraSans-Black.ttf")');
    tallFont.load().then(function (loadedFont) {
        document.fonts.add(loadedFont);
    });
    function resizeCanvas() {
        const canvasWidth = myCanvas.offsetWidth; // Get pixel width
        myCanvas.width = canvasWidth;
        myCanvas.height = canvasWidth * 1; // Maintain aspect ratio (50/80) 
    }

    resizeCanvas(); // Initial setup

    const offset = {
        x: myCanvas.width / 2,
        y: myCanvas.height / 2,
    }
    ctx.translate(offset.x, offset.y);

    const A = { x: 0, y: 0 }
    const B = { x: 90, y: 120 }
    const C = { x: B.x, y: 0 }

    //_ ████████████████████████████████████  DRAW FUNCTIONS 

    function drawPoint(location, size = 60, color = "red") {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(location.x, location.y, size / 2, 0, Math.PI * 2);
        ctx.fill();
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
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "bold 50px tall";
        ctx.fillText(text, location.x, location.y);
    }

    //>  ████████████████████████████████████  GENERAL PROGRAM

    drawCoordinateSystem(ctx, offset);

    drawPoint(A);
    drawText("A", A);
    drawPoint(B);
    drawText("B", B);
    drawPoint(C);
    drawText("C", C);
})





// console.log(document.documentElement);

//< ████████████████████████████████████  MISC



