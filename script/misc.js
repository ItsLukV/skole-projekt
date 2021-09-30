//Lavet af
//David, Lukas og Malthe
//Fra 2.M

/*
this funktion currently doesn't work
//it will count the corner hits
cornerCount = 0
function eight(){
    switch(x){
        case x > canvas_x-2:
        case x < 2:
            cornerCount += 1
        break
    }
    switch(y){
        case y > canvas_y-2:
        case y < 2:
            cornerCount += 1
        break
    }
    text(cornerCount, 5, 15)
}
*/


//changes window size while the program is running
function windowSize(){

    // checks if window size has changed along x
    if (canvas_x != windowWidth){
        //changes canvas size variable allong x
        canvas_x = windowWidth;
        if (x > canvas_x){
            
            //makes sure the image is inside the canvas
            x = (canvas_x - 100)
        }
        //sets canvas size
        createCanvas(canvas_x,canvas_y) 
    }

    //chacks if window size has changed along y
    if (canvas_y != windowHeight){
        //changes canvas size variable allong y 
        canvas_y = windowHeight;
        if (y > canvas_y){
            
            // make sure the imahge is inside the canvas
            y = (canvas_y - 100)
        }
        //sets canvas size
        createCanvas(canvas_x,canvas_y)
    }
}