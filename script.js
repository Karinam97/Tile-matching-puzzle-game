console.log('hello');
/*store every element of the card to array*/
let opened_cards = [];
const cardArray = [
  {
    name:'card-1',
    img: 'images/crazy.png'
  },
  {
    name:'card-1',
    img: 'images/crazy.png'
  },
  {
    name:'card-2',
    img: 'images/star.png'
  },
  {
    name:'card-2',
    img: 'images/star.png'
  },
  {
    name:'card-3',
    img: 'images/party.png'
  },
  {
    name:'card-3',
    img: 'images/party.png'
  },
  {
    name:'card-4',
    img: 'images/kiss.png'
  },
  {
    name:'card-4',
    img: 'images/kiss.png'
  }
]

cardArray.sort(() => 0.5 - Math.random());
let game = document.querySelector('.game');

function createBoard(){

  for( let i = 0; i < cardArray.length ; i++){
    let card = document.createElement('div');
    card.classList.add('flip-card');
    card.classList.add(cardArray[i].name);
    card.setAttribute('id',`card_${i}`); //check if this is necessary
    let blankCard = document.createElement('img');
    let flippedCard = document.createElement('img');
    blankCard.setAttribute('src','images/blank.jpg');
    blankCard.classList.add('flip-card-back');
    flippedCard.setAttribute('src', cardArray[i].img)
    flippedCard.classList.add('flip-card-front');
    card.appendChild(blankCard);
    card.appendChild(flippedCard);
    game.appendChild(card);
  }
}

createBoard();

let cards = [];

//storing each element into cards array
document.querySelectorAll('.flip-card').forEach(card => {
  cards.push(card);
});

cards.forEach(card => { /*this loops through each card without event listener*/
  card.addEventListener('click', () => { /*event listener is added to each of the card*/

    //allows to open only two cards
      card.style.transform = "rotateY(180deg)"; /*once clicked rotates card*/
      card.classList.add('open');/*adds classname 'open'*/
      opened_cards.push(card);/*once card is open its pushed to opened_cards array*/

      /*checking if there is more than 2 opened cards*/
      if(opened_cards.length === 2){
        console.log('TWO CARDS OPEN')
        //setTimeout(match, 500) //executes code only when the timer expires
        disableAllCards();
        setTimeout(match, 1200);
        setTimeout(flipCardsBack, 1500);
        setTimeout(enableAllCards, 1500);
      }
    });
  });

//checks if cards are matching
function match(){
  if(opened_cards[0].className === opened_cards[1].className ){
    opened_cards.forEach(el => {
      //el.style.transform = "rotateY(0deg)";
      el.classList.add('matched');
      //el.style.display = 'none';
    });
  }
}

//Disables cards from clicking
function disableAllCards(){
  cards.forEach(openedCard => {
    openedCard.style.pointerEvents = 'none';
  })
}
//Enables clicking
function enableAllCards(){
  cards.forEach(openedCard => {
    openedCard.style.pointerEvents = 'visible';
  }, 1000);
}

//Flips cards back and empties array of opened cards
function flipCardsBack(){
  opened_cards.forEach(el => {
      el.classList.remove('open');
      el.style.transform = "rotateY(0)";/*rotates to the same position*/
    })
  opened_cards = [];
}
