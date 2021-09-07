function easterTime(){
    if(keyIsPressed === true){
        if(key==0){
            if(keyCode === 69){
                key = 1
                keyCode = 0
            }else if(keyCode==0){}else{
                key = 0
            }
       }else if(key==1){
           if(keyCode=== 83){
               key = 2
               keyCode = 0
           }else if(keyCode==0){}else{
            key = 0
        }
       }else if(key==2){
           if(keyCode===84){
               key=3
               keyCode=0
           }else if(keyCode==0){}else{
            key = 0
        }
       } else if(key==3){
           if(keyCode===69){
               key = 4
               keycode=0
           }else if(keyCode==0){}else{
            key = 0
        }
       }else if(key==4){
           if(keyCode===82){
               key=5
               keyCode=0
           }
       }else if(key==5){
           if(keyCode===13)
        key=0
        keyCode=0
        img=loadImage("egg.png")
       }else if(keyCode==0){}else{
           keyCode = 0
       }
    }
}