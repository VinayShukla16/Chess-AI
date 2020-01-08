class Rook extends ChessPieces{
    constructor(color, xposition, yposition){
        super(color, xposition, yposition);
        if(this.color == "white"){
            this.image = new Image(60, 60);
            this.image.src = "/images/WhiteRook.png";
            this.image.style.left = this.xposition;
            this.image.style.top = this.yposition;
            this.image.style.position = 'absolute';
        }else{
            this.image = new Image(60, 60);
            this.image.src = "/images/BlackRook.png";
            this.image.style.left = this.xposition;
            this.image.style.top = this.yposition;
            this.image.style.position = 'absolute';
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