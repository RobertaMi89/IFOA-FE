/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let calcolo
function area(l1,l2){
    calcolo = l1*l2;
    return calcolo;
}
console.log(area(2,7));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(s1,s2){
    somma=s1+s2;
    if(s1===s2){
        return somma*3;
    }
    return somma;
}
console.log(crazySum(5,5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19. /*cerca come rendere un valore  assouto differenza*/


/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(n1){
    diff= Math.abs(n1-19);
    if(n1>19){
    return diff*3;
}else{
    return diff;
}
}
console.log(crazyDiff(21));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n){
   return (n>=20 && n<=100)||n===400;
}
console.log(boundary(20));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str){
    if(str.indexOf("EPICODE")!==0){
        return "EPICODE"+str;
    }else{
        return str;
    }
}
console.log("hvuhvwor")

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n){
    if(n>0&&(n%3===0||n %7===0)){
        return true;
    }else{
        return false;
    }
}
console.log(check3and7(4));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE") /*substring*/ /*cercarsi due metodi degli array*/


/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString (n){
    const reverseString = n.split("").reverse().join("");
    return reverseString;
}
const risultato = reverseString("EPICODE");
console.log (risultato);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str1){
    const parola=str1.split("");
    const capitalized=parola.map(parola=>{
        if (parola.length >0){
            return parola.charAt(0).toUpperCase()+parola.slice(1);
        }else{
            return parola;
        }
    })
    const risultato = capitalized.join("");
    return risultato;
    
}
const result=upperFirst("ciao a tutti");
console.log (result);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale. qua usiamo trim
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 function cutString(str){
    return str.trim().slice(1,-1);
 }
const risultato1=cutString("ciao a tutti");
console.log(risultato1);

/* ESERCIZIO 10

 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.*/
 function giveMeRandom(n) {
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * 11); 
        randomNumbers.push(randomNumber); 
    }
    return randomNumbers;
}
const result1 = giveMeRandom(5); 
console.log(result1);