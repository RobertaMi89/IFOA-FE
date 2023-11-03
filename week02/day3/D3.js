const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/
const characters =[];

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "characters" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
for (let i = 0; i < starWarsCharacters.length; i++){
  const nameCharacter= starWarsCharacters[i];
  characters.push(nameCharacter.name);
}

console.log(characters);
/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/
  const femaleCharacters=[];
  for (let i = 0; i < starWarsCharacters.length; i++){
    const nameCharacter= starWarsCharacters[i];

    if (nameCharacter.gender === "female") {
      femaleCharacters.push(nameCharacter);
    }
  }

  console.log(femaleCharacters);
/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/
const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  "blue-gray": []
};

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  const eyeColorCharacter = starWarsCharacters[i];

  switch (eyeColorCharacter.eye_color) {
    case "blue":
      eyeColor.blue.push(eyeColorCharacter);
      break;
    case "yellow":
      eyeColor.yellow.push(eyeColorCharacter);
      break;
    case "brown":
      eyeColor.brown.push(eyeColorCharacter);
      break;
    case "red":
      eyeColor.red.push(eyeColorCharacter);
      break;
    case "blue-gray":
      eyeColor["blue-gray"].push(eyeColorCharacter);
      break;
    default:
      console.log("colore occhi non riconosciuto");
  }
}
console.log(eyeColor);

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

let i = 0;
let crewMass = 0;

while (i < starWarsCharacters.length) {
  const currentCharacter = starWarsCharacters[i];
  crewMass = crewMass + currentCharacter.mass;
  i++;
}

console.log(crewMass);

/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
if (crewMass <= 500) {
  console.log("Ship is under loaded");
} else if (crewMass > 500 && crewMass <= 700) {
  console.log("Ship is half loaded");
} else if (crewMass > 700 && crewMass <= 900) {
  console.log("Warning: Load is over 700");
} else if (crewMass > 900 && crewMass <= 1000) {
  console.log("Critical Load: Over 900");
} else if (crewMass > 1000) {
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
} else {
  console.log("Crew mass value not recognized");
}
/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  const binaryCharacter = starWarsCharacters[i];

  if (binaryCharacter.gender === "n/a") {
    binaryCharacter.gender = "robot";
  }
}
console.log(starWarsCharacters);
/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/
console.log("ALL CHARACTERS", characters.length);

for (let i = 0; i < characters.length; i++) {
  const deleteCharacter = characters[i];

  for (let j = 0; j < femaleCharacters.length; j++) {
    const deleteFemaleCharacter = femaleCharacters[j];

    if (deleteFemaleCharacter.name === deleteCharacter) {
      characters.splice(i, 1);
    }
  }
}/*matrice bidimensionale for dentro un for*/ 
console.log("CHARACTERS WITHOUT FEMALE", characters.length);


/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
//     mass: 77,
//     hair_color: "auburn, white",
//     skin_color: "fair",
//     eye_color: "blue-gray",
//     birth_year: "57BBY",
//     gender: "male"

/*prima soluzione*/
let randomIndex = Math.floor(Math.random() * starWarsCharacters.length);
let selectedCharacter= starWarsCharacters[randomIndex];
console.log ("Questo personaggio si chiama "+selectedCharacter.name+" ha un'altezza di "+selectedCharacter.height+" cm, ha una massa di "+selectedCharacter.mass+". Ha i capelli "+selectedCharacter.hair_color+", il colore della pelle è "+selectedCharacter.skin_color+". Il colore dei suoi occhi è "+selectedCharacter.eye_color+" il suo anno di nascita è "+selectedCharacter.birth_year+" e il suo genere è "+selectedCharacter.gender);

/*seconda soluzione*/

let description= "The character name is "+selectedCharacter.name;
if(selectedCharacter.height) description+=" she/he has an height of "+selectedCharacter.height;
if(selectedCharacter.mass) description+=" she/he has a mass of "+selectedCharacter.mass;
if(selectedCharacter.hair_color!="n/a") description+=", she/he has "+selectedCharacter.hair_color+" hair color";
if(selectedCharacter.skin_color) description+=" and she/he has "+selectedCharacter.skin_color+" skin color.";
if(selectedCharacter.eye_color)description+=" She/he has "+selectedCharacter.eye_color+" eye color."
if(selectedCharacter.birth_year!="unknown")description+=" His/her birt year is "+selectedCharacter.birth_year;
if(selectedCharacter.gender)description+=" he/she is a "+selectedCharacter.gender;

console.log(description);