function rollDice() {
    // generate random numbers between 1 and 6 for both players
    var player1Dice = Math.floor(Math.random() * 6) + 1;
    var player2Dice = Math.floor(Math.random() * 6) + 1;

    // display the dice numbers for both players
    document.getElementById("player1").textContent = player1Dice;
    document.getElementById("player2").textContent = player2Dice;

    // determine the winner
    if (player1Dice > player2Dice) {
        document.getElementById("result").innerHTML = "Player 1 Wins!";
    } else if (player2Dice > player1Dice) {
        document.getElementById("result").innerHTML = "Player 2 Wins!";
    } else {
        document.getElementById("result").innerHTML = "Both tied!";
    }
}