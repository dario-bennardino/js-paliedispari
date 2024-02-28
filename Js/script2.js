//ESERCIZIO NUMEO PARI DISPARI

//creo variabile numeroUtente con prompt

let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));


// Creo variabile sceltaUtente con prompt pari oppure dispari
let sceltaUtente = prompt("Scegli pari o dispari:").toLowerCase();

//Verifico validità scelta e numero

if((sceltaUtente === "pari" || sceltaUtente === "dispari") && !isNaN(numeroUtente) && numeroUtente >=1 && numeroUtente <= 5){
    
     // Genera un numero casuale per il computer
    
     let numeroComputer = generaNumeroCasuale(); 
     
       // Somma i due numeri
    let somma = numeroUtente + numeroComputer;

       // Visualizza i risultati in console

       console.log(`Numero utente: ${numeroUtente}`);
       console.log(`Numero computer: ${numeroComputer}`);
       console.log(`Somma: ${somma}`);

       // Verifica chi ha vinto e se la somma è pari o dispari

    if ((isPari(somma) && sceltaUtente === "pari") || (!isPari(somma) && sceltaUtente === "dispari")) {
        console.log(`Complimenti! Hai vinto! La somma (${somma}) è ${isPari(somma) ? 'pari' : 'dispari'}.`);
    } else {
        console.log(`Mi dispiace, hai perso. La somma (${somma}) è ${isPari(somma) ? 'pari' : 'dispari'}. Prova di nuovo!`);
    }
}




//Creo le funzioni
// Funzione per generare un numero casuale tra 1 e 5
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per determinare se un numero è pari o dispari
function isPari(numero) {
    return numero % 2 === 0;
}