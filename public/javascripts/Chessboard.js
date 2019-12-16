$(function drawBoard(){
    var canvas = document.getElementById("MainCanvas");
    var context = canvas.getContext('2d');
    for(var i = 1; i < 9; i++){
        for(var j = 0; j < 8; j++){
            if(j%2 == 0){
                if(i%2 == 0){
                    context.fillStyle = "#5F9EA0";
                    context.fillRect(i*80, j*80, 80, 80)
                }else{
                    context.strokeRect(i*80, j*80, 80, 80)
                }
            }else{
                if(i%2 == 1){
                    context.fillStyle = "#5F9EA0";
                    context.fillRect(i*80, j*80, 80, 80)
                }else{
                    context.strokeRect(i*80, j*80, 80, 80)
                }
            }
        }
    }
    createBorder();
    createPieces();
})

function createBorder(){
    var canvas = document.getElementById("MainCanvas");
    var context = canvas.getContext('2d');
    for(var i = 0; i < 8; i++){
        context.strokeRect(40, i*80, 40, 80);
        context.strokeRect((i+1)*80, 640, 80, 35)
        context.strokeText(8 - i, 56, i*80 + 45);
        context.strokeText(determineLetter(i), (i+1)*80 + 35, 660)
    }
}

function determineLetter(letter){
    switch(letter){
        case 0: 
            return "a";
        case 1: 
            return "b";
        case 2: 
            return "c";
        case 3: 
            return "d";
        case 4: 
            return "e";
        case 5: 
            return "f";
        case 6: 
            return "g";
        case 7: 
            return "h";
    }
}

function createPieces(){

    var whitePawn1 = new Pawn("white", 145, 545);
    document.body.appendChild(whitePawn1.image);
    var whitePawn2 = new Pawn("white", 225, 545);
    document.body.appendChild(whitePawn2.image);
    var whitePawn3 = new Pawn("white", 305, 545);
    document.body.appendChild(whitePawn3.image);
    var whitePawn4 = new Pawn("white", 385, 545);
    document.body.appendChild(whitePawn4.image);
    var whitePawn5 = new Pawn("white", 465, 545);
    document.body.appendChild(whitePawn5.image);
    var whitePawn6 = new Pawn("white", 545, 545);
    document.body.appendChild(whitePawn6.image);
    var whitePawn7 = new Pawn("white", 625, 545);
    document.body.appendChild(whitePawn7.image);
    var whitePawn8 = new Pawn("white", 705, 545);
    document.body.appendChild(whitePawn8.image);


    var whiteKnight1 = new Knight("white", 225, 625);
    document.body.appendChild(whiteKnight1.image);
    var whiteKnight2 = new Knight("white", 625, 625);
    document.body.appendChild(whiteKnight2.image);
    var whiteBishop1 = new Bishop("white", 305, 625);
    document.body.appendChild(whiteBishop1.image);
    var whiteBishop2 = new Bishop("white", 545, 625);
    document.body.appendChild(whiteBishop2.image);
    var whiteRook1 = new Rook("white", 145, 625);
    document.body.appendChild(whiteRook1.image);
    var whiteRook2 = new Rook("white", 705, 625);
    document.body.appendChild(whiteRook2.image);
    var whiteKing = new King("white", 465, 625);
    document.body.appendChild(whiteKing.image);
    var whiteQueen = new Queen("white", 385, 625);
    document.body.appendChild(whiteQueen.image);

    var blackPawn1 = new Pawn("black", 145, 145);
    document.body.appendChild(blackPawn1.image);
    var blackPawn2 = new Pawn("black", 225, 145);
    document.body.appendChild(blackPawn2.image);
    var blackPawn3 = new Pawn("black", 305, 145);
    document.body.appendChild(blackPawn3.image);
    var blackPawn4 = new Pawn("black", 385, 145);
    document.body.appendChild(blackPawn4.image);
    var blackPawn5 = new Pawn("black", 465, 145);
    document.body.appendChild(blackPawn5.image);
    var blackPawn6 = new Pawn("black", 545, 145);
    document.body.appendChild(blackPawn6.image);
    var blackPawn7 = new Pawn("black", 625, 145);
    document.body.appendChild(blackPawn7.image);
    var blackPawn8 = new Pawn("black", 705, 145);
    document.body.appendChild(blackPawn8.image);
    var blackKnight1 = new Knight("black", 225, 65);
    document.body.appendChild(blackKnight1.image);
    var blackKnight2 = new Knight("black", 625, 65);
    document.body.appendChild(blackKnight2.image);
    var blackBishop1 = new Bishop("black", 305, 65);
    document.body.appendChild(blackBishop1.image);
    var blackBishop2 = new Bishop("black", 545, 65);
    document.body.appendChild(blackBishop2.image);
    var blackRook1 = new Rook("black", 145, 65);
    document.body.appendChild(blackRook1.image);
    var blackRook2 = new Rook("black", 705, 65);
    document.body.appendChild(blackRook2.image);
    var blackKing = new King("black", 465, 65);
    document.body.appendChild(blackKing.image);
    var blackQueen = new Queen("black", 385, 65);
    document.body.appendChild(blackQueen.image);
}