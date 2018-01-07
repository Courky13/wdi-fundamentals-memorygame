var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [cards.push('cardOne'), cards.push('cardTwo')];
var cardOne = (cards[0]);
var cardTwo = (cards[2]);
if (cardsInPlay.length === 2) {
  if (cardOne === cardTwo) {alert("You found a match!");
} else {alert("Sorry, try again.");
}
}
