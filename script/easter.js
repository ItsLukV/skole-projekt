var keyS = 0
function easterTime(){
    if(keyIsPressed === true){
        if(keyS==0){
            if(keyCode === 69){
                keyS = 1
                keyCode = 0
            }else if(keyCode==0){}else{
                keyS = 0
            }
       }else if(keyS==1){
           if(keyCode=== 83){
               keyS = 2
               keyCode = 0
           }else if(keyCode==0){}else{
            keyS = 0
        }
       }else if(keyS==2){
           if(keyCode===84){
               keyS=3
               keyCode=0
           }else if(keyCode==0){}else{
            keyS = 0
        }
       } else if(keyS==3){
           if(keyCode===69){
               keyS = 4
               keycode=0
           }else if(keyCode==0){}else{
            keyS = 0
        }
       }else if(keyS==4){
           if(keyCode===82){
               keyS=5
               keyCode=0
           }
       }else if(keyS==5){
           if(keyCode===13)
                keyS=0
                keyCode=0
                img=loadImage("assets/egg.png")
       }else if(keyCode==0){}else{
           keyCode = 0
       }
    }
}