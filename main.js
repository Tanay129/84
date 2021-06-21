var canvas=document.getElementById("myCanvas");
var carx=10;
var cary=10;
carwidth=100;
carheight=90;

var car2x=10;
var car2y=10;
car2width=100;
car2height=90;
ctx=canvas.getContext("2d");

function add(){
    backgroundImgTag=new Image;
    backgroundImgTag.onload=uploadBackground;
    backgroundImgTag.src="download.jpg";

    carImgTag=new Image;
    carImgTag.onload=uploadCar;
    carImgTag.src="0x0_57-572656_top-view-png (1).png";

    car2ImgTag=new Image;
    car2ImgTag.onload=uploadCar2;
    car2ImgTag.src="0x0_57-572656_top-view-png.png";
}

function uploadBackground(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);
}

function uploadCar(){
    ctx.drawImage(carImgTag,carx,cary,carwidth,carheight);
}

function uploadCar2(){
    ctx.drawImage(car2ImgTag,car2x,car2y,car2width,car2height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){

keyPressed=e.keyCode;

if(keyPressed=='38'){
 up();
}

if(keyPressed=='40'){
    down();
}

if(keyPressed=='37'){
    left();
}

if(keyPressed=='39'){
    right();
}
}

