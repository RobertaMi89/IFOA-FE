/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

document.write("<h2>ESERCIZIO 1</h2>");
 /*Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

document.getElementById("stringa").innerHTML=("Stringa = questo valore variabile contiene un dato stringa");
document.getElementById("numero").innerHTML=("Numero = questo valore variabile contiene un dato numerico"+ "--->"+15523588);
let veroFalso = 3 > 6;
document.write("indica se i valori scritti sono corretti "+" "+ veroFalso+"<br>");
/*Undefined - variabile senza un valore assegnato*/
/*Null - intenzionale valore assente */

document.write("<h2>ESERCIZIO 2<h2>");
/* Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let myName="Roberta";
document.write(myName+"<br>");

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero1=12;
let numero2=20;
let somma=numero1+numero2;
document.write("la somma dei numeri è "+somma+"<br>")


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let x=12;
document.write("la variabile x ha un valore di "+x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/*const myName="Roberta";
  const myName = "Miosi"*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let numero3=4;
let sottrazione=x-numero3;
console.log(sottrazione);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let nome1="john";
let nome2="John";
nome2= nome2.toLowerCase()
let verifica = nome1==nome2;
console.log(verifica);
/* SCRIVI QUI LA TUA RISPOSTA */
