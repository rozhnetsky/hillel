const guessingGame = plays => {
    let win = false;
    const messages = {
        "success": "You got it!",
        "low": "You're too low!",
        "high": "You're too high!",
        "answered": "You know the answer. What do you want from me?",
        "stop": "No more guesses the answer was 7! Please start a new game"
    }

    let randomNumber = Math.floor(Math.random() * 10);
    let i = 0;
    do {
        let number = parseInt(prompt("Enter num"));
        if (number && win === true) {
            console.log(messages.answered);
        } else {
            if (number > randomNumber) console.log(messages.high);
            if (number < randomNumber) console.log(messages.low);
            if (number === randomNumber) {
                console.log(messages.success);
                win = true;
            }
        }
        i++;
    } while (i < plays);
    if (win === false)
        console.log(messages.stop);
}

guessingGame(5);