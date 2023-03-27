/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//ad ogni iterazione il codice mi fa un log di i

//in questo caso il bug è dovuto alla condizione del ciclo for
//essendo i = 0 allora non sarà mai maggiore di 5

//nulla da segnalare


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

console.log(addIfEven(10), addIfEven(7));

//dato un numero in ingresso, se pari aggiungi 5 e ritorna il risultato
//se dispari ritora solo il numero

//il bug era dovuto alla condizione del if dove con un solo "=" stiamo assegnando un valore
//e non comparando

//sicuramente per una funzione cosi piccola potremmo utilizzare un arrowfunction
// () => num % 2 === 0 ? num + 5 && num ?!

// // ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }


// // ESERCIZIO 4 (suggerimento: ci sono 8 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // [2,4,6,8]