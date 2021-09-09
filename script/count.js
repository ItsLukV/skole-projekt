var cornerCount = 0
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