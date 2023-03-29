let randomNumber1 = Math.floor(Math.random()* 6) + 1;
let randomNumber2 = Math.floor(Math.random()* 6) + 1;

let randomImage1 = "images/dice" + randomNumber1 + ".png";
let randomImage2 = "images/dice" + randomNumber2 + ".png";
let result = document.querySelector("h1");

let player1 = document.querySelectorAll("img")[0];
let player2 = document.querySelectorAll("img")[1];

player1.setAttribute("src", randomImage1);
player2.setAttribute("src", randomImage2);

    if(randomImage1 > randomImage2 ){
         result.innerHTML = "Player 1  won!!";
    }else if(randomImage2 > randomImage1) {
         result.innerHTML = "Player 2 won!!"
    }else {
         result.innerHTML = "Draw!!"
    }
    




// document.querySelector("img .img1").setAttribute("src", randomImage);
// let player2 = document.querySelector("img .img2");;
// let result = document.querySelector("h1");



//     if(player1 > player2){
//        return result.innerHTML = "player 1 won!!"; 
//     }else if(player2 > player1){
//        return result.innerHTML = "player 2 won!!";
//     }else {
//         return result.innerHTML = "Draw!!";
//     }





// let diceNumbers = [
//     "images/dice1.png"
// ,

//      "images/dice2.png"
// ,

//      "images/dice3.png"
// ,

//      "images/dice4.png"
// ,

//     "images/dice5.png"
// ,

//     "images/dice6.png"
// ]


//  let  player1 = diceNumbers[Math.floor(Math.random(0, diceNumbers.length)*diceNumbers.length)];
//    player2 = diceNumbers[Math.floor(Math.random(0, diceNumbers.length)*diceNumbers.length)];

// for(let i = 0; i < diceNumbers.length; i++){
//         return diceNumbers[index]
// }