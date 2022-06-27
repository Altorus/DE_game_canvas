var data = JSON.parse(data);

var imgCarMain = document.querySelectorAll('.selection-cars img');

var reloadGame = document.querySelector('.w-100.stop');

imgCarMain[0].src = data[0].img;
imgCarMain[1].src = data[1].img;
imgCarMain[2].src = data[2].img;

var objCar = {};
// objCar.name = data[1].name;
// objCar.src = data[1].img;

function selectCar(el) {
    imgCarMain[0].className = "selection-car";
    imgCarMain[1].className = "selection-car";
    imgCarMain[2].className = "selection-car";

    imgCarMain[el].className = "selection-car selected-car";
    objCar.name = data[el].name;
    objCar.src = data[el].img;
    document.querySelector('.w-100.start').disabled = false;
    document.querySelector('#nameCar').innerHTML = objCar.name
}

window.onload = init;

var timer = document.querySelector('#timer')
var sec = 1;
var min = 0;

var gameCanvas = document.querySelector("#gameCanvas");
var ctxcanvas = gameCanvas.getContext("2d");

var imgCar = new Image();

var imgDoroga = new Image();
imgDoroga.src = "assets/images/bg.jpg";

var imgKust = new Image();
imgKust.src = "assets/images/block.png";

var CarMoveTop = false;
var CarMoveBotton = false;

var CarY = 550;

var speedDoroga = 0;

isPause = true;

var live = 4;

var tablo = document.querySelector("#tablo");

var liveCount = true;

function start()
{
    document.querySelector(".screen-login").style.display = "none";
    setInterval(go, 1);
    setInterval(timerPlay, 1000)
}

function go()
{
    if (isPause)
    {
        drawBg();
        drawCar();
        drawKust();
        
    }

}

function init()
{
    gameCanvas.width = window.innerWidth;
    gameCanvas.height = window.innerHeight;

    drawBg();
    drawCar();
    drawKust();

    document.addEventListener("keydown", keyDown, false);
    document.addEventListener("keyup", keyUp, false);

}

function drawBg()
{
    ctxcanvas.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctxcanvas.drawImage(imgDoroga, speedDoroga, 0, window.innerWidth, window.innerHeight);
    ctxcanvas.drawImage(imgDoroga, speedDoroga + window.innerWidth, 0, window.innerWidth, window.innerHeight);

    if (speedDoroga < -window.innerWidth)
    {
        speedDoroga = 0;
    }

    speedDoroga -= 2;

    tablo.innerHTML = live;
}

function drawCar()
{
    imgCar.src = objCar.src;
    ctxcanvas.drawImage(imgCar, 100, CarY, 112, 75);
    // ctxcanvas.strokeRect(100, CarY, 112, 75);

    if (CarMoveTop)
    {
        CarY -= 2;
    }

    if (CarMoveBotton)
    {
        CarY += 2;
    }

    if (CarY < 300)
    {
        CarY = 300;
    }

    if (CarY > 570)
    {
        CarY = 570;
    }
}

function keyDown(e)
{
    var keyId = e.keyCode;
    if (keyId == 87)
    {
        CarMoveTop = true;
    }

    if (keyId == 83)
    {
        CarMoveBotton = true;
    }

    if(keyId == 27){
        if (isPause)
        {
            isPause = false;
        }
        else {
            isPause = true;
        }
    }
}

function keyUp(e)
{
    var keyId = e.keyCode;
    if (keyId == 87)
    {
        CarMoveTop = false;
    }

    if (keyId == 83)
    {
        CarMoveBotton = false;
    }
}

var kustY = (570 - 300) * Math.random() + 300;
var kustY2 = (570 - 300) * Math.random() + 300;
var kustX = window.innerWidth;
var kustX2 = window.innerWidth + 600;

function drawKust()
{
    
    ctxcanvas.drawImage(imgKust, kustX, kustY, 55, 58);
    ctxcanvas.drawImage(imgKust, kustX2, kustY2, 55, 58);
    // ctxcanvas.strokeRect(kustX, kustY, 55, 58);
    // ctxcanvas.strokeRect(kustX2, kustY2, 55, 58);

    kustX -= 2;
    kustX2 -= 2;

    if (kustX < -60)
    {
        kustY = (570 - 300) * Math.random() + 300;
        kustX = window.innerWidth;
    }

    if (kustX2 < -60)
    {
        kustY2 = (570 - 300) * Math.random() + 300;
        kustX2 = window.innerWidth;
    }

    bam(100, CarY, kustX, kustY);
    bam(100, CarY, kustX2, kustY2);

}


function bam(CarX, CarY, KustX, KustY)
{
    if (CarX < KustX){

        if (CarX + 112 > KustX && CarY + 75 > KustY && CarY < KustY + 58)
        {
            if (liveCount) {
                if (live == 1) {
                    isPause = false;
                    tablo.innerHTML = 0;
                    document.querySelector('.screen-results').classList.remove('hidden');
                }
                live--;
                liveCount = false;
            }
        }
    }
    
    if (KustX < 0) {
        liveCount = true;
    }
}

reloadGame.onclick = () => {
    location.reload();
}

function timerPlay() {
    if(isPause){
        if (sec > 59) {
            sec = 0;
            min++;
        }
        if (min < 10) {
            if (sec < 10) {
                timer.innerHTML = "0" + min + ":" + "0" + sec;
            } else {
                timer.innerHTML = "0" + min + ":" + sec;
            }
        } else {
            if (sec < 10) {
                timer.innerHTML = min + ":" + "0" + sec;
            } else {
                timer.innerHTML = min + ":" + sec;
            }
    
        }
        sec++;
    }
}