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
    card.setAttribute('id',`card_${i}`);
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


document.querySelectorAll('.flip-card').forEach(card => {
  cards.push(card);
});

cards.forEach(card => { /*this loops through each card without event listener*/
  card.addEventListener('click', () => { /*event listener is added to each of the card*/

    //allows to open only two cards
      card.style.transform = "rotateY(180deg)"; /*once clicked rotates card*/
      card.classList.add('open');/*adds classname 'open'*/
      opened_cards.push(card);/*once card is open its pushed to opened_cards array*/

      console.log(opened_cards.length);
      console.log(opened_cards);
      /*checking if there is more than 2 opened cards*/
      if(opened_cards.length === 2){
        console.log('im here two cards open')
        setTimeout(match, 1500) //executes code only when the timer expires

        }
    });
  });



// let matched_cards;


/*randomly assign colors to cards
one color to two cards and also add classname of that color*/


/*when event is triggered by clicking on the card
also adds classname to open
applies to multiple cards*/


function match(){
  
  if(opened_cards[0].name === opened_cards[1].name ){

    opened_cards.forEach(el => {
      //el.style.transform = "rotateY(0deg)";
      el.classList.add('matched');
      //el.style.display = 'none';
    });

    opened_cards.forEach(el =>{

      el.classList.remove('open');
    })

  }
  else{
      console.log('doesn\'t match');
      setTimeout(opened_cards.forEach(el => {
        //el.style.transform = "rotateY(0deg)";
        el.style.transform = "rotateY(0)";/*rotates to the same position*/
        el.classList.remove('open'); /*when rotates back it removes 'open' class*/
        //el.style.display = 'none';
      }),1000);
    }
  opened_cards = [];
}
