function getDeckSize() {
  let size = NaN;
  while (!isDeckSizeValid(size, MIN_CARDS, MAX_CARDS)) {
    size = Number(
      prompt(`Com quantas cartas deseja jogar?\nNúmero PAR entre [${MIN_CARDS} - ${MAX_CARDS}]`)
    );
  }

  return size;
}

function isDeckSizeValid(size, min, max) {
  if (isNaN(size)) return false;
  if (min > size || max < size) return false;
  return size % 2 === 0;
}

function getDeck(size) {
  const deck = [];
  PARROTS.slice(0, size / 2).forEach(parrot => {
    deck.push(parrot);
    deck.push(parrot);
  });

  return deck.sort(() => Math.random() - 0.5);
}

function renderDeck(deck) {
  cardsEl.innerHTML = "";
  deck.forEach(card => {
    // TODO: add onclick to li
    cardsEl.innerHTML += /*html*/ `
    <li class="card" onclick="flipCard(this)">
      <div class="front-face face">
        <img src="./assets/parrot.png" alt="parrot" />
      </div>
      <div class="back-face face">
        <img src="./assets/parrots/${card}parrot.gif" alt="${card} parrot" />
      </div>
    </li>
    `;
  });
}

function flipCard(card) {
  card.classList.toggle("flipped");
}

function game() {
  const deckSize = 6; // TODO: call getDeckSize();
  const deck = getDeck(deckSize);
  renderDeck(deck);
}

// constants
const PARROTS = ["quad", "imposter", "tiedye", "christmas", "darkmode", "twins", "brazilianplayer"];
const MIN_CARDS = 4;
const MAX_CARDS = 14;

// html elements
const cardsEl = document.querySelector(".cards");
const timerEl = document.querySelector(".timer");

game();
