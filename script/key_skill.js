//Lavet af
//David, Lukas og Malthe
//Fra 2.M
var keyS = 0
var johnyTime = false
function easterTime(){
    if(keyIsPressed === true){
        switch(keyS){
        case 0:
        case 3:
            if(keyCode === 69){
                keyS +=1
                keyCode = 0
            }else if(keyCode==0){}else{
                keyS = 0
            }
        break;
        case 1:
            if(keyCode=== 83){
               keyS +=1
               keyCode = 0
           }else if(keyCode==0){}else{
            keyS = 0}
        break;
       case 2:
           if(keyCode===84){
               keyS+=1
               keyCode=0
           }else if(keyCode==0){}else{
            keyS = 0
        }
        break;
       case 4:
           if(keyCode===82){
               keyS=5
               keyCode=0
           }else if(keyCode==0){}else{
            keyS = 0
           }
           break;
        case 5:
           if(keyCode===13){
               keyS=0
               keyCode=0
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