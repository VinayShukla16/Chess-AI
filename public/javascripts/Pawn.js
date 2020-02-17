class Pawn extends ChessPieces{
    constructor(color, xposition, yposition, canMove){
        super(color, xposition, yposition, canMove)
        if(this.color === "white"){
            this.image = new Image(60, 60);
            this.image.src = "/images/WhitePawn.png";
            this.image.style.left = this.xposition;
            this.image.style.top = this.yposition;
            this.image.style.position = 'absolute';
            this.image.className = "white"
        }else{
            this.image = new Image(60, 60);
            this.image.src = "/images/BlackPawn.png";
            this.image.style.left = this.xposition;
            this.image.style.top = this.yposition;
            this.image.style.position = 'absolute';
            this.image.className = "black"
        }
        this.firstMove = true;
    }

    moving(x, y){
        if(!super.moving(x,y)){
            return false
        }
        if(this.color == "white"){
            if(this.capture(x, y)){
                return true
            }
            if(this.firstMove == true){
                if(((this.yposition == (y - 80)) || (this.yposition == (y - 160))) && (this.xposition == x)){
                    this.firstMove = false;
                    return true;
                }else{
                    return false;
                }
            }else{
                if((this.yposition == (y - 80) && this.xposition == x)){
                    return true;
                }else{
                    return false;
                }
            }
        }else{
            if(this.capture(x, y)){
                return true
            }
            if(this.firstMove == true){
                if(((this.yposition == (y + 80)) || (this.yposition == (y + 160))) && (this.xposition == x)){
                    this.firstMove = false;
                    return true;
                }else{
                    return false;
                }
            }else{
                if(this.yposition == (y + 80) && this.xposition == x){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }

    capture(x, y){
        var capturedPiece = document.elementFromPoint(this.xposition, this.yposition)
        if(this.color == "white"){
            if(capturedPiece.src != null && (this.yposition - y)/80 == -1 && ((this.xposition - x)/80 == 1 || (this.xposition - x)/80 == -1)){
                super.capture()
                return true;
            }
        }else{
            if(capturedPiece.src != null && (this.yposition - y)/80 == 1 && ((this.xposition - x)/80 == 1 || (this.xposition - x)/80 == -1)){
                super.capture()
                return true;
            }
        }
    }

    initializePiece(){
        super.initializePiece();

    }

    adjustSquare(){
        super.adjustSquare();
    }

}