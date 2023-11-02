/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let ex1=document.write("<h2>ESERCIZIO 1</h2>");

    let num1=5;
    let num2=10;
    if(num1>num2){
    }else{
      document.write(num2+" è il numero maggiore dei due")
    }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let ex2=document.write("<h2>ESERCIZIO 2</h2>");
    let num3=2;

    if(num1===num3){

    }else{
      document.write("not equal<br>");
    }


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let ex3=document.write("<h2>ESERCIZIO 3</h2>");
    let numero = 10;

    let risultato = (numero % 5);

    if (risultato > 0) document.write('Non è divisibile per 5');

    else document.write('Il numero è divisibile per 5!');



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
    let ex4=document.write("<h2>ESERCIZIO 4</h2>");
    let num4=9;
    let num5=1;
    let sottr=(num4-num5);
    if(sottr==8){
      document.write("E uguale a 8")
    }else{
      document.write(" Non è uguale a 8")
    }

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let ex5=document.write("<h2>ESERCIZIO 5</h2>");

    let totalShoppingCart=51;
    if (totalShoppingCart>=50){
      document.write("Complimenti! Hai diritto alla spedizione gratuita");
    }else{
      document.write(totalShoppingCart+10+" Totale carrello")
    }
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let ex6=document.write("<h2>ESERCIZIO 6</h2>");
    let prod=14;
    
    let promo=(prod-(prod*20/100)+"<br>");
    document.write("il prodotto è scontanto del 20%= "+promo);
    if (totalShoppingCart>=50){
      document.write("Complimenti! Hai diritto alla spedizione gratuita");
    }else{
      document.write(totalShoppingCart+10+" Totale carrello")
    }
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let ex7=document.write("<h2>ESERCIZIO 7</h2>");

    let num6=2;
    let num7=6;
    let num8=3;
    
    // if(num6>=num7){
    //   if(num8>=num6){
    //     document.getElementById("primo").innerHTML=num8;
    //     document.getElementById("primo").innerHTML=num6;
    //     document.getElementById("primo").innerHTML=num7;
    //     document.write(num8,num6,num7);
    //   }else{
    //     if(num8>=num7){
    //     document.getElementById("primo").innerHTML=num6;
    //     document.getElementById("primo").innerHTML=num8;
    //     document.getElementById("primo").innerHTML=num7;
    //     document.write(num6,num8,num7);
    //     }else{
    //     document.getElementById("primo").innerHTML=num6;
    //     document.getElementById("primo").innerHTML=num7;
    //     document.getElementById("primo").innerHTML=num8;
    //     document.write(num6,num7,num8);
    //     }
    //   }
    // }
// let arryOrd=[];
// arrayOrd[0]=num6;
// arrayOrd[1]=num7;
// arrayOrd[2]=num8;

// arrayOrd.sort();
// document.getElementById("primo").innerHTML=arrayOrd[2];
// document.getElementById("secondo").innerHTML=arrayOrd[1];
// document.getElementById("terzo").innerHTML=arrayOrd[0];



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let ex8=document.write("<h2>ESERCIZIO 8</h2>");

    let thing=typeof "cosa";
    document.write(typeof thing);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let ex9=document.write("<h2>ESERCIZIO 9</h2>");

    let num9=2;
    let num10=5;

    if ((num10%2) == 0){
    document.write("Numero pari");
      }else{
    document.write("Numero dispari");
      }
   

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let ex10=document.write("<h2>ESERCIZIO 10</h2>");

    let val = 7;
    if (val < 5) {
      document.write("Meno di 5");
    } else if (val < 10) {
      document.write("Meno di 10 ma maggiore o uguale a 5");
    } else {
      document.write("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

// const me = {
//   name: 'John',
//   lastName: 'Doe',
//   skills: ['javascript', 'html', 'css'],
// }

/* SCRIVI QUI LA TUA RISPOSTA */
    let ex11=document.write("<h2>ESERCIZIO 11</h2>");

    const persona = {
    nome: 'John',
    cognome: 'Doe',
    skills: ['javascript', 'html', 'css'],
    persona:true
    };
    document.getElementById('nome').innerHTML = persona.nome;
    document.getElementById('cognome').innerHTML = persona.cognome;
    document.getElementById('skills').innerHTML = persona.skills;

    document.write(persona.nome+" ",persona.cognome+" ",persona.skills);
    document.write(persona.city="Toronto");
    document.getElementById('city').innerHTML += persona.city;

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let ex12=document.write("<h2>ESERCIZIO 12</h2>");

    document.write(persona.nome+" ",persona.cognome+" ",persona.skills+" "+persona.city);
    
    delete persona.cognome;
    document.getElementById('eliminata').innerHTML += persona.cognome;