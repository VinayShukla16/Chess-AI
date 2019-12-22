class Pawn extends ChessPieces{
    constructor(color, xposition, yposition){
        super(color, xposition, yposition)
        if(this.color === "white"){
            this.image = new Image(60, 60);
            this.image.src = "/images/WhitePawn.png";
            this.image.style.left = this.xposition;
            this.image.style.top = this.yposition;
            this.image.style.position = 'absolute';
        }else{
            this.image = new Image(60, 60);
            this.image.src = "/images/BlackPawn.png";
            this.image.style.left = this.xposition;
            this.image.style.top = this.yposition;
            this.image.style.position = 'absolute';
        }
        this.firstMove = true;
    }

    moving(x, y){
        if(this.firstMove == true){
            if((this.yposition === (y - 80)) || (this.yposition === (y - 160)) && (this.xposition === x)){
                this.firstMove = false;
                return true;
            }else{
                return false;
            }
        }else{
            if(this.yposition == (y - 80) && this.xposition == x){
                return true;
            }else{
                return false;
            }
        }
    }

    capture(){
    }

    initializePiece(){
        super.initializePiece();
    }

    adjustSquare(){
        super.adjustSquare();
    }

}