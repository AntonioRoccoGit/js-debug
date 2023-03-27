/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     let message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
//     return message;
// }
// checkAge();
// console.log(checkAge());

//è una funzione che mi permette definire un messaggio differnte, 
//per un utente maggiorenne o minorenne

//la variabile message dovrebbe essere definita come "let" e non "const"
//la funzione non presentava un return

//come logica in effetti non ha molto senso perchè l unica eta che puo verificare è
//quella gia presente al suo interno
//myAge dovrebbe essere un argomento della funzione


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

//questa funzione dice quanti colori sono presenti nella mia palette

//il bug era dovuto al metodo length scritto in maniera scorretta

//prbabilmente l'arrey dei colori dovrebbe essere al di fuori, e la funzione dovrebbe
//avere poi come argomento l'arrey dei colori in modo da essere riutilizzabile


// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();


// // ESERCIZIO 4
// function checkAccess() {
//     const addresses = [
//         'mymail@mail.com',
//         'yourmail@mail.com',
//         'hermail@mail.com',
//         'hismail@mail.com',
//     ];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();
