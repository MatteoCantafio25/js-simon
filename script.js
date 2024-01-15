//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML
console.log("JS OK");

//---------------------------------//
// RECUPERO GLI ELEMENTI DALLA PAGINA

const countDownElement = document.getElementById("countdown");
const randomNumberElement = document.querySelector(".random-number");
const randomNumberContainer = document.querySelector(".random-number-container");
const formContainer = document.querySelector(".form-container");
const firstNumber = document.getElementById("n1");
const secondNumber = document.getElementById("n2");
const thirdNumber = document.getElementById("n3");
const fourthNumber = document.getElementById("n4");
const fifthNumber = document.getElementById("n5");
const button = document.getElementById("button");
const resultElement = document.getElementById("result");


// CREO UNA VARIABILE PER SCEGLIERE QUANTO DEVE DURARE IL COUNTDOWN

let seconds = 30;

// STAMPO IN PAGINA
countDownElement.innerText = seconds;

// CREO UNA COSTANTE PER SCEGLIERE QUANTI NUMERI RANDOM GENERARE
const randomNumbersToPut = 5;

// CREO UN ARRAY VUOTO SU CUI APPOGGIARMI
let list = [];

// USO UN CICLO PER FAR GENERARE TOT VOLTE UN NUMERO PARI DA 1 A 99 (MASSIMO INCLUSO)
for (let i = 0; list.length < randomNumbersToPut; i++) {

    // GENERO I NUMERI
    const randomNumber = Math.floor(Math.random() * 99) + 1;
    // FACCIO IN MODO CHE NON CI POSSANO ESSERE DOPPIONI
    if (!(list.includes(randomNumber))) {
        list.push(randomNumber);
    }
}

// CREO UNA VARIABILE DI APPOGGIO PER POI CREARE I PARAGRAFI 
let pItems = "";

// USO UN CICLO PER FAR GENERARE TOT PARAGRAFI
for (let i = 0; i < randomNumbersToPut; i++) {

    // MONTO IL MESSAGGIO
    pItems += `<p class='random-number'>${list[i]}</p>`;
}

// STAMPO IN PAGINA I PARAGRAFI CREATI
randomNumberContainer.innerHTML = pItems;

// CREO UNA COSTANTE CHE TRAMITE LA FUNZIONE SETINTERVAL MI PERMETTERA' DI AVERE UN COUNTDOWN
const countDown = setInterval(() => {
    // DECIDO CHE IL NUMERO DEVE ESSERE DECREMENTATO
    countDownElement.innerText = --seconds;

    // METTO SOTTO CONDIZIONE SECONDS
    if (seconds === 0) {
        // STOPPO L'INTERVALLO COUNTDOWN
        clearInterval(countDown);

        // FACCIO SCOMPARIRE I NUMERI RANDOM DALLO SCHERMO
        randomNumberContainer.classList.add("d-none");

        // FACCIO COMPARIRE IL FORM SULLO SCHERMO
        formContainer.classList.remove("d-none");
    }
}, 1000) // DECREMENTO IL NUMERO OGNI 1000ms = 1s


//STAMPO IN CONSOLE
console.log(list);


// CREO UNA VARIABILE SCORE PER TENERE CONTO DI QUANTI NUMERI L'UTENTE INDOVINA
let score = 0;

// CREO UN ARRAY VUOTO SU CUI APPOGGIARMI
let foundNumbers = [];

// FACCIO REAGIRE IL BOTTONE AL CLICK
button.addEventListener("click", function () {

    // TRASFORMO IL PRIMO VALORE DELL'INPUT IN UN NUMERO E VEDO SE E' UGUALE AL PRIMO ELEMENTO DELL'ARRAY
    if (parseInt(firstNumber.value) === list[0]) {
        //STAMPO IN CONSOLE
        console.log("Primo numero indovinato");
        // AUMENTO LO SCORE DI 1 OGNI VOLTA CHE UN NUMERO VIENE INDOVINATO
        score++
        // PUSHO NELL'ARRAY IL NUMERO SE E' STATO TROVATO
        foundNumbers.push(list[0]);
    } else {
        // SE L'UTENTE NON INDOVINA SEGNO IN CONSOLE CHE IL NUMERO NON E' STATO INDOVINATO
        console.log("Primo numero indovinato");
    }

    // STESSO PROCEDIMENTO DI SOPRA PER GLI ALTRI ELEMENTI
    if (parseInt(secondNumber.value) === list[1]) {
        console.log("Secondo numero indovinato");
        score++
        foundNumbers.push(list[1]);
    } else {
        console.log("Secondo numero indovinato");
    }

    // STESSO PROCEDIMENTO DI SOPRA PER GLI ALTRI ELEMENTI
    if (parseInt(thirdNumber.value) === list[2]) {
        console.log("Terzo numero indovinato");
        score++
        foundNumbers.push(list[2]);
    } else {
        console.log("Terzo numero indovinato");
    }

    // STESSO PROCEDIMENTO DI SOPRA PER GLI ALTRI ELEMENTI
    if (parseInt(fourthNumber.value) === list[3]) {
        console.log("Quarto numero indovinato");
        score++
        foundNumbers.push(list[3]);
    } else {
        console.log("Quarto numero indovinato");
    }

    // STESSO PROCEDIMENTO DI SOPRA PER GLI ALTRI ELEMENTI
    if (parseInt(fifthNumber.value) === list[4]) {
        console.log("Quinto numero indovinato");
        score++
        foundNumbers.push(list[4]);
    } else {
        console.log("Quinto numero indovinato");
    }

    //STAMPO IN CONSOLE
    console.log(score);

    // METTO SOTTO CONDIZIONE LA LUNGHEZZA DELL'ARRAY PER CAMBIARE IL MESSAGGIO SE IL PUNTEGGIO E' NULLO
    if (foundNumbers.length < 1) {
        // SE IL PUNTEGGIO E' NULLO QUESTO SARA' IL MESSAGGIO STAMPATO IN PAGINA
        resultElement.innerText = `Hai totalizzato ${score} punti`;
    } else if (foundNumbers.length === randomNumbersToPut) {
        // SE L'UTENTE TOTALIZZA IL PUNTEGGUI MASSIMO QUESTO SARA' IL MESSAGGIO
        resultElement.innerText = `Complimenti hai totalizzato il punteggio massimo!`;
    } else {
        // SE L'UTENTE HA INDOVINATO UNO O PIU' NUMERI QUESTO SARA' IL MESSAGGIO 
        resultElement.innerText = `Hai totalizzato ${score} punti,(hai indovinato i numeri: ${foundNumbers})`;
    }

    //FACCIO SCOMPARIRE I VARI INPUT E BUTTON PER FAR PROVARE ALL'UTENTE UNA SOLA VOLTA
    formContainer.classList.add("d-none");
})
