/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function concatStr(str1, str2) {
  const primi = str1.slice(0, 2);
  const ultimi = str2.slice(-3);
  const result = primi + ultimi;
  const maiusc = result.toUpperCase();
  console.log(maiusc);
}

concatStr("Ciao", "belli");

  /*ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function random(length) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    const valore = Math.floor(Math.random() * 101); 
    randomArray.push(valore); 
  }
  return randomArray;
}
const myArray = random(10);
console.log(myArray);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function filtro(arr) {
  const anyNum = arr.filter((value) => value % 2 === 0);
  return anyNum;
}
const numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const evenNumbers = filtro(numericArray);
console.log(evenNumbers);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function ArrayEl(arr) {
  let sum = 0;

  arr.forEach(function (element) {
    if (typeof element === 'number') {
      sum += element;
    }
  });

  return sum;
}
const num1 = [1, 2, 3, 4, 5]; 
const totalSum = ArrayEl(num1);
console.log(totalSum);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sumArrayElements(arr) {
  const totale = arr.reduce(function (accumulator, valore) {
    if (typeof valore === 'number') {
      return accumulator + valore;
    } else {
      return accumulator;
    }
  }, 0);
  return totale;
}

const num2 = [1, 2, 3, 4, 5]; 
const totale = sumArrayElements(num2);
console.log(totale);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
function incremento(arr, n) {
  const newArray = arr.map(function (value) {
    if (typeof value === 'number') {
      return value + n;
    } else {
      return value;
    }
  });

  return newArray;
}

const num3 = [1, 2, 3, 4, 5]; 
const n = 2; 
const newArray = incremento(num3, n);
console.log(newArray);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
  */
  function str(arr) {
    const arrayLength = arr.map(function (str) {
      return str.length;
    });
  
    return arrayLength;
  }
  
  const stringArray = ["EPICODE", "is", "great"];
  const lengths = str(stringArray);
  console.log(lengths);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function generatore() {
  const numArray = [];
  for (let i = 1; i <= 100; i += 2) {
    numArray.push(i);
  }
  return numArray;
}

const numbers = generatore();
console.log(numbers);


/*ESERCIZIO 9
 Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function filmVecchio(films) {
  if (films.length === 0) {
    return null; 
  }
  let filmPiuVecchio = films[0]; 

  films.forEach(function (film) {
    const annoCorrente = parseInt(film.Year);
    const annoPiuVecchio = parseInt(filmPiuVecchio.Year);

    if (annoCorrente < annoPiuVecchio) {
      filmPiuVecchio = film;
    }
  });
  return filmPiuVecchio;
}
const filmPiuVecchio = filmVecchio(movies);
console.log("Il film più vecchio è:", filmPiuVecchio);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function numeroDiFilm(films) {
  return films.length;
}

const numeroDiFilmNellArray = numeroDiFilm(movies);
console.log("Il numero di film nell'array è:", numeroDiFilmNellArray);

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
function ottieniTitoliDeiFilm(films) {
  const titoliDeiFilm = films.map(function (film) {
    return film.Title;
  });
  return titoliDeiFilm;
}

const titoliDeiFilmArray = ottieniTitoliDeiFilm(movies);
console.log("Array con i titoli dei film:", titoliDeiFilmArray);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
function filmDelMillennioCorrente(films) {
  const millennioCorrente = new Date().getFullYear().toString().slice(0, 3);
  const filmDelMillennio = films.filter(function (film) {
    return parseInt(film.Year) >= parseInt(millennioCorrente + '00');
  });
  return filmDelMillennio;
}

const filmMillennioCorrenteArray = filmDelMillennioCorrente(movies);
console.log("Film usciti nel millennio corrente:", filmMillennioCorrenteArray);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
function sommaAnniDiProduzione(films) {
  const sommaAnni = films.reduce(function (acc, film) {
    return acc + parseInt(film.Year);
  }, 0);
  return sommaAnni;
}

const sommaAnniProduzione = sommaAnniDiProduzione(movies);
console.log("Somma degli anni di produzione dei film:", sommaAnniProduzione);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
function trovaFilmPerIMDbID(films, imdbID) {
  return films.find(function (film) {
    return film.imdbID === imdbID;
  });
}

const imdbIDDaCercare = 'tt0167260'; 
const filmTrovato = trovaFilmPerIMDbID(movies, imdbIDDaCercare);

if (filmTrovato) {
  console.log("Film trovato:", filmTrovato);
} else {
  console.log("Nessun film trovato con l'IMDb ID:", imdbIDDaCercare);
}

/* ESERCIZIO 14b: ricerca su selezione*/

// Popolamento della combo con i titoli dei film e gli imdbID come value

// Al caricamento della finestra assegno al div che conterrà il dettaglio film la classe hidden, definita in css, per non farlo apparire
window.addEventListener('load', function() {
	document.getElementById('film').className = 'hidden';
});

movies.forEach((film) => {
	document.getElementById('imdbID').innerHTML += `<option value="${film.imdbID}">${film.Title} - Anno ${film.Year}</option>`;
});

function cerca() {
	let imdbID = document.getElementById('imdbID').value; // recupero dell'imdbID scelto
	mioFilm = movies.find((element) => element.imdbID === imdbID); // ricerca enll'array del film con l'imdbID scelto

	// Quando si carica il film sostituisco la class hidden con la classe visibile (sistema alternativo rispetto a riga 339)
	document.getElementById('film').className = 'visible';
	// document.getElementById('film').style.display = 'block'; // comparsa del div che contiene i dettagli dei film (nel CSS è display: none;)
	// scrittura nell'html
	document.getElementById('titolo').innerHTML = mioFilm.Title;
	document.getElementById('anno').innerHTML = mioFilm.Year;
	document.getElementById('poster').setAttribute('src', mioFilm.Poster); // settaggio dell'attributo src del tag img con l'immagine trovata nella base dati
}

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
function trovaIndicePrimoFilmPerAnno(films, annoCercato) {
  const indice = films.findIndex(function (film) {
    return film.Year === annoCercato;
  });

  return indice;
}

const annoDaCercare = '2003'; 
const indicePrimoFilm = trovaIndicePrimoFilmPerAnno(movies, annoDaCercare);

if (indicePrimoFilm !== -1) {
  console.log("Indice del primo film uscito nell'anno", annoDaCercare + ":", indicePrimoFilm);
} else {
  console.log("Nessun film trovato nell'anno", annoDaCercare);
}