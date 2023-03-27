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
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();

//questa funzione dice quanti colori sono presenti nella mia palette

//il bug era dovuto al metodo length scritto in maniera scorretta

//prbabilmente l'arrey dei colori dovrebbe essere al di fuori, e la funzione dovrebbe
//avere poi come argomento l'arrey dei colori in modo da essere riutilizzabile


// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = parseInt(prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

//funzione: dato un input numerico restituiscimi il numero +12

//il bug era dovuto all'input, riconosciuto come stringa, quindi usando parseInt
//forziamo il tipo di dato ad un numero

//anche in questo caso sarebbe meglio avere un argomento della funzione come input
//in modo da poter poi riutilizzare il codice

// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');
    let grantAccess = 'false';


    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === 'true') {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

//la funzione verifica se l'email inserita è autorizzata o no, attraverso un tag flag

//il bug era dovuto all'ultima condizione logica if/else, dato che stavamo verificando
//una stringa e invece abbiamo inserito un dato booleano nella condizione

//secondo la logica della funzione non avremmo bisogno della nostra variabile flag
//ESEMPIO

function checkAccess2() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    if (addresses.includes(userEmail)) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess2();