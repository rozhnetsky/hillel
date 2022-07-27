guessingGame = plays => {
    let randomNumber = Math.floor(Math.random() * 10);
    let i = 0;
    let win = false;
    const messages = {
        "success": `You got it! Answer is ${randomNumber}`,
        "low": "You're too low!",
        "high": "You're too high!",
        "answered": "You know the answer. What do you want from me?",
        "stop": `No more guesses the answer was ${randomNumber}! Please start a new game`
    }
    console.log(`>>>>>>>>>>> NEW GAME STARS >>>>>>>>>>>`);
    if (i === plays) console.log(messages.stop);

    return number => {
        if (win) {
            console.log(messages.answered);
        } else {
            if (i === plays) {
                console.log(messages.stop);
                return;
            }
            if (number > randomNumber) console.log(messages.high, "Your answer: "+number);
            if (number < randomNumber) console.log(messages.low, "Your answer: "+number);
            if (number === randomNumber) {
                console.log(messages.success);
                win = true;
            }
        }
        i++;
    }
}

let game = guessingGame(3)
game(5) // "Your guess is too high!"
game(3) // "Your guess is too high!"
game(2) // "Your guess is too high!"
game(1) // "No more guesses the answer was 0! Please start a new game"

let game2 = guessingGame(5)
game2(1) // "You're too low!"
game2(8) // "You're too high!"
game2(5) // "You're too low!"
game2(7) // "You got it!"
game2(1) // "You know the answer. What do you want from me?"
game2(2) // "No more guesses the answer was 7! Please start a new game"