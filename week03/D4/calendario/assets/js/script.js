/*1.dobbiamo capire in che mese siamo, per scriverlo nell'h1 e quanti giorni ha il mese, per generare il corretto numero di celle*/

const now = new Date();

/*2.per salvare gli appuntamenti dobbiamo creare un array. perchè ogni appuntamento è una stringa, ogni giorno può contenere infiniti appuntamenti e ogni mese ha un nnumero di giorni variabile.
creeremo quindi un array di array, dove l'array padre è il mese e gli array figli rappresentano i giorni

[rappresenta il mese
    [1giorno][2giorno][3giorno]
]
es.
[]
[]
[]
[]
[]
[]
[]
[]
[]
['09:00 live coding calendario]
[]
[]
[]
...

Non sapendo quanti giorni ci sono in un giorno si crea un guscio del mese 
*/

const appointments = [];
//dentro appointments pushiamo tanti sotto array quanti sono i giorni del mese corrente

const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const scriviMese = function () {
  const title = document.querySelector("h1");
  const indiceMese = now.getMonth(); //10 perchè siamo a novembre
  const nomeMese = monthNames[indiceMese]; //mese
  title.innerText = nomeMese;
};
scriviMese();

//sappiamo in che mese siamo, ma quanti giorni ha questo mese?
//dal momento che febbraio negli anni bisestili ha 29 giorni, per sapere il mio mese devo sapere quantigiorni ha mi serve anche l'anno

const giorniTotali = function () {
  const anno = now.getFullYear(); //2023 anno corrente
  const mese = now.getMonth(); //10 perchè siamo a novembre

  //dal momento che nell'oggetto date il numero dei giorni del mese parte da 1, mi basta sapere quel è l'ultimo giorno del mese in corso per avere il suo numero di giorni
  //per sapere l'ultimo giorno del mese in corso, creo la data del primo giorno del mese successivo al mese in corso

  let ultimoGiorno = new Date(anno, mese + 1, 0); //oggi questa data corrisponde allo 0 novembre 2023, che non esiste, e che quindi è il 30 novembre 2023; novembre ha trenta giorni
  const numeroGiorni = ultimoGiorno.getDate();
  return numeroGiorni; //numeroGiorni è il numero di volte per cui dovrò ripetere la creazione dei div corrispondenti ai singoli giorni
};
giorniTotali();

//quando carico un mese, eventali classi selected precedenti devono esere rimosse, altrimenti mi troverò selezionati i giorni del mese precedente che avevano degli appuntamenti

//selezionio tutti gli elementi con classe selected e rimuovo la classe
const deselezionaCelle = function () {
  const celle = document.querySelectorAll(".day");
  celle.forEach((element) => {
    element.classList.remove("selected");
  });
};
deselezionaCelle();
//quando faccio click su un giorno, nel div id newMeetingDay dovrò leggere la data selezionata

const giornoAppuntamento = function (indiceGiorno) {
  const giorno = document.getElementById("newMeetingDay");
  giorno.classList.add("hasDay");
  giorno.innerText = indiceGiorno + 1;
};
//a questo punto va creata la griglia dei div cntenenti i giorni del mese in corso, questa griglia userà il numero di giorni per gestire l'array globale creato all'inizio e scriverà i vari div

//creare griglia e array

const creaGriglia = function (numeroGiorni) {
  //numeroGiorni è il numero di giorni del mese corrente
  const calendarDiv = document.getElementById("calendar");
  for (let i = 0; i < numeroGiorni; i++) {
    const cellaGiorno = document.createElement("div"); //ad oni giorno associo un div
    cellaGiorno.classList.add("day"); //stilizzo il div come definito in css

    //rendo cliccabili i div dei giorni
    cellaGiorno.addEventListener("click", function (e) {
      deselezionaCelle(); //deseleziono l'eventuale altra cella selezionata
      cellaGiorno.classList.add("selected"); //aggiungo la classe css per mostrare la selezione del giorno cliccato
      giornoAppuntamento(i); //scrivo il giorno cliccato nella sezione Giorno del form
      if (appointments[i].length > 0) {
        mostraAppuntamenti(i);
      } else {
        const divAppuntamenti = document.getElementById("appointments");
        divAppuntamenti.style.display = "none";
      }
    });
    //devo scrivere il numero del giorno nei div
    const valoreCella = document.createElement("h3");
    valoreCella.innerText = i + 1;
    //appendo gli elementi crati
    cellaGiorno.appendChild(valoreCella);
    calendarDiv.appendChild(cellaGiorno);

    //creato il calendario, inserisco nell'array apppintment l'array dei giorni del mese
    appointments.push([]);
  }
};
creaGriglia(giorniTotali());

const mostraAppuntamenti = function (indiceGiorno) {
  //con questa funzione si popola la lista degli appuntamenti con gli appuntamenti del giorno
  const appuntamentiGiorno = appointments[indiceGiorno];
  //1.selezionare la lista contenitore
  const lista = document.querySelector("#appointments ul");
  //2.la tecnica del to do list - svuotare la lista

  lista.innerHTML = " ";
  //3.ciclare gli appuntamenti del giorno e creare un li per ciascuno di essi
  appuntamentiGiorno.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.innerText = element;
    lista.appendChild(newLi);
    //4.la lista è piena ma nascosta
  });
  const divAppuntamenti = document.getElementById("appointments");
  divAppuntamenti.style.display = "block";
};

const meetingForm = document.querySelector("form");
meetingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //1. giorno dell'appuntamento
  const selectedDay = document.getElementById("newMeetingDay").innerText;
  //2.ora dell'evento selezionato

  const meetingTime = document.getElementById("newMeetingTime").value;
  //3.nome dell'appuntamento

  const meetingName = document.getElementById("newMeetingName").value;
  //4.creo la stringa dell'appuntamento
  const stringaAppuntamento = `${meetingTime} - ${meetingName}`;
  //5.scivo l'appuntamento nell'array
  const indiceArray = parseInt(selectedDay) - 1;
  appointments[indiceArray].push(stringaAppuntamento);

  // creo un pallino che evidenzi nel calendario un appuntamento
  const pallino = document.createElement("div");
  pallino.classList.add("pallino");
  //cerco il div del giorno selezionato
  const divSelezionato = document.querySelector(".selected");
  if (!divSelezionato.querySelector(".pallino")) {
    divSelezionato.appendChild(pallino);
  }
  mostraAppuntamenti(indiceArray);
});
