console.log('hello');
const tiles = document.getElementById('tile');


tiles.addEventListener('click', flipcard);


function flipcard(){
  tiles.style.transform = "rotateY(180deg)";
  
}
