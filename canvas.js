
function rectangle() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,500,500);

      //fillRect(x, y, width, height)
      //x -> distance from left, since origin is in top-left
      //y-> distance from top
      //Clears the specified rectangular area, making it fully transparent.
      
      ctx.fillRect(25, 25, 200, 100);
      
      ctx.clearRect(45, 45, 60, 60);
      //draws rectangle outline

      ctx.strokeStyle = 'red';
      ctx.strokeRect(50, 50, 50, 50);
      
    }
}

function triangle() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,500,500);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.lineTo(0,0);

      ctx.stroke(); 
     //ctx.fill();
    }
}

function circle() {
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext){
    var circleCtx = canvas.getContext('2d');
    circleCtx.clearRect(0,0,500,500);
    circleCtx.beginPath();
    //arc(x, y, radius, startAngle, endAngle, anticlockwise)
    //x and y are the coordinates of the center of the circle 
    //startAngle and endAngle parameters define the start and end points of the arc in radians
    //radians = (Math.PI/180)*degrees
    //radius is in pixels angle is in radians
    circleCtx.arc(75,75,50,0,Math.PI*2,true); // Draw a circle
    circleCtx.moveTo(110,75);
    circleCtx.arc(75,75,35,0,Math.PI,false);   // Draw 2nd circle
    circleCtx.moveTo(65,65);
    circleCtx.arc(60,65,5,0,Math.PI*2,true);  // Draw 3rd circle
    circleCtx.moveTo(95,65);
    circleCtx.arc(90,65,5,0,Math.PI*2,true);  // Draw 4th circle
    circleCtx.stroke();
  }
}

function image() {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,500,500);
  const image = new Image(); // Using optional size for image  260, 245
  // Load an image of intrinsic size 1000*1900 in CSS pixels
  image.src = 'image.jpg';
    image.onload = function(){
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      
      // Will draw the image acc to the size of image
      //drawImage(image, x, y);  
     // ctx.drawImage(this, 0, 0);  

      // To use the custom size we'll have to specify the scale parameters 
     // using the element's width and height properties 
     //drawImage(image, dx, dy, dWidth, dHeight);
     // ctx.drawImage(this, 0, 0, 300, 300);

    
       //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
       ctx.drawImage(this, 100, 250, 1600, 800,0, 0, 300, 500);
    }
}

function heart() {
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,500,500);
  //To mix 2 colors
  var lineargradient = ctx.createLinearGradient(0,0,150,150);
  lineargradient.addColorStop(1,'blue');
	lineargradient.addColorStop(0,'red');
	
	ctx.beginPath();
  ctx.moveTo(75,40);
  //2 control points and a end point
	ctx.bezierCurveTo(75,37,70,25,50,25);
	ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
	ctx.bezierCurveTo(20,80,40,102,75,120);
	ctx.bezierCurveTo(110,102,130,80,130,62.5);
	ctx.bezierCurveTo(130,62.5,130,25,100,25);
	ctx.bezierCurveTo(85,25,75,37,75,40);
	ctx.fillStyle = lineargradient;
	ctx.fillStroke = "red";
	ctx.fill();
	ctx.stroke();
  }
}

function game(){
  var canvas = document.getElementById('myCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.moveTo(200,1);
    ctx.lineTo(200,100);
    ctx.strokeStyle = 'green';
    ctx.stroke();
    ctx.rect(1, 1, 30, 20);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    canvas.addEventListener('mousedown', function (e) {
      // React to the mouse down event
  });
   


    
  }
}