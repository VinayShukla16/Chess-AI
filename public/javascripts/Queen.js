class Queen extends ChessPieces{
    constructor(color, xposition, yposition, canMove){
        super(color, xposition, yposition, canMove);
        if(this.color == "white"){
            this.image = new Image(60, 60);
            this.image.src = "/images/WhiteQueen.png";
            this.image.style.left = this.xposition;
            this.image.style.top = this.yposition;
            this.image.style.position = 'absolute';
            this.image.className = "white"
        }else{
            this.image = new Image(60, 60);
            this.image.src = "/images/BlackQueen.png";
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
        }
        var Xmax = super.findMax(x, this.xposition);
        var Ymax = super.findMax(y, this.yposition);
        var xNotMax = 0;
        var yNotMax = 0;
        if(Xmax === x){
            xNotMax = this.xposition;
        }else{
            xNotMax = x;
        }

        if(Ymax === y){
            yNotMax = this.yposition;
        }else{
            yNotMax = y;
        }

        if(((Xmax - xNotMax)/80 == (Ymax - yNotMax)/80)&& Xmax!= xNotMax && Ymax!= yNotMax){
            return  true;
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