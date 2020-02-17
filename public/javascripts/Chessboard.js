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
    var arrayOfWhitePieces =  []
    var  arrayOfBlackPieces =[]
    var whitePawn1 = new Pawn("white", 145, 545, true);
    document.body.appendChild(whitePawn1.image);
    whitePawn1.initializePiece();
    arrayOfWhitePieces.push(whitePawn1)
    var whitePawn2 = new Pawn("white", 225, 545, true);
    document.body.appendChild(whitePawn2.image);
    whitePawn2.initializePiece();
    arrayOfWhitePieces.push(whitePawn2)
    var whitePawn3 = new Pawn("white", 305, 545, true);
    document.body.appendChild(whitePawn3.image);
    whitePawn3.initializePiece();
    arrayOfWhitePieces.push(whitePawn3)
    var whitePawn4 = new Pawn("white", 385, 545, true);
    document.body.appendChild(whitePawn4.image);
    whitePawn4.initializePiece();
    arrayOfWhitePieces.push(whitePawn4)
    var whitePawn5 = new Pawn("white", 465, 545, true);
    document.body.appendChild(whitePawn5.image);
    whitePawn5.initializePiece();
    arrayOfWhitePieces.push(whitePawn5)
    var whitePawn6 = new Pawn("white", 545, 545, true);
    document.body.appendChild(whitePawn6.image);
    whitePawn6.initializePiece();
    arrayOfWhitePieces.push(whitePawn6)
    var whitePawn7 = new Pawn("white", 625, 545, true);
    document.body.appendChild(whitePawn7.image);
    whitePawn7.initializePiece();
    arrayOfWhitePieces.push(whitePawn7)
    var whitePawn8 = new Pawn("white", 705, 545, true);
    document.body.appendChild(whitePawn8.image);
    whitePawn8.initializePiece();
    arrayOfWhitePieces.push(whitePawn8)

    var whiteKnight1 = new Knight("white", 225, 625, true);
    document.body.appendChild(whiteKnight1.image);
    whiteKnight1.initializePiece();
    arrayOfWhitePieces.push(whiteKnight1)
    var whiteKnight2 = new Knight("white", 625, 625, true);
    document.body.appendChild(whiteKnight2.image);
    whiteKnight2.initializePiece();
    arrayOfWhitePieces.push(whiteKnight2)
    var whiteBishop1 = new Bishop("white", 305, 625, true);
    document.body.appendChild(whiteBishop1.image);
    whiteBishop1.initializePiece();
    arrayOfWhitePieces.push(whiteBishop1)
    var whiteBishop2 = new Bishop("white", 545, 625, true);
    document.body.appendChild(whiteBishop2.image);
    whiteBishop2.initializePiece();
    arrayOfWhitePieces.push(whiteBishop2)
    var whiteRook1 = new Rook("white", 145, 625, true);
    document.body.appendChild(whiteRook1.image);
    whiteRook1.initializePiece();
    arrayOfWhitePieces.push(whiteRook1)
    var whiteRook2 = new Rook("white", 705, 625, true);
    document.body.appendChild(whiteRook2.image);
    whiteRook2.initializePiece();
    arrayOfWhitePieces.push(whiteRook2)
    var whiteKing = new King("white", 465, 625,true);
    document.body.appendChild(whiteKing.image);
    whiteKing.initializePiece();
    arrayOfWhitePieces.push(whiteKing)
    var whiteQueen = new Queen("white", 385, 625, true);
    document.body.appendChild(whiteQueen.image);
    whiteQueen.initializePiece();
    arrayOfWhitePieces.push(whiteQueen)

    var blackPawn1 = new Pawn("black", 145, 145, false);
    document.body.appendChild(blackPawn1.image);
    blackPawn1.initializePiece();
    arrayOfBlackPieces.push(blackPawn1)
    var blackPawn2 = new Pawn("black", 225, 145, false);
    document.body.appendChild(blackPawn2.image);
    blackPawn2.initializePiece();
    arrayOfBlackPieces.push(blackPawn2)
    var blackPawn3 = new Pawn("black", 305, 145, false);
    document.body.appendChild(blackPawn3.image);
    blackPawn3.initializePiece();
    arrayOfBlackPieces.push(blackPawn3)
    var blackPawn4 = new Pawn("black", 385, 145, false);
    document.body.appendChild(blackPawn4.image);
    blackPawn4.initializePiece();
    arrayOfBlackPieces.push(blackPawn4)
    var blackPawn5 = new Pawn("black", 465, 145, false);
    document.body.appendChild(blackPawn5.image);
    blackPawn5.initializePiece();
    arrayOfBlackPieces.push(blackPawn5)
    var blackPawn6 = new Pawn("black", 545, 145, false);
    document.body.appendChild(blackPawn6.image);
    blackPawn6.initializePiece();
    arrayOfBlackPieces.push(blackPawn6)
    var blackPawn7 = new Pawn("black", 625, 145, false);
    document.body.appendChild(blackPawn7.image);
    blackPawn7.initializePiece();
    arrayOfBlackPieces.push(blackPawn7)
    var blackPawn8 = new Pawn("black", 705, 145, false);
    document.body.appendChild(blackPawn8.image);
    blackPawn8.initializePiece();
    arrayOfBlackPieces.push(blackPawn8)
    var blackKnight1 = new Knight("black", 225, 65, false);
    document.body.appendChild(blackKnight1.image);
    blackKnight1.initializePiece();
    arrayOfBlackPieces.push(blackKnight1)
    var blackKnight2 = new Knight("black", 625, 65, false);
    document.body.appendChild(blackKnight2.image);
    blackKnight2.initializePiece();
    arrayOfBlackPieces.push(blackKnight2)
    var blackBishop1 = new Bishop("black", 305, 65, false);
    document.body.appendChild(blackBishop1.image);
    blackBishop1.initializePiece();
    arrayOfBlackPieces.push(blackBishop1)
    var blackBishop2 = new Bishop("black", 545, 65, false);
    document.body.appendChild(blackBishop2.image);
    blackBishop2.initializePiece();
    arrayOfBlackPieces.push(blackBishop2)
    var blackRook1 = new Rook("black", 145, 65, false);
    document.body.appendChild(blackRook1.image);
    blackRook1.initializePiece();
    arrayOfBlackPieces.push(blackRook1)
    var blackRook2 = new Rook("black", 705, 65, false);
    document.body.appendChild(blackRook2.image);
    blackRook2.initializePiece();
    arrayOfBlackPieces.push(blackRook2)
    var blackKing = new King("black", 465, 65, false);
    document.body.appendChild(blackKing.image);
    blackKing.initializePiece();
    arrayOfBlackPieces.push(blackKing)
    var blackQueen = new Queen("black", 385, 65, false);
    document.body.appendChild(blackQueen.image);
    blackQueen.initializePiece();
    arrayOfBlackPieces.push(blackQueen);
    
    startGame(arrayOfWhitePieces, arrayOfBlackPieces);

}