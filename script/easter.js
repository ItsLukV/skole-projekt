var keyS = 0
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
               print("easter time")
           }else if(keyCode==0){}else{
           keyS = 0
           }
        }
    }
}
