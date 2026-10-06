let btns = document.querySelector(".btns");
let palyer = document.querySelector(".player");
let com = document.querySelector(".computer");
let heading = document.querySelector(".Heading");
let reset = document.querySelector(".reset");

btns.addEventListener("click", (e) => {
  let computer = randomEmoji();
  let player = e.target.textContent;
  com.textContent = computer;
  palyer.textContent = player;
  let result = winnerFinder(player, computer);
  heading.style.backgroundColor = "red";
  heading.style.color = "yellow";
  heading.textContent = result;
});

reset.addEventListener("click", () => {
  heading.textContent = "Stone Paper Scissors";
  palyer.textContent = "";
  com.textContent = "";
});

function randomEmoji() {
  let arr = ["✂️", "📜", "🪨"];
  let ans = Math.floor(Math.random() * 2) + 1;
  return arr[ans];
}

function winnerFinder(player, com) {
  if (
    (player == "✂️" && com == "📜") ||
    (player == "📜" && com == "🪨") ||
    (player == "🪨" && com == "✂️")
  ) {
    return `👑👑👑Winner is Player ${player}👑👑👑 `;
  } else if (
    (com == "🪨" && player == "🪨") ||
    (com == "📜" && player == "📜") ||
    (com == "✂️" && player == "c")
  ) {
    return "Draw";
  } else {
    return `Winner is Computer ${com}`;
  }
}
