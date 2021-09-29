//Lavet af
//David, Lukas og Malthe
//Fra 2.M
var keyS = 0
var johnyTime = false
var easter = false

//controlls when easter egg is activated
function easterTime(){
    if(keyIsPressed === true){
        switch(keyS){ //chooses what to run based on the pressed key
        case 0:
        case 3: //checks if it is time for an E and if E is pressed
            if(keyCode === 69){
                keyS +=1
                keyCode = 0
            }else if(keyCode==0){}else{
                keyS = 0
            }
        break;
        case 1: //checks if it is time for an S and if S is pressed
            if(keyCode=== 83){
                keyS +=1
                keyCode = 0
            }else if(keyCode==0){}else{
            keyS = 0}
        break;
        case 2: //checks if it is time for an T and if T is pressed
            if(keyCode===84){
                keyS+=1
                keyCode=0
            }else if(keyCode==0){}else{
            keyS = 0
        }
        break;
        case 4: //checks if it is time for an R and if R is pressed
            if(keyCode===82){
                keyS=5
                keyCode=0
            }else if(keyCode==0){}else{
            keyS = 0
            }
            break;
        case 5: //checks if it is time for an ENTER and if ENTER is pressed
            if(keyCode===13){
                keyS=0
                keyCode=0 
                
                // activates easter egg
                img=loadImage("assets/egg.png")
                vision = easter
                print("easter time")
            }else if(keyCode==0){}else{
            keyS = 0
            }
        }
    }
}
function johnCina(){
    if (keyCode == 74){
        keyCode = 0
        img = loadImage("assets/john.png")
        vision = "john"
    }
}