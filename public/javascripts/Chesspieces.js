class ChessPieces {
    constructor(color, xposition, yposition){
        this.color = color;
        this.xposition = xposition;
        this.yposition = yposition;
        
    }

    moving(x, y){

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
                        var currentXPosition = this.xposition;
                        var currentYPosition = this.yposition;

                        this.xposition = e.clientX -20;
                        this.yposition = e.clientY -20;
                        this.adjustSquare();
                        if(this.moving(currentXPosition, currentYPosition) == false){;
                            this.xposition = currentXPosition;
                            this.yposition = currentYPosition;
                        }
                            

                        this.image.style.left = this.xposition;
                        this.image.style.top = this.yposition;
                        
                    }
                });

                this.image.ondragstart = function() {
                    return false;
                };
            }
        });
    }

    adjustSquare(){
        var adjustedXposition = (this.xposition - 145) % 80;
        var adjustedYposition = (this.yposition - 65) % 80;
        if(adjustedXposition < 80){
            this.xposition = (parseInt((this.xposition-145)/80, 10)*80 + 145)
        }else{
            this.xposition = ((parseInt((this.xposition-145)/80, 10) + 1)*80 + 145)
        }

        if(adjustedYposition < 80){
            this.yposition = (parseInt((this.yposition-65)/80, 10)*80 + 65)
        }else{
            this.yposition = ((parseInt((this.yposition-65)/80, 10) + 1)*80 + 65)
        }
    }
}