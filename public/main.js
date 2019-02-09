// OBJ: shuffle a deck and display the card
  // console.log()

// listener for clicking the face down button
const deck = []
const createDeck = () => {
  //initialize the card deck arrays.
  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Ace", "Jack", "Queen", "King"]
  const suit = ["Spades", "Hearts", "Diamonds", "Clubs"]

  for (let i = 0; i < suit.length; i++){ //for loop going through each suit
    for (let j = 0; j < cards.length; j++){ //each suit gets a card set 
      const card = { //for each card type and suit, assign it to the object 'cards'
        suit: suit[i],
        cards: cards[j]
      }

      //add the new card to the deck array.
      deck.push(card)
    }
  }
} 

const shuffleCards = () => {
  for(let i = deck.length - 1; i>= 0; i--){
    const j = Math.floor(Math.random() * (i + 1))
    const iCard = deck[i]
    const jCard = deck[j]
    deck[i] = jCard
    deck[j] = iCard
  }
}


const dealCards = () => {
  // hit me with the first card
  const drawCard =  deck.shift()
  console.log(drawCard)
  //Show me what I have won
  document.querySelector('#card-flipped').textContent = 
  drawCard.cards + " of " + drawCard.suit
}

const main = () => {
  createDeck()
  shuffleCards()
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.hand-down').addEventListener('click', dealCards)
