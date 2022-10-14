/**Palindroma*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.*/

//chiediamo all'utente una parola e salviamola in una variabile
const userWord = prompt("Dimmi una parola");

isPalindroma(userWord);

console.log(isWordPalindroma);


// Creo una funzione che scomponga la parola in array: in un array ci saranno le lettere in ordine da sx, e lette da dx nell'altro array.
// Se il primo indice del primo array corrisponderà all'ultimo indice del secondo array, si verifica il secondo indice con il penultimo e così via.
// se in questo modo tutti i valori degli indici corrispondono la parola sarà uguale e verrà cambiato lo stato della del return in true
//un messaggio che si attiva al true dirà che la parola è palindroma.
/**
 * Description Controllare se la parola è uguale se letta dalla prima lettera all'ultima e viceversa
 * @param {string} --> parola inserita dall'utente
 * @returns {boolean} --> true se la parola è palindroma
 */
function isPalindroma (word){

    let isWordPalindroma = false;

    let fromLeft;
    for(let letterL = 0; letterL < word.length; letterL++){
        fromLeft = word[letterL];
        console.log(fromLeft);
    }

    let fromRight;
    for(let letterR = word.length-1; letterR >= 0; letterR--){
        fromRight = word[letterR];
        console.log(fromRight);
    }

    /*finchè la lunghezza del primo array è superiore a 0 e l'indice del secondo è inferiore alla sua lunghezza
    SE il valore dell'elemento dell'indice del primo array è uguale a quello dell'indice del array secondo si passa agli indici successivi
    altrimenti se i valori non sono uguali il cotrollo può fermarsi, le parole non sono uguali*/
  
    let letter = 0;
    while(letter < word.length && fromRight === fromLeft){         
        if(letter === word.length-1){
            isWordPalindroma = true;
        };
        letter++
    }


    return isWordPalindroma;

}

