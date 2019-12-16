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
    }

    moving(){

    }

    capture(){
        
    }
}