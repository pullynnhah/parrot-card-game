function getDeckSize() {
  let size = NaN;
  while (!isDeckSizeValid(size, MIN_CARDS, MAX_CARDS)) {
    size = Number(
      prompt(`Com quantas cartas deseja jogar?\nNúmero PAR entre [${MIN_CARDS} - ${MAX_CARDS}]`)
    );
  }

  return size;
}

const PARROTS = ["quad", "imposter", "tiedye", "christmas", "darkmode", "twins", "brazilianplayer"];
const MIN_CARDS = 4;
const MAX_CARDS = 14;

getDeckSize();
