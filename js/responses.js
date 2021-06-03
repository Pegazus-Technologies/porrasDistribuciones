function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Buenas tardes") {
        return "Muy buenas tardes en que podemos ayudarte? Desea saber sobre nuestros precios?";
    } else if (input == "Si") {
        return "Claro que si lo invitamos a comunicarse con nosotros a este numero....!";
    } else if(input == "Muchas gracias" ) {
        return "Con mucho gusto estamos para ayudarte";
    }
}