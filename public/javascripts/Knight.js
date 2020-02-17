class Knight extends ChessPieces{
    constructor(color, xposition, yposition, canMove){
        super(color, xposition, yposition, canMove);
        if(this.color == "white"){
            this.image = new Image(60, 60);
            this.image.src = "/images/WhiteKnight.png";
            this.image.style.left = this.xposition;
            this.image.style.top = this.yposition;
            this.image.style.position = 'absolute';
            this.image.className = "white";
        }else{
            this.image = new Image(60, 60);
            this.image.src = "/images/BlackKnight.png";
            this.image.style.left = this.xposition;
            this.image.style.top = this.yposition;
            this.image.style.position = 'absolute';
            this.image.className = "black";
        }
    }

    moving(x, y){
        if(!super.moving(x,y)){
            return false
        }
        if((this.xposition - x)/80 == 1 || (this.xposition - x)/80 == -1){
            return this.checkMovementOther(this.yposition, y);
        }else if((this.yposition - y)/80 == 1 || (this.yposition - y)/80 == -1){
            return this.checkMovementOther(this.xposition, x);
        }else{
            return false;
        }
    }

    checkMovementOther(originalPosition, newPosition){
        if((originalPosition- newPosition)/80 == 2 || (originalPosition- newPosition)/80 == -2){
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