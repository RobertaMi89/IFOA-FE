const url = "https://striveschool-api.herokuapp.com/api/product/";

async function init() {
  document.addEventListener("DOMContentLoaded", async function () {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4Mjk5OWMwNTgzNTAwMTg1MjJkMGQiLCJpYXQiOjE3MDIzNzM3ODUsImV4cCI6MTcwMzU4MzM4NX0.lagYhe-XGk23aIEHYFxlxeexsEQuOHwjWxWKLQKQ2UY",
      },
    });

    populateCard(await response.json());
  });
}
let items;

//POPOLARE LE CARDS NEL CATALOGO
function populateCard(data) {
  items = data;
  data.forEach((cell) => {
    let card = createCard(cell);
    document.querySelector("#root").appendChild(card);

    let modificaButton = card.querySelector(".btn-warning");
    modificaButton.addEventListener(
      "click",
      () => (window.location.href = "form.html?action=update")
    );

    let scopriButton = card.querySelector(".btn-info");
    scopriButton.addEventListener("click", () => scopri(card));
  });
}
//CARDS
function createCard(cell) {
  let card = document.createElement("div");
  card.setAttribute("id", cell);
  card.classList.add("card", "m-3");
  card.style.width = "18rem";
  card.style.display = "inline-block";

  let img = document.createElement("img");
  img.src = cell.imageUrl;
  img.classList.add("card-img-top");
  img.style.alignItems = "center";
  img.style.width = "16rem";
  img.style.height = "auto";
  img.alt = "cellulare...";

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardName = document.createElement("h5");
  cardName.classList.add("card-name");
  cardName.innerHTML = cell.name;

  let cardDescription = document.createElement("p");
  cardDescription.classList.add("card-description");
  cardDescription.innerText = cell.description;

  let cardBrand = document.createElement("p");
  cardBrand.classList.add("card-description");
  cardBrand.innerText = cell.brand;

  let cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.innerText = cell.price;

  let cardImgUrl = document.createElement("p");
  cardImgUrl.classList.add("card-description");
  cardImgUrl.innerHTML = cell.imageUrl;

  let cardModifica = document.createElement("a");
  cardModifica.classList.add("btn", "btn-warning", "ms-2");
  cardModifica.href = "#";
  cardModifica.innerText = "Modifica";

  let cardScopri = document.createElement("a");
  cardScopri.classList.add("btn", "btn-info", "ms-2");
  cardScopri.href = "#";
  cardScopri.innerText = "Scopri di più";

  cardBody.appendChild(cardName);
  cardBody.appendChild(cardDescription);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(cardModifica);
  cardBody.appendChild(cardScopri);

  card.appendChild(img);
  card.appendChild(cardBody);

  return card;
}

//BOTTONE SCOPRI DI PIU'
function scopri(card) {
  let itemId = card.getAttribute("id");
  let item = items.find((itm) => itm.id === itemId);

  if (item) {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    let existingItem = cart.find((cartItem) => cartItem.id === itemId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      cart.push(item);
    }
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    updateCartView(cart);
  } else {
    console.error("Prodotto non trovato");
  }
}

init();
