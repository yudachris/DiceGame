
function rollDice(){
    var randomNumber1 = Math.floor(Math.random()*6)+1;  

    document.querySelector("#dice1").src = "images/dice"+randomNumber1+".png";

    var randomNumber2 = Math.floor(Math.random()*6)+1;  

    document.querySelector("#dice2").src = "images/dice"+randomNumber2+".png";

    if(randomNumber1 > randomNumber2){
        var text =  "Player 1 Wins!";
    }
    else if(randomNumber2 > randomNumber1){
        var text =  "Player 2 Wins!"
    }
    else if(randomNumber2 == randomNumber1){
        var text =  "Draw!"
    }

    document.querySelector("#result").innerText = text;
    document.querySelector("#reset-button").classList.remove("hidden");
}

function resetGame(){
    document.querySelector("#result").innerText = "The Dice Game!";
    document.querySelector("#dice1").src = "images/dice6.png";
    document.querySelector("#dice2").src = "images/dice6.png";
    document.querySelector("#reset-button").classList.add("hidden");
}
