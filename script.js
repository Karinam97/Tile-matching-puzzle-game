console.log('hello');
/*store every element of the card to array*/
let cards = [];
document.querySelectorAll('.flip-card').forEach(card => {
  cards.push(card);
});
let opened_cards = [];
/*randomly assign colors to cards
one color to two cards and also add classname of that color*/


/*when event is triggered by clicking on the card
also adds classname to open
applies to multiple cards*/
cards.forEach(card => { /*this loops through each card without event listener*/
  card.addEventListener('click', () => { /*event listener is added to each of the card*/

    card.style.transform = "rotateY(180deg)"; /*once clicked rotates card*/
    card.classList.add('open');/*adds classname 'open'*/
    opened_cards.push(card);/*once card is open its pushed to opened_cards array*/

    /*checking if there is more than 2 opened cards*/
    if(opened_cards.length === 2){

      /*
        ******************************************************
        it has to check if two cards are the same, if yes it has to remove elements
        from document,

        document.querySelector('.flip-card.red').remove()

        if no, then just rotates them back to the same position
      */

      if(opened_cards[0].className === 'flip-card blue open' && opened_cards[1].className === 'flip-card blue open'){
        console.log('im here **********')
        opened_cards.forEach(el => el.remove('.flip-card.blue.open'));
        opened_cards = [];
      }else{
        opened_cards.forEach(el => {
          el.style.transform = "rotateY(0)";/*rotates to the same position*/
          el.classList.remove('open'); /*when rotates back it removes 'open' class*/

        })
        opened_cards = []; /*important to remove element from this list when they flip back*/
      }


      }
    });
  });
/*flip card back and remove class name 'open'*/


//need to write a loop
