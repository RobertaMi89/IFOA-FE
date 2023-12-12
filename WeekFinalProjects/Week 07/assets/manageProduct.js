const url = "https://striveschool-api.herokuapp.com/api/product/";

const urlParams = new URLSearchParams(window.location.search);
let action = urlParams.get("action") || "create";
const prodId = urlParams.get("prodId");

document.addEventListener("DOMContentLoaded", function () {
  if (action === "update" && prodId) {
    loadFormFromStorageObject(prodId);
  } else {
    action = "create";
  }

  toggleAction(action);

  document.getElementById("saveBtn").addEventListener("click", function () {
    if (validate()) {
      action === "create" ? save() : update();
    }
  });
});

function validate() {
  let formElements = document.forms.formProduct.elements;

  let noError = true;

  if (!formElements.name.value.length) {
    noError = false;
    alert("Inserisci un nome valido");
  }

  if (!formElements.brand.value.length) {
    noError = false;
    alert("Inserisci un modello valido");
  }
  let priceWithoutEur = formElements.price.value.replace("€", "");
  if (isNaN(priceWithoutEur) || !formElements.price.value) {
    noError = false;
    alert("Il prezzo non è un numero valido");
  }

  if (!formElements.imageUrl.value.length) {
    noError = false;
    alert("Inserisci un url immagine valido");
  }

  if (!formElements.description.value.length) {
    noError = false;
    alert("Inserisci una descrizione valida");
  }

  return noError;
}

async function save() {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4Mjk5OWMwNTgzNTAwMTg1MjJkMGQiLCJpYXQiOjE3MDIzNzM3ODUsImV4cCI6MTcwMzU4MzM4NX0.lagYhe-XGk23aIEHYFxlxeexsEQuOHwjWxWKLQKQ2UY",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildProductFromForm()),
  });

  if (response.status == 200) alert("Prodotto aggiunto");
  else alert("Errore durante l'aggiunta del prodotto");
}

async function update() {
  let response = await fetch(`${url}/${prodId}`, {
    method: "PUT",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4Mjk5OWMwNTgzNTAwMTg1MjJkMGQiLCJpYXQiOjE3MDIzNzM3ODUsImV4cCI6MTcwMzU4MzM4NX0.lagYhe-XGk23aIEHYFxlxeexsEQuOHwjWxWKLQKQ2UY",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildProductFromForm()),
  });

  if (response.status == 200) alert("Prodotto aggiornato");
  else alert("Errore durante l'aggiornamento del prodotto");
}

function buildProductFromForm() {
  let formElements = document.forms.formProduct.elements;

  return {
    name: formElements.name.value,
    description: formElements.description.value,
    brand: formElements.brand.value,
    imageUrl: formElements.imageUrl.value,
    price: formElements.price.value,
  };
}

function toggleAction(action) {
  let addProductLabel = document.getElementById("addProductLabel");
  let editProductLabel = document.getElementById("editProductLabel");

  if (action == "create") {
    if (addProductLabel.hasAttribute("hidden"))
      addProductLabel.removeAttribute("hidden");
    if (!editProductLabel.hasAttribute("hidden"))
      editProductLabel.setAttribute("hidden");
  } else {
    if (!addProductLabel.hasAttribute("hidden"))
      addProductLabel.setAttribute("hidden");
    if (editProductLabel.hasAttribute("hidden"))
      editProductLabel.removeAttribute("hidden");
  }
}

function loadFormFromStorageObject(prodId) {
  let product = JSON.parse(sessionStorage.getItem(prodId));
  let formElements = document.forms.formProduct.elements;
  formElements.name.value = product.name;
  formElements.description.value = product.description;
  formElements.brand.value = product.brand;
  formElements.imageUrl.value = product.imageUrl;
  formElements.price.value = product.price;
}
