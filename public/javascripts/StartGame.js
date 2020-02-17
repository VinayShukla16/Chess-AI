
async function startGame(arrayOfWhitePieces, arrayOfBlackPieces){
    for(var i = 0; i < 16; i++){
        var currentIndex = i;
        var whiteMoving = false;
        var blackMoving = false;
        var whiteMoved = false;
        var blackMoved = false;

        arrayOfWhitePieces[i].image.addEventListener("mousedown", ()=>{
            whiteMoving = true;
        });
        arrayOfWhitePieces[i].image.addEventListener("mousemove", ()=>{
            if(whiteMoving == true){
                whiteMoving = false;
                whiteMoved = true;
            }
        });
        arrayOfWhitePieces[i].image.addEventListener("mouseup", function(){
            console.log(arrayOfWhitePieces[i]);
            if(whiteMoved == true){
                pieceEventFunction(arrayOfWhitePieces, arrayOfBlackPieces, i);
                whiteMoved = false;
            }
        });
        arrayOfBlackPieces[i].image.addEventListener("mousedown", ()=>{
        });
        arrayOfBlackPieces[i].image.addEventListener("mousemove", ()=>{
        });
        //arrayOfBlackPieces[i].image.addEventListener("mouseup", pieceEventFunction(arrayOfWhitePieces, arrayOfBlackPieces, i));

    }
}

function changeMove(arrayWhitePieces, arrayBlackPieces){
    var move = "black";
    for(var i = 0; i < arrayWhitePieces.length; i++){
        if(arrayWhitePieces[i].canMove){
            move = "white"
        }
    }

    if(move == "white"){
        for(var i = 0; i < arrayWhitePieces.length; i++){
            arrayWhitePieces[i].canMove = false;
        }
        for(var i = 0; i < arrayBlackPieces.length; i++){
            arrayBlackPieces[i].canMove = true;
        }
    }else if(move == "black"){
        for(var i = 0; i < arrayWhitePieces.length; i++){
            arrayWhitePieces[i].canMove = true;
        }
        for(var i = 0; i < arrayBlackPieces.length; i++){
            arrayBlackPieces[i].canMove = false;
        }
    }

    return [arrayWhitePieces, arrayBlackPieces];
}

function pieceEventFunction(arrayOfWhitePieces, arrayOfBlackPieces, i){

    if(arrayOfWhitePieces[i].canMove == true){
        var values = changeMove(arrayOfWhitePieces, arrayOfBlackPieces);
        arrayOfWhitePieces = values[0];
        arrayOfBlackPieces = values[1];
    }else if(arrayOfBlackPieces[i].canMove == true){
        var values = changeMove(arrayOfWhitePieces, arrayOfBlackPieces);
        arrayOfWhitePieces = values[0];
        arrayOfBlackPieces = values[1];
    }
    
    
}
