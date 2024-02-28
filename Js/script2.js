//ESERCIZIO NUMEO PARI DISPARI

//creo variabile numeroUtent con prompt

let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

//Verifico che il numero inserito dall'utente sia valido




//Creo le funzioni
// Funzione per generare un numero casuale tra 1 e 5
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per determinare se un numero è pari o dispari
function isPari(numero) {
    return numero % 2 === 0;
}