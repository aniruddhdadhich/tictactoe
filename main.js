let music = new Audio("./assets/music.mp3");
let ting = new Audio("./assets/ting.mp3");
let gameover = new Audio("./assets/gameover.mp3");
let turn = "X";

let someoneWon = false;

// Changing turn
const changeTurn = () => {
  turn = turn === "X" ? "0" : "X";
};

// Checking for win
const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText !== "" &&
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[1]].innerText === boxTexts[e[2]].innerText
    ) {
      //console.log("You Won");
      gameover.play();
      someoneWon = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "400px";

      document.getElementsByClassName("info")[0].style.fontSize = "25px";
      msg.innerText = "Congratulations!!";
    }
  });
};

// Main Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((box) => {
  let boxText = box.querySelector(".boxtext");
  box.addEventListener("click", () => {
    if (!someoneWon) {
      if (boxText.innerText === "") {
        boxText.innerText = turn;
        ting.play();
        changeTurn();
        checkWin();
        document.getElementsByClassName("info")[0].innerText = someoneWon
          ? boxText.innerText + " WON"
          : "Turn of " + turn;
      }
    } else {
      let boxtexts = document.querySelectorAll(".boxtext");
      Array.from(boxtexts).forEach((e) => {
        e.innerText = "";
        turn = "X";
        document.getElementsByClassName("info")[0].innerText =
          "Turn of " + turn;
        document.getElementsByClassName("info")[0].style.fontSize = "16px";
        document
          .querySelector(".imgbox")
          .getElementsByTagName("img")[0].style.width = "0px";

        msg.innerText = "Good Luck!!";
        someoneWon = false;
      });
    }
  });
});

// Reset functionality
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((e) => {
    e.innerText = "";
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Turn of " + turn;
    document.getElementsByClassName("info")[0].style.fontSize = "16px";
    document
      .querySelector(".imgbox")
      .getElementsByTagName("img")[0].style.width = "0px";
    msg.innerText = "Good Luck!!";
  });
});
