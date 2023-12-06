// primo esercizio

function formSubmit() {
    let name = document.getElementById("userName").value;
    if (name.trim() !== "") {
        localStorage.setItem("nomeUtente", name);
        ShowMeValue();
    }
  }

function resetSubmit() {
    localStorage.removeItem("nomeUtente");
    ShowMeValue();
}

function ShowMeValue() {
    let valoreSalvato = localStorage.getItem("nomeUtente");
    let elementoVisualizzato = document.getElementById("savedValue");

    if (valoreSalvato) {
        elementoVisualizzato.textContent = "Valore salvato: " + valoreSalvato;
    } else {
        elementoVisualizzato.textContent = "";
    }
}
ShowMeValue();

//---------------------------------------------------------------

 // secondo esercizio 

 function avviaContatore() {
   
    let countValue = sessionStorage.getItem("contatore");

    if (!countValue) {
        countValue = 0;
    }

    setInterval(function () {
        countValue++;
        sessionStorage.setItem("contatore", countValue);
        aggiornaContatore();
    }, 1000);

    aggiornaContatore();
}

function aggiornaContatore() {
    let contatoreElemento = document.getElementById("counter");
    let valoreContatore = sessionStorage.getItem("contatore");
    contatoreElemento.textContent = "Tempo trascorso: " + valoreContatore + " secondi";
}

avviaContatore();