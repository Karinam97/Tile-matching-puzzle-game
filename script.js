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
cards.forEach(card => {

  card.addEventListener('click', event => {
    //event.preventDefault();
    card.style.transform = "rotateY(180deg)";
    card.classList.add('open');
    opened_cards.push(card);/*once card is open its pushed to opened_cards array*/
    console.log(opened_cards);

    if(opened_cards.length > 1){
      for(let el of opened_cards){
        el.style.animationDelay = '2s';
        el.style.transform = "rotateY(360deg)";
        el.classList.remove('open');
      }
      opened_cards = [];
      }
    });
  });
/*flip card back and remove class name 'open'*/



//need to write a loop
