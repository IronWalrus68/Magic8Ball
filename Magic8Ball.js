//so the way this will work is the code will promt the user to input a question, the ball will roll a number, compair that number to a switch case then display that number 

// It is certain.
// It is decidedly so.
// Without a doubt.
// Yes definitely.
// You may rely on it.

// As I see it, yes.
// Most likely.
// Outlook good.
// Yes.
// Signs point to yes.

// Reply hazy, try again.
// Ask again later.
// Better not tell you now.
// Cannot predict now.
// Concentrate and ask again.

// Don't count on it.
// My reply is no.
// My sources say no.
// Outlook not so good.
// Very doubtful.

//question("")

const qtyForm = document.querySelector('#questionForm');
const qtyInput = document.querySelector('#question');
const qtyOutput = document.querySelector('#eightBallOutput');

qtyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    qtyOutput.style.fontSize = '1em';
    const newPrediction = qtyInput.value;
    let newAnswer = question(newPrediction)
    qtyOutput.innerText = newAnswer

});


function question(question) {
    if (typeof question !== 'string'){console.log("please make sure you're using a string");return}
    console.log(`your question was... ${question}... the ball says...`);
let Prediction = Math.floor(Math.random() * 20) + 1;
switch(Prediction) {
    case 1:
        return("It is certain.");
    case 2:
        return("It is decidedly so.");
    case 3:
        return("Without a doubt.");
    case 4:
        return("Yes definitely.");
    case 5:
        return("You may rely on it.");
    case 6:
        return("As I see it, yes.");
    case 6:
        return("Most likely.");
    case 7:
        return("Outlook good.");
    case 8:
        return("Yes.");
    case 9:
        return("Signs point to yes.");
    case 10:
        return("Reply hazy, try again.");
    case 11:
        return("Ask again later.");
    case 12:
        return("Better not tell you now.");
    case 13:
        return("Cannot predict now.");
    case 14:
        return("Concentrate and ask again.");
    case 15:
        return("Don't count on it.");
    case 16:
        return("My reply is no.");
    case 17:
        return("error try again");
    case 18:
        return("My sources say no.");
    case 19:
        return("Outlook not so good.");
    case 20:
        return("Very doubtful.");

        default:
            return("how did you even trigger this?")
}
}

    