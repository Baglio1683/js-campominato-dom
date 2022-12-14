
const grid = document.querySelector(".box_grid"); 

const btn = document.querySelector("button");

btn.addEventListener("click" , CreateCards);

let count; 

let arrayBomb;

const res = document.getElementById("result")


// SECTION DEFINITION FUNCTION 

/**
 * Description the function add the class card_grid_click who have blue backgroud,
 *  and message of the internal value of card. We use this function on The Create Cards function
 * because we want to have this effect when we click the card 
 * @returns {void}
 */
function ShowNumber(){
    this.classList.add("card_grid_click") 
    this.removeEventListener('click' , ShowNumber)
    count++    
}


/**
 * Description Method for Create the cards, link directly on the option of first section on the header. 
 * 7The function can create 100 , 81 or 49 cards, 
 * depend on the choice of the operator 
 * @returns {void}
 */
function CreateCards(){

     count = 0; 

     grid.innerHTML = ""; 

     res.innerHTML = ""; 

     const sel = document.getElementById("select_cards");   
     arrayBomb = GenerateBombs(sel.value)

     console.log(arrayBomb)

     let i= 1;

     while(i<=sel.value){

     let card = document.createElement('div');

     if(sel.value === "100"){
         card.classList.add("card_grid");
      }
     if(sel.value === "81"){
         card.classList.add("card_grid_9");
      }
     if(sel.value === "49"){
         card.classList.add("card_grid_7");
       }

     card.innerHTML = i;

     if(!arrayBomb.includes(i)){
     card.addEventListener('click' , ShowNumber);
     }
     else{
      card.addEventListener('click', ShowBomb); 
     }

     grid.appendChild(card);
     i++;

}


}


/**
 * Description Function used for generate 16 numbers random, in the range from 1 to max
 * @param {number} max number of random numbers generated
 * @returns {Array} Array of 16 numbers 
 */
function GenerateBombs(max){

  const arrayB = []; 
  let i = 0; 

  while(i < 16){

      let num = Math.floor((Math.random()*(max))+1)

      if(!arrayB.includes(num)){
    
       arrayB.push(num); 
       i++; 

      }

  }

  return arrayB;

}





/**
 * Description: the function appear 
 * the bombs when you click one bombs
 * @returns {void}
 */
function ShowBomb(){

    let cardGrid; 
   
   if(this.classList.contains("card_grid")){
    cardGrid = document.getElementsByClassName("card_grid")
     }
     if(this.classList.contains("card_grid_9")){
        cardGrid = document.getElementsByClassName("card_grid_9")
    }
    if(this.classList.contains("card_grid_7")){
      cardGrid = document.getElementsByClassName("card_grid_7")
      }


   for(let j = 0 ; j < cardGrid.length ; j ++){

    let find = false; 

    for(let k =0 ; k < arrayBomb.length ; k++){
        if(arrayBomb[k] == cardGrid[j].innerHTML){
            find = true; 
        }
    }

   if(find){
    cardGrid[j].classList.add("card_grid_bomb"); 
   }
   else{
    cardGrid[j].removeEventListener('click' , ShowNumber);
   }
   }


   if(this.classList.contains("card_grid") && count == 84){
    res.innerHTML = `Hai Vinto !!!`
   }
   else if(this.classList.contains("card_grid_9") && count == 65){
     res.innerHTML = `Hai Vinto !!!`
   }
   else if(this.classList.contains("card_grid_7") && count == 33){
     res.innerHTML = `Hai Vinto !!!`
   }
   else{
   res.innerHTML = `il Tuo punteggio ??: ${count}`
   }

}

