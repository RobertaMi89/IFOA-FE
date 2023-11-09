/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  document.querySelector("h1").innerText =
    "Questo è il titolo alternativo della pagina";
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

const generateTable = function () {
  const container = document.getElementById("tableArea");
  const table = document.createElement("table");
  table.style.width = "100%";

  const headers = ["Immagine", "Prodotto", "Quantità", "Prezzo"];
  const headerRow = document.createElement("tr");

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.innerText = headerText;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  const images = [
    "https://m.media-amazon.com/images/I/81yJf4K+L1L._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/61MRTh9xotL._AC_SX679_.jpg",
    "https://www.tradeinn.com/f/13805/138054505/samsung-smartphone-galaxy-s21-5g-8gb-128gb-6.2.jpg",
    "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1661333885.70133010!500x500.png",
    "https://tomatosmartphone.it/wp-content/uploads/2022/06/EU-IN_Green.png",
  ];

  images.forEach((imageUrl) => {
    const newRow = document.createElement("tr");

    const tdImage = document.createElement("td");
    tdImage.innerHTML = `<img src="${imageUrl}" alt="smartphone" height="200" />`;

    const tdProduct = document.createElement("td");
    tdProduct.innerText = "Smartphone";

    const tdQuantity = document.createElement("td");
    tdQuantity.innerText = Math.floor(Math.random() * 50);

    const tdPrice = document.createElement("td");
    tdPrice.innerText = `${Math.floor(Math.random() * 500)}€`;

    [tdImage, tdProduct, tdQuantity, tdPrice].forEach((td) => {
      newRow.appendChild(td);
    });

    table.appendChild(newRow);
  });

  container.appendChild(table);
};

generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function (imgUrl, productName, quantity, price) {
  const table = document.querySelector("table");

  const newRow = document.createElement("tr");

  const tdImage = document.createElement("td");
  tdImage.innerHTML = `<img src=${imgUrl} alt="smartphone" height="200" />`;
  const tdProduct = document.createElement("td");
  tdProduct.innerText = productName;
  const tdQuantity = document.createElement("td");
  tdQuantity.innerText = quantity;
  const tdPrice = document.createElement("td");
  tdPrice.innerText = price + "€";

  newRow.appendChild(tdImage);
  newRow.appendChild(tdProduct);
  newRow.appendChild(tdQuantity);
  newRow.appendChild(tdPrice);
  table.appendChild(newRow);
};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita (usa button per far sparire le immagini)
     */

// const hideAllImages = function () {
//   const images = document.querySelectorAll("img")
//   images.forEach(image => image.style.display = "none")

// };
// hideAllImages()

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {
  let elementToChange = document.getElementById("changeMyColor");
  elementToChange.onclick = function () {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const randomColor = `rgb(${red},${green},${blue})`;
    elementToChange.style.userSelect = "none";
    elementToChange.style.cursor = "pointer";
    elementToChange.style.color = randomColor;
  };
};

changeColorWithRandom();

/* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */

const deleteVowels = function () {
  // document.querySelectorAll("h1,h2,h3,p,a,li,th,td").forEach((node) => node.innerText = [...node.innerText].filter(char => { char = char.toLowerCase(); return char !== "e" && char !== "a" && char !== "i" && char !== "o" && char !== "u" }).join(""))
  //   }
  // deleteVowels()
};
