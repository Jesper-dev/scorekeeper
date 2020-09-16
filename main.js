//Select the buttons
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");

//Select the span around the players to incrimate score
var p1Span = document.querySelector("#p1Span");
var p2Span = document.querySelector("#p2Span");

//Create a variable to hold the score
var p1Score = 0;
var p2Score = 0;

//Create vars for ending the game
var gameOver = false;
var winningScore = 5;

var numIn = document.querySelector("input");
var score = document.querySelector("#score")

p1.addEventListener("click", function(){
    //Add if states for ending game
    if(!gameOver){
       //Adds 1 to p1Score
       p1Score++;
          if(p1Score == winningScore){
              //Makes the text green if this player wins
              p1Span.classList.add("winner");
              gameOver = true;
        }
    //Adds p1Score to p1Span
    p1Span.textContent = p1Score;
    
    }

});

p2.addEventListener("click", function(){
    //Add if states for ending game
    if(!gameOver){
        //Adds 1 to p2Score
        p2Score++;
        if(p2Score === winningScore){
            //Makes the text green if this player wins
            p2Span.classList.add("winner");
            gameOver = true;
        }
    //Adds p2Score to p2Span
    p2Span.textContent = p2Score;

    }
    
 });

 //To reset the score
 //Created a function so i can reuse it if i want
 function resetGame(){
    p1Score = 0;
    p2Score = 0;
    p1Span.textContent = 0;
    p2Span.textContent = 0;

    //To remove green text
    p1Span.classList.remove("winner");
    p2Span.classList.remove("winner");

    //To enable the buttons again
    gameOver = false;
 }

 
 reset.addEventListener("click", function(){
    resetGame();
 });

 numIn.addEventListener("change", function(){
    score.textContent = numIn.value;
    winningScore = Number(numIn.value);
    resetGame();
 });