class User{
    constructor(_firstName,_lastName,_age,_location){
        this.firstName = _firstName
        this.lastName =_lastName
        this.age=_age
        this.location=_location
    }
    presentation(){
        return "Ciao io sono "+this.firstName+" "+this.lastName+", "+"ho "+this.age+" anni"+" e vengo da "+this.location
    }
} 
const user1= new User ("Mario","Rossi",30,"Roma")
const user2= new User ("Luigi","Verdi",25,"Palermo")
console.log(user1.presentation())
console.log(user2.presentation())

compara =function(user1,user2){
     if (user1.age > user2.age) {
        console.log(user1.firstName+" è più grande di "+user2.firstName)
    }else if(user1.age < user2.age){
        console.log(user2.firstName+" è più grande di "+user1.firstName)
     }else{
        console.log(user1.firstName+" e "+user2.firstName+" hanno la stessa età")
     }
}
compara(user1,user2)

//------------------------------------------------------------------------

class Pet{
    constructor(petName,ownerName,species,breed){
        this.petName=petName
        this.ownerName=ownerName
        this.species=species
        this.breed=breed
    }
    toHTMLList(){ 
        return `<ul class="list-unstyled"><li>Pet name: ${this.petName}</li>
                    <li>Owner name: ${this.ownerName}</li>
                    <li>Species: ${this.species}</li>
                    <li>Breed: ${this.breed}</li>
                </ul>`
    }
}

const cane1= new Pet("Pippo","Peppino","Maltese","Manzo")
const cane2= new Pet ("Pluto","Peppino","Bovaro del Bernese","Pollo")

function sameOwner(pet1,pet2){
    if(pet1.ownerName===pet2.ownerName){
        console.log(true)
    }
}
sameOwner(cane1,cane2);

let pets=[];
function addPet(petName, owner, species, breed){
    const pet = new Pet (petName,owner,species,breed);
    pets.push(pet)
    let li=document.createElement("li");
    li.innerHTML=pet.toHTMLList()
    let petsList = document.querySelector("ul")
    petsList.appendChild(li)
}

pets.push(cane1)
pets.push(cane2)
console.log(pets)

function formSubmit() {
    if (document.formPet.petName.value == "") {
      alert("Submit non effettuato. Inserisci almeno un carattere");
      return false;
    }
    addPet(document.formPet.petName.value,document.formPet.owner.value,document.formPet.species.value,document.formPet.breed.value)
    document.formPet.reset();
    console.log(pets)
    return true;
  }
 
