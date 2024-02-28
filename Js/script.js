
//ESERCIZIO PAROLA PALINDROMA
let parola = prompt("Inserisci una parola");

//Richiamo la funzione per controllare se la parola inserita è palidroma ed aggiungo allert

if (parolaPalindroma(parola)){
    alert("la parola inserita è palindroma");
} else{
    alert("La parola inserita non è palindroma");
}


//Definisco la funzione per il controllo della parola palindroma


function parolaPalindroma(parola) {

    // Confronto i caratteri della parola tramite un ciclo for che itera per metà della lunghezza 

    for (let i = 0; i < parola.length / 2; i++) {
        if (parola[i] !== parola[parola.length - 1 - i]) {

            // Se i caratteri non corrispondono la parola non è palindroma

            return false;
        }
    }

    // Se tutti i caratteri corrispondono la parola è palindroma

    return true;
}



