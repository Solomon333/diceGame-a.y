      // generate random number for each player
let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;
 
      // holds images src location as a string 
let changeImage1 = "images/dice"+ randomNumber1 + ".png";
let changeImage2 = "images/dice"+ randomNumber2 + ".png";

      //changes the player images using the string above
let player1 = document.querySelectorAll("img")[0].setAttribute("src", changeImage1);
let player2 = document.querySelectorAll("img")[1].setAttribute("src", changeImage2);

      // game conditions
if(randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 1 wins👍"
}else if(randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 2 wins👍"
      
}else {
      document.querySelector("h1").innerHTML = "Draw😁"
}