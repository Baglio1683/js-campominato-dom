
const grid = document.querySelector(".box_grid"); 

const btn = document.querySelector("button");

btn.addEventListener("click" , CreateCards);





// SECTION DEFINITION FUNCTION 

/**
 * Description the function add the class card_grid_click who have blue backgroud,
 *  and message of the internal value of card. We use this function on The Create Cards function
 * because we want to have this effect when we click the card 
 * @returns {void}
 */
function ShowNumber(){
    this.classList.add("card_grid_click")      
}


/**
 * Description Method for Create the cards, link directly on the option of first section on the header. 
 * 7The function can create 100 , 81 or 49 cards, 
 * depend on the choice of the operator 
 * @returns {void}
 */
function CreateCards(){

     grid.innerHTML = ""; 

     const sel = document.getElementById("select_cards");   
     let i= 1;

     const arrayBomb = GenerateBombs(sel.value);
 
     
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
      card.addEventListener('click' , ShowBomb(arrayBomb)); 
     }

     grid.appendChild(card);
     i++;

}


}


function GenerateBombs(max){

  const arrayB = []; 
  let i = 0; 

  while(i < 16){

      let num = Math.floor((Math.random()*(max-1))+1)

      if(!arrayB.includes(num)){
    
       arrayB.push(num); 
       i++; 

      }

  }

  return arrayB;

}





function ShowBomb(arr){


    const cardGrid = document.getElementsByClassName("card_grid") 

   for(let j = 0 ; j < cardGrid.length ; j ++){

    let find = false; 

    for(let k =0 ; k < arr.length ; k++){
        if(arr[k] == cardGrid[j].innerHTML){
            find = true; 
        }
    }

   if(find){
    cardGrid[j].classList.add("card_grid_bomb") 
   }

   }

}

