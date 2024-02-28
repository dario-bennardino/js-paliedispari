esercizio 28/02/2024 <br>
paliedispari
===
Palindroma<br>
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
## Svolgimento
1. creao una variabile con un prompt dove chiedo di inserire all'utente una parola
2. Creo funzione per verificare se la parola inserita è palindroma
3. Confronto i caratteri della parola tramite un ciclo for che itera per metà della lunghezza 
4. Se i caratteri non corrispondono la parola non è palindroma e mi restituisce false, altrimenti restituisce true ed il ciclo si chiude.
5. Quindi se la parola inserita dall'utente sarà palindroma mi uscirà un allert confermandomi parola palindroma, altreimenti else alert la parola inserita non è palindroma.



## Esercizio pari e dispari
**Consegna** L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti<br>
## Svolgimento
1. creo una funzione per generare un numero random da 1 a 5 per i computer
2. creo due variabile, alla prima attribuisco tramite un prompt utilizzando parselInt il valore da 1 a 5 che sceglierà l'utente ed alla seconda variabile pari oppure dispari verificando la validità
3. verifico che il numero inserito sia corretto quindi dovra essere un numero, numero > 0 e numero < 5 e che la paroila inserita sia corretta
4. verifico che la parola inserita sia pari oppure dispari
5. se la condizione precedente sarà vera creo una variabile numeroComputer e genero un' estrtazione di un numero da 1 a 5.
6. sommo i due numeri
7. faccio consol.log di numeroUtente, consol.log di numeroComputer e consol.log somma dei numeri
8. verifico chi ha vinto utulizzando if
