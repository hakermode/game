var img = document.getElementById("image");

function startGame() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        myGameArea.avabile_mobile = true;
       
    }
    myGameArea.start();
    myGameArea.clear();
    myGameArea.draw_image("image/background.jpg",0,0,myGameArea.canvas.width,myGameArea.canvas.height);
    if (myGameArea.avabile_mobile) {
        myGameArea.draw_image("image/controler_2.png",myGameArea.x_controler,myGameArea.y_controler,myGameArea.width_image_controler,myGameArea.height_image_controler)
        myGameArea.draw_image("image/controler_1.png",myGameArea.x_controler-myGameArea.width_image_controler,myGameArea.y_controler,myGameArea.width_image_controler,myGameArea.height_image_controler)
    } 
 /*myGameArea.updata()*/
}
var myGameArea = {
    canvas : document.getElementById("mycanvas"),
    avabile_mobile : false,
    width_image_controler : screen.width* 20/100,
    height_image_controler : screen.height* 20/100,
    x_controler : screen.width*20/100,
    y_controler : screen.height*70/100,

    start : function() {
        this.canvas.width = screen.width;
        this.canvas.height = screen.height;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
    clear : ()=>{
        myGameArea.context.clearRect(0,0, myGameArea.canvas.width,myGameArea.canvas.height);
    }, 
    draw_image : (src,x,y,width,height)=>{
        image = new Image()
        image.width = width;
        image.height = height;
        image.src = src
        myGameArea.context.drawImage(image,x,y,image.width,image.height)  
    },
    updata : ()=>{
      requestAnimationFrame(startGame)
  }
}

var currMode = "";
checkOrientation()
window.addEventListener("click",request)
function request() {
if (currMode == "landscape") {
    document.documentElement.requestFullscreen()
    screen.orientation.lock(currMode)

    }    
}

startGame()   

function checkOrientation(){
switch(window.orientation){

        case 0:
        currMode = "portrait";
        break;

        case -90:
        currMode = "landscape";
        
        break;

        case 90:
        currMode = "landscape";
        /*screen.orientation.lock(currMode)*/
        break;

        case 180:
        currMode = "landscape";
        //screen.orientation.lock(currMode)
        break;
   }
}
