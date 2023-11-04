// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  const randomNumbers = [];
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}
const randomArray = giveMeRandom(5);
console.log(randomArray);

function checkArray(random) {
  let somma = 0;

  for (let i = 0; i < random.length; i++) {
    if (random[i] > 5) {
      console.log("il valore " + random[i] + " è maggiore di 5");
      somma += random[i];
    } else {
      console.log("il valore " + random[i] + " NON è maggiore di 5");
    }
  }
  return somma;
}

// Esegui la funzione e stampa il risultato
const risultato = checkArray(randomArray);
console.log(risultato);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = [
  {
    price: 40,
    name: "Vans",
    id: 1256,
    quantity: 2,
  },
  {
    price: 80,
    name: "M.Kors",
    id: 4855,
    quantity:5,
  },
  {
    price: 20,
    name: "C.Klein",
    id: 55236,
    quantity:3,
  },
];

function shoppingCartTotal() {
  let totale = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    let item = shoppingCart[i].price * shoppingCart[i].quantity;
    totale += item;
  }
  return totale;
}
console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let newItem ={
    price: 15,
	name: "jeans",
	id: 9635,
	quantity: 24,
};

function addToShoppingCart(item){
    shoppingCart.push(item);
    console.log(shoppingCart.length);
}
addToShoppingCart(newItem);
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(){
    let prices=[];
    for(let i=0;i<shoppingCart.length;i++){
        prices.push(shoppingCart[i].price);
    }
    let max=prices[0];
    for(let i=0;i<prices.length;i++){
        if(prices[i]>max){
            max=prices[i];
        }
    }
    return max;
}
    console.log(maxShoppingCart());

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
