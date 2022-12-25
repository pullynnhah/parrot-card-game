function getNumberCards() {
  const input = `Com quantas cartas deseja jogar?\nNúmero PAR entre [${MIN_CARDS} - ${MAX_CARDS}]`;
  const numberCards = Number(prompt(input));

  if (!isNumberCardsValid(numberCards)) {
    getNumberCards();
  }

  return numberCards;
}

function isNumberCardsValid(numberCards) {
  if (numberCards < MIN_CARDS) return false;
  if (numberCards > MAX_CARDS) return false;
  return numberCards % 2 === 0;
}

function getDeck(numberPairs) {
  const deck = [];
  for (let i = 0; i < numberPairs; i++) {
    deck.push(PARROTS[i]);
    deck.push(PARROTS[i]);
  }
  deck.sort(() => Math.random() - 0.5);
  return deck;
}

function dealDeck(deck) {
  main.innerHTML = "";
  for (const card of deck) {
    main.innerHTML += `
    <div class="card">
      <div class="front-face face">
        <img src="../assets/cards/${card}parrot.gif" alt="${card} parrot" />
      </div>
      <div class="back-face face" onclick="flip(this, '${card}')">
        <img src="../assets/cards/back.png" alt="back parrot" />
      </div>
    </div>
    `;
  }
}

function flip(card, cardName) {
  if (canClick) {
    clickCounts++;
    card.parentNode.classList.add("clicked");
    pairs.push({ card: card.parentNode, cardName });
    if (pairs.length === 2) {
      canClick = false;
      comparePairs();
    }
  }
}

function computerFlip() {
  for (const pair of pairs) pair.card.classList.remove("clicked");
  pairs = [];
  canClick = true;
}

function comparePairs() {
  if (pairs[0].cardName !== pairs[1].cardName) {
    setTimeout(computerFlip, 1000);
  } else {
    if (++pairsCount === numberCards / 2) {
      game_over();
    } else {
      pairs = [];
      canClick = true;
    }
  }
}

function game_over() {
  clearInterval(interval);
  setTimeout(() => {
    alert(`Você ganhou em ${clickCounts} jogadas e ${time} segundos!`);
    if (promptNewGame()) play();
  }, 500);
}

function promptNewGame() {
  const restart = prompt("Deseja reiniciar o jogo?\n[sim]/[não]");
  if (restart === "sim") return true;
  if (restart === "não") return false;
  return promptNewGame();
}

function play() {
  pairsCount = 0;
  clickCounts = 0;
  time = 0;
  canClick = true;
  pairs = [];

  numberCards = getNumberCards();
  deck = getDeck(numberCards / 2);
  dealDeck(deck);

  timer.innerHTML = "0";

  interval = setInterval(() => (timer.innerHTML = (++time).toString()), 1000);
}

const MIN_CARDS = 4;
const MAX_CARDS = 14;
const PARROTS = [
  "revertit",
  "bobross",
  "triplets",
  "fiesta",
  "metal",
  "explody",
  "unicorn",
];

const main = document.querySelector("main");
const timer = document.querySelector(".timer");

let numberCards;
let deck;
let pairs;
let pairsCount;
let clickCounts;
let interval;
let time;
let canClick;

play();
