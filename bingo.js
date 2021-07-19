let bingoBoard = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
];
function randomNumber() {
  document.getElementById("random").innerHTML = Math.floor((Math.random() * 25) + 1); //100
  fillSquare();

}

function fillSquare(){
  for(let i = 0; i < 5; i++){
    let row = document.getElementsByTagName("TR")[i];
    for(let f = 0; f < 5; f++){

      if(document.getElementById("random").innerHTML === row.getElementsByTagName("TD")[f].innerHTML){
        row.getElementsByTagName("TD")[f].style.backgroundColor = "blue";
        row.getElementsByTagName("TD")[f].style.color = "white";
        bingoBoard[i][f] = true;
        console.log(bingoBoard)
        checkVertical(bingoBoard)
        checkHorizontal(bingoBoard)
        checkTopLeftDiagonal(bingoBoard)
        checkTopRightDiagonal(bingoBoard)
        isWin()

      }

    }
  }
}

function checkVertical(bingoBoard){
  for(i = 0; i < 5; i++){
    if (bingoBoard[0][i] && bingoBoard[1][i] && bingoBoard[2][i] && bingoBoard[3][i] && bingoBoard[4][i])
     return true;

  }
  return false;
}

function checkHorizontal(bingoBoard){
  for(i = 0; i < 5; i++){
    if (bingoBoard[i][0] && bingoBoard[i][1] && bingoBoard[i][2] && bingoBoard[i][3] && bingoBoard[i][4])
     return true;

  }
  return false;
}

function checkTopLeftDiagonal(bingoBoard){
  if(bingoBoard[0][0] && bingoBoard[1][1] && bingoBoard[3][3] && bingoBoard[4][4])
    return true;
  return false;
}

function checkTopRightDiagonal(bingoBoard){
  if(bingoBoard[0][4] && bingoBoard[1][3] && bingoBoard[3][1] && bingoBoard[4][0])
    return true;
  return false;
}

function isWin(){
  if(checkVertical(bingoBoard) || checkHorizontal(bingoBoard) || checkTopLeftDiagonal(bingoBoard) || checkTopRightDiagonal(bingoBoard)){
    console.log("YOU WON!")
    document.getElementById("bingoCard").innerHTML = "YOU WIN!";
  }


}
