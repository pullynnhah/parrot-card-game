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

function game() {
  const deckSize = 6; // TODO: call getDeckSize();
  getDeck(deckSize);
}

const PARROTS = ["quad", "imposter", "tiedye", "christmas", "darkmode", "twins", "brazilianplayer"];
const MIN_CARDS = 4;
const MAX_CARDS = 14;

game();
