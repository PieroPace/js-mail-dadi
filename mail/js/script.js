// Chiedi all’utente la sua email,

const email = prompt("Inserisci la tua email");
const emails = ["pincopallo@gmail.com", "piero.pace88@gmail.com", "prova123@gmail.com", "pippopluto@gmail.com"];

let find = false;

// controlla che sia nella lista di chi può accedere,
for (let i = 0; i < emails.length; i++) {
    const element = emails[i];
    if (email.toLowerCase().trim() == element.toLowerCase().trim()) {
        find = true;
    }
}

// stampa un messaggio appropriato sull’esito del controllo.

if (find) {
    alert("Benvenuto nel sito");
} else {
    alert ("Non sei autorizzato ad accedere");
}