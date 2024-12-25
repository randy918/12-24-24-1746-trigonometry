
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

    // const offset = {

    //     x: myCanvas.width / 2,
    //     y: myCanvas.height / 2,

    // }

    // ctx.translate(offset.x, offset.y);

    const tallFont = new FontFace('bold', 'url("../fonts/FiraSans-Black.ttf")');

    tallFont.load().then(function (loadedFont) {
        // Add the font to the document
        document.fonts.add(loadedFont);

        function resizeCanvas() {
            const canvasWidth = myCanvas.offsetWidth; // Get pixel width
            myCanvas.width = canvasWidth;
            myCanvas.height = canvasWidth * 1; // Maintain aspect ratio (50/80) 

            // Redraw canvas content here
        }

        // window.addEventListener('resize', resizeCanvas);
        resizeCanvas(); // Initial setup


const offset =  {
x:myCanvas.width/2,
y:myCanvas.height/2,
}

ctx.translate(offset.x,offset.y);





        const A = { x: 0, y: 0 }
        const B = { x: 90, y: 120 }
        const C = { x: B.x, y: 0 }

        function drawPoint(location, size = 40, color = "red") {

            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(location.x, location.y, size / 2, 0, Math.PI * 2);
            ctx.fill();

        }

        drawPoint(A);
        drawText("A", A);
        drawPoint(B);
        drawText("B", B);
        drawPoint(C);
        drawText("C", C);

        function drawText(text, location, color = "white") {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "bold 30px bold";
            ctx.fillText(text, location.x, location.y);


        }

        //>  ████████████████████████████████████  GENERAL PROGRAM


    })





    // console.log(document.documentElement);

    //< ████████████████████████████████████  MISC


})
