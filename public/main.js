// OBJ: shuffle a deck and display the card

// listener for clicking the face down button

const shuffleCards = () =>{
  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Ace", "Jack", "Queen", "King"]
  const type = ["Spades", "Hearts", "Diamonds", "Clubs"]
  const shuffle = (cardArray) => {
    return Math.floor(Math.random() * cardArray.length)
  }
  let pulledCard = cards[shuffle(cards)]
  let cardType = type[shuffle(type)]
  document.querySelector('.hand-up').textContent = `${pulledCard} of ${cardType}` 
}


document.querySelector('.hand-down').addEventListener('click', shuffleCards)

// for i from n - 1 down to 1 do:
//   j = random integer (where 0 <= j <= i)
//   swap items[i] with items[j]
