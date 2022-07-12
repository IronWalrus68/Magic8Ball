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
function question(question) {
    if (typeof question !== 'string'){console.log("please make sure you're using a string");return}
    console.log(`your question was... ${question}... the ball says...`);
let Prediction = Math.floor(Math.random() * 20) + 1;
switch(Prediction) {
    case 1:
        console.log("It is certain.")
        break;
    case 2:
        console.log("It is decidedly so.")
        break;
    case 3:
        console.log("Without a doubt.")
        break;
    case 4:
        console.log("Yes definitely.")
        break;
    case 5:
        console.log("You may rely on it.")
        break;
    case 6:
        console.log("As I see it, yes.")
        break;
    case 6:
        console.log("Most likely.")
        break;
    case 7:
        console.log("Outlook good.")
        break;
    case 8:
        console.log("Yes.")
        break;
    case 9:
        console.log("Signs point to yes.")
        break;
    case 10:
        console.log("Reply hazy, try again.")
        break;
    case 11:
        console.log("Ask again later.")
        break;
    case 12:
        console.log("Better not tell you now.")
        break;
    case 13:
        console.log("Cannot predict now.")
        break;
    case 14:
        console.log("Concentrate and ask again.")
        break;
    case 15:
        console.log("Don't count on it.")
        break;
    case 16:
        console.log("My reply is no.")
        break;
    case 17:
        console.log("error try again")
        break;
    case 18:
        console.log("My sources say no.")
        break;
    case 19:
        console.log("Outlook not so good.")
        break;
    case 20:
        console.log("Very doubtful.")
        break;

        default:
            console.log("how did you even trigger this?")
}
}

    