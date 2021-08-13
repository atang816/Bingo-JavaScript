let bingoBoard = [
    ["B", "I", "N", "G", "O"],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
];

let numbersSeen = new Set()
let countForSquareFilled = new Set()

function randomNumber() {

  document.getElementById("newBoardBtn").disabled = true;

  if(numbersSeen.size === 25){
    document.getElementById("randomBtn").disabled = true;
    console.log("Board is filled")
    return;
  }
  let numberGenerated = Math.floor((Math.random() * 25) + 1); //100
  console.log("The number generated is " + numberGenerated)

  while(numbersSeen.has(numberGenerated)){
    numberGenerated = Math.floor((Math.random() * 25) + 1)
    console.log("The number generated AGAIN is " + numberGenerated)

  }

    numbersSeen.add(numberGenerated);
    document.getElementById("random").innerHTML = numberGenerated;
    console.log("Size is: " + numbersSeen.size)
    fillSquare();
}

function fillSquare(){
  for(let i = 1; i < 6; i++){
    let row = document.getElementsByTagName("TR")[i];
    for(let f = 0; f < 5; f++){

      if(document.getElementById("random").innerHTML === row.getElementsByTagName("TD")[f].innerHTML){
        row.getElementsByTagName("TD")[f].style.backgroundColor = "blue";
        row.getElementsByTagName("TD")[f].style.color = "white";
        bingoBoard[i][f] = true;
        isWin();
      }

    }
  }
}

function checkVertical(bingoBoard){
  for(i = 0; i < 5; i++){
    if (bingoBoard[1][i] && bingoBoard[2][i] && bingoBoard[3][i] && bingoBoard[4][i] && bingoBoard[5][i])
     return true;

  }
  return false;
}

function checkHorizontal(bingoBoard){
  for(i = 1; i < 6; i++){
    if (bingoBoard[i][0] && bingoBoard[i][1] && bingoBoard[i][2] && bingoBoard[i][3] && bingoBoard[i][4])
     return true;

  }
  return false;
}

function checkTopLeftDiagonal(bingoBoard){
  if(bingoBoard[1][0] && bingoBoard[2][1] && bingoBoard[4][3] && bingoBoard[5][4])
    return true;
  return false;
}

function checkTopRightDiagonal(bingoBoard){
  if(bingoBoard[1][4] && bingoBoard[2][3] && bingoBoard[4][1] && bingoBoard[5][0])
    return true;
  return false;
}

function isWin(){
  if(checkVertical(bingoBoard) || checkHorizontal(bingoBoard) || checkTopLeftDiagonal(bingoBoard) || checkTopRightDiagonal(bingoBoard)){
    console.log("YOU WON!")
    document.getElementById("bingoTitle").innerHTML = "YOU WIN!";

  }


}

function generateNewBoard(){

  let redColor = Math.floor(Math.random() * 255);
  let greenColor = Math.floor(Math.random() * 160);

  document.body.style.backgroundColor = "#"+redColor.toString(16)+greenColor.toString(16);
  let numbersCreated = new Set();

  for(let i = 1; i < 6; i++){
    let row = document.getElementsByTagName("TR")[i];
    for(let f = 0; f < 5; f++){
      if(row.getElementsByTagName("TD")[f].innerHTML === "FREE"){
        continue;
      }
      let numberGenerated = Math.floor((Math.random() * 25) + 1); //100
      while(numbersCreated.has(numberGenerated)){
        numberGenerated = Math.floor((Math.random() * 25) + 1)
      }

      numbersCreated.add(numberGenerated);
      row.getElementsByTagName("TD")[f].innerHTML = numberGenerated;

    }
  }


}
