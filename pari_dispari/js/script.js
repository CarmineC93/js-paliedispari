/*Pari e Dispari*/

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const userChoice = prompt("Scegli tra 'pari' o 'dispari'");
console.log(userChoice);

const userNmr = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNmr)

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

const computerNmr = randomizeNmr (1, 5);
console.log(computerNmr);

//Sommiamo i due numeri

const sumNmr = computerNmr + userNmr;

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

const result = assignOddOrEven (sumNmr);
console.log(result);

//Dichiariamo chi ha vinto.
if(result === userChoice){
    console.log("Bravo hai vinto")
}else{
    console.log("Peccato, hai perso")
}


//funzione che genera un numero random tra 1 e 5 compresi
function randomizeNmr (min, max){
    const nmrGenerator = Math.floor(Math.random() * (max - min +1)) + min;
    return nmrGenerator;
}


//funzione che stabilisce se un numero è pari o dispari
function assignOddOrEven (nmr){
    let message;
    if(nmr % 2 === 0){
        message = "pari"
    } else{
        message = "dispari"
    }
    return message;
}

