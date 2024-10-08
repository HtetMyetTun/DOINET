var turn = document.getElementById("turn"),
  boxes = document.querySelectorAll("#main div"), X_or_O = 0;

function selectWinnerBoxes(b1, b2, b3) {
  b1.classList.add("win");
  b2.classList.add("win");
  b3.classList.add("win");
  turn.innerHTML = "勝者は" + b1.innerHTML;
  turn.style.fontSize = "40px";
}

function getWinner() {

  var box1 = document.getElementById("box1"),
    box2 = document.getElementById("box2"),
    box3 = document.getElementById("box3"),
    box4 = document.getElementById("box4"),
    box5 = document.getElementById("box5"),
    box6 = document.getElementById("box6"),
    box7 = document.getElementById("box7"),
    box8 = document.getElementById("box8"),
    box9 = document.getElementById("box9");

  if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
    selectWinnerBoxes(box1, box2, box3);

  if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
    selectWinnerBoxes(box4, box5, box6);

  if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
    selectWinnerBoxes(box7, box8, box9);

  if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
    selectWinnerBoxes(box1, box4, box7);

  if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
    selectWinnerBoxes(box2, box5, box8);

  if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
    selectWinnerBoxes(box3, box6, box9);

  if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
    selectWinnerBoxes(box1, box5, box9);

  if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
    selectWinnerBoxes(box3, box5, box7);

  var isDraw = true;
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].innerHTML === "") {
      isDraw = false;
      break;
    }
  }
  if (isDraw) {
    turn.innerHTML = "引き分け";
    turn.style.fontSize = "40px";
  }

}



for (var i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function () {
    if (this.innerHTML !== "X" && this.innerHTML !== "O") {
      if (X_or_O % 2 === 0) {
        console.log(X_or_O);
        this.innerHTML = "X";
        turn.innerHTML = "今'O'の番です";
        getWinner();
        X_or_O += 1;

      } else {
        console.log(X_or_O);
        this.innerHTML = "O";
        turn.innerHTML = "今'X'の番です";
        getWinner();
        X_or_O += 1;
      }
    }

  };
}

document.getElementById('replay').addEventListener('click', replay);

function replay() {

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("win");
    boxes[i].innerHTML = "";
    turn.innerHTML = "Play";
    turn.style.fontSize = "25px";

  }

}