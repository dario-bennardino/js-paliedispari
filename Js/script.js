let parola = prompt("Inserisci una parola");

//Richiamo la funzione per controllare se la parola inserita è palidroma ed aggiungo allert

if (parolaPalidroma(parola)){
    alert("la parola inserita è palidroma");
} else{
    alert("La parola inserita non è palidroma");
}


//Definisco la funzione per il controllo della parola palidroma

function parolaPalidroma(parola){
    // Confronta la parola inserita al suo inverso
    return parola === parola.split("").reverse().join("");
}