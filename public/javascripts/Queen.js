class Queen extends ChessPieces{
    constructor(color, xposition, yposition){
        super(color, xposition, yposition);
        if(this.color == "white"){
            this.image = new Image(60, 60);
            this.image.src = "/images/WhiteQueen.png";
            this.image.style.left = this.xposition;
            this.image.style.top = this.yposition;
            this.image.style.position = 'absolute';
        }else{
            this.image = new Image(60, 60);
            this.image.src = "/images/BlackQueen.png";
            this.image.style.left = this.xposition;
            this.image.style.top = this.yposition;
            this.image.style.position = 'absolute';
        }
    }

    moving(){

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