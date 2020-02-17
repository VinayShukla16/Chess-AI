class Rook extends ChessPieces{
    constructor(color, xposition, yposition, canMove){
        super(color, xposition, yposition, canMove);
        if(this.color == "white"){
            this.image = new Image(60, 60);
            this.image.src = "/images/WhiteRook.png";
            this.image.style.left = this.xposition;
            this.image.style.top = this.yposition;
            this.image.style.position = 'absolute';
            this.image.className = "white"
        }else{
            this.image = new Image(60, 60);
            this.image.src = "/images/BlackRook.png";
            this.image.style.left = this.xposition;
            this.image.style.top = this.yposition;
            this.image.style.position = 'absolute';
            this.image.className = "black"
        }
    }

    moving(x, y){
        if(!super.moving(x,y)){
            return false
        }
        if(this.xposition == x || this.yposition == y){
            return true;
        }else{
            return false;
        }
    }

    capture(){
        super.capture()
    }

    initializePiece(){
        super.initializePiece();
    }

    adjustSquare(){
        super.adjustSquare();
    }

}