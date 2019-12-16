class ChessPieces {
    constructor(color, xposition, yposition){
        this.color = color;
        this.xposition = xposition;
        this.yposition = yposition;
        
    }

    moving(){

    }
    
    capture(){

    }

    initializePiece(){
        var moving = false;
        this.image.addEventListener("mousedown", e =>{
            if(moving == false){
                moving = true;
                this.image.addEventListener("mousemove", e =>{
                    if(moving == true){
                        var newX = e.clientX - 20;
                        var newY = e.clientY - 20;
                    
                        this.image.style.left = newX;
                        this.image.style.top = newY;
                    }
                });
                this.image.addEventListener("mouseup", e => {
                    if(moving == true){
                        moving = false;
                    }
                });

                this.image.ondragstart = function() {
                    return false;
                };
            }
        });
    }


}