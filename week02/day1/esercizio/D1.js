/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/
let ex1=document.write("<h2>ESERCIZIO 1</h2>");
 /*Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

document.write("Stringa = questo valore variabile contiene un dato stringa"+"<br>");
document.write("Numero = questo valore variabile contiene un dato numerico"+ "--->"+15523588+"<br>");
let veroFalso = 3 > 6;
document.write("indica se i valori scritti sono corretti "+" "+ veroFalso+"<br>");
/*Undefined - variabile senza un valore assegnato*/
/*Null - intenzionale valore assente */

let ex2=document.write("<h2>ESERCIZIO 2<h2>");
/* Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let myName="Roberta";
document.write(myName+"<br>");

let ex3=document.write("<h2>ESERCIZIO 3</h2>");
/* Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero1=12;
let numero2=20;
let somma=numero1+numero2;
document.write("la somma dei numeri è "+somma+"<br>")


let ex4=document.write("<h2>ESERCIZIO 4</h2>");
 /*Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let x=12;
document.write("la variabile x ha un valore di "+x);

let ex5=document.write("<h2>ESERCIZIO 5</h2>");
  /*Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/*let myName="Roberta";
  const myName = "Miosi"*/

let ex6=document.write("<h2>ESERCIZIO 6</h2>");
 /*Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let numero3=4;
let sottrazione=x-numero3;
document.write(sottrazione);
/* SCRIVI QUI LA TUA RISPOSTA */

let ex7=document.write("<h2>ESERCIZIO 7</h2>");
 /*Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let nome1="john";
let nome2="John".toLowerCase();
let verifica = nome1===nome2;
document.write("i due valori sono uguali anche se le iniziali non sono le stesse "+verifica);

