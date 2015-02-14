window.onload = function() {
	
	//set up canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	width = canvas.width;
	height = canvas.height;

	//set up car's variables
    x=300
    y=300
    speed=0
    angle=0
    acc=0.001
    

	
	//set up the key variables

    up=false
    down=false
    left=false
    right=false

	car = new Image();
    car.src="bv3g.jpg";
    car.width = 150
    
    car.height = 100
    
    

    //set up key listeners
    window.addEventListener("keydown", keypress_handler, false);
    window.addEventListener("keyup", keyup_handler, false);

    //iterate
	var turn = setInterval(function()
	{
		//call your functions here
        check();
        drive();
        draw();
	}, 1);

};


//check for collisions
function check(){
if(x < car.width /2 || x > width - car.width/2 || y < car.height/2 || y > height - car.height/2)
{angle += 180}
}


//change the car's speed and direction, if necessary
function drive(){
    if(up){
        speed+=acc
        
    }


    if(down){speed-=acc}

    if(right){angle+=1}
    
    if(left){angle-=1}
    
    
}

//draw the new canvas
function draw()
{
    document.getElementById("speed").innerHTML = speed
    
	context = canvas.getContext("2d");
	//context.clearRect(0, 0, width, height);

	//calculate x- and y-components of velocity
	x += (speed) * Math.cos(Math.PI/180 * angle);
	y += (speed) * Math.sin(Math.PI/180 * angle);

	context.save();

	//move ("translate") the car
	context.translate(x, y);

	//rotate the car
	context.rotate(Math.PI/180 * angle);

	//set the car at it's center (not the upper-left corner)
	context.drawImage(car, -(car.width/2), -(car.height/2), car.width, car.height);
	context.restore();
}


//which keys aren't being pressed any more?
function keyup_handler(event)
{
	//up
	if(event.keyCode == 38) {
        up=false
	}
	//down
	if(event.keyCode == 40) {
down=false
	}
	//left
	if(event.keyCode == 37) {
left=false
	}
	//right
	if(event.keyCode == 39) {
right=false
	}
}


//which keys are now being pressed?
function keypress_handler(event)
{
    //up
    if(event.keyCode == 38) {up=true
        
    }
    //down
    if(event.keyCode == 40) {down=true
        
    }
    //left
    if(event.keyCode == 37) {left=true
        
    }
    //right
    if(event.keyCode == 39) {right=true
        
    }
}

// make page not scroll with arrow keys
window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
     e.preventDefault();
      }
}, false);
