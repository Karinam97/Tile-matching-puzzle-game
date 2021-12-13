console.log('hello');
/*store every element of the card to array*/
let cards = [];
document.querySelectorAll('.flip-card').forEach(card => {
  cards.push(card);
});
let opened_cards = [];
let matched_cards;
/*randomly assign colors to cards
one color to two cards and also add classname of that color*/


/*when event is triggered by clicking on the card
also adds classname to open
applies to multiple cards*/
cards.forEach(card => { /*this loops through each card without event listener*/
  card.addEventListener('click', () => { /*event listener is added to each of the card*/

    //allows to open only two cards

      card.style.transform = "rotateY(180deg)"; /*once clicked rotates card*/
      card.classList.add('open');/*adds classname 'open'*/
      opened_cards.push(card);/*once card is open its pushed to opened_cards array*/

      console.log(opened_cards.length);

      /*checking if there is more than 2 opened cards*/
      if(opened_cards.length === 2){
        console.log('im here two cards open')
        setTimeout(match, 1500) //executes code only when the timer expires

        }


    });
  });

function match(){
  matched_cards = opened_cards.every(card => card.classList.contains('blue'))
  if(matched_cards){

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
