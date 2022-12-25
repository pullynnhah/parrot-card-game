function getNumberCards() {
  const numberCards = Number(
    input("Com quantas cartas deseja jogar?\nNúmero par entre [4 - 14]")
  );

  if (!isNumberCardsValid(numberCards)) {
    getNumberCards();
  }

  return numberCards;
}

function isNumberCardsValid(numberCards) {
  if (numberCards < 4) return false;
  if (numberCards > 14) return false;
  return numberCards % 2 === 0;
}

function dealCards(numberCards) {

}

function game() {
  const gameData = {
    numberCards: getNumberCards(),
    deck: 
    time: 0,
  };
}

game();
