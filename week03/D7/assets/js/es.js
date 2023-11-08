/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  const title = document.querySelector("h1");

  title.innerText = "Questo è il titolo alternativo della pagina";
};
changeTitle();

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function () {
  const title = document.querySelector("h1");

  title.classList.remove("myClass");
  title.classList.add("myHeading");
};

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function () {
  const paragr = document.querySelectorAll("div p");
  for (let i = 0; i < paragr.length; i++) {
    const pEl = paragr[i];
    paragr[i].innerText = "ciao a tutti!";
  }
};
changePcontent();

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
  const links = document.querySelectorAll("a:not(footer a)");
  for (let i = 0; i < links.length; i++) {
    links[i].href = "https://www.google.com";
  }
};
changeUrls();

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function (newEl) {
  const ul = document.getElementById("secondList");
  const li = document.createElement("li");

  ul.innerHTML += `<li>${newEl}</li>`;
};
addToTheSecond("4rt");

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function (newEl) {
  const div = document.querySelectorAll("div")[0];
  let par = document.createElement("p");

  par.innerText = newEl;
  div.innerHTML += `<p>${newEl}</p>`;
};
addParagraph("ciao");

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  const ul = document.getElementById("firstList");
  ul.remove();
};
hideFirstUl();

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  document.getElementById("secondList").style.backgroundColor = "green";
};
paintItGreen();

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  const title = document.querySelector("h1");
  title.addEventListener("click", function () {
    const text = title.textContent;
    title.textContent = text.slice(0, -1);
  });
};
makeItClickable();

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
  const footer = document.querySelector("footer");
  footer.addEventListener("click", function () {
    const link = document.querySelector("footer a");
    const URL = link.getAttribute("href");

    alert(URL);
  });
};
revealFooterLink();

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo (5 righe e 4 colonne)
     */

const generateTable = function () {};

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita (usa button per far sparire le immagini)
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {};

/* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */

const deleteVowels = function () {};
