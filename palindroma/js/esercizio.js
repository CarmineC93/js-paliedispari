
// ORDINARE I NUMERI IN UN ARRAY

const array = [20, 15, 30, 5, 631];

//iniziamo un ciclo che cicli uno alla volta gli elementi dell'array
for (let i = 0; i < array.length; i++){
    //estraiamo il singolo elemento dell'array
    const nmr = array[i];
    //indichiamo qual'è il minimo ATTUALE, ci servirà per cambiargli l'indice
    let min = nmr; // minimo attuale
    //indichiamo qual'è l'indice dell'elemento esaminato, ci servirà per cambiarlo e spostare elementi
    let minIndex = i;


    //ha lo scopo di trovare il numero minimo nell'array
    for(let j = i + 1; j < array.length; j++){
       //+1 perchè partiamo dal successivo

        const nmrToCompare = array[j];

       //SE il numero da comparare è inferiore all'attuale numero minimo, diventa lui il nuovo attuale minimo
        if(nmrToCompare < min){
           //salviamo i valori del nuovo attuale minimo:
           minIndex = j; //cioè la posizione esaminata diventa la posizione da cui è partito il ciclo
           min = nmrToCompare; //e il valore dell'elemento che ha superato la condizione diventa il nuovo attuale minimo
        }
    }

    //facciamo lo scambio, rimettendo nell'array i nuovi valori degli elementi
    //estraiamo il valore dell'array che abbiamo esaminato e che è stato confrontato nel secondo for con gli altri elementi dell array
    let tmp = nmr;

    array[i] = array[minIndex];
   
    array[minIndex] = tmp;
}


console.log(array);