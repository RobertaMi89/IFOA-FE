const url = "https://striveschool-api.herokuapp.com/books";
if(!localStorage.getItem('shoppingCart'))localStorage.setItem("shoppingCart",JSON.stringify([]));
let items
fetch(url)
    .then(response => response.json())
    .then(data => populateCard(data));

//POPOLARE LE CARDS NEL CATALOGO
function populateCard(data) {
    items = data
    data.forEach((book) => {
        let card = createCard(book);
        document.querySelector("#root").appendChild(card);

        let deleteButton = card.querySelector(".btn-danger");
        deleteButton.addEventListener("click", () => deleteCard(card));

        let shopButton =card.querySelector(".btn-success");
        shopButton.addEventListener("click",()=> addToCart(card));
            
        
    });
}
//CARDS
function createCard(book) {
    let card = document.createElement("div");
    card.setAttribute('id',book.asin);
    card.classList.add("card","m-3");
    card.style.width = "18rem";
    card.style.display = "inline-block";

    let img = document.createElement("img");
    img.src = book.img;
    img.classList.add("card-img-top");
    img.style.alignItems="center"
    img.style.width="16rem";
    img.style.height="22rem";
    img.alt = "copertina libro...";

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = book.title;

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = book.category;

    let cardPrice = document.createElement("p");
    cardPrice.classList.add("card-price");
    cardPrice.innerText = book.price;

    let cardLink = document.createElement("a");
    cardLink.classList.add("btn","btn-danger","ms-2");
    cardLink.href = "#";
    cardLink.innerText = "Scarta";

    let cardLinkCompra = document.createElement("a");
    cardLinkCompra.classList.add("btn","btn-success","ms-2");
    cardLinkCompra.href = "#";
    cardLinkCompra.innerText = "Compra ora";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(cardLink);
    cardBody.appendChild(cardLinkCompra);

    card.appendChild(img);
    card.appendChild(cardBody);

    return card;
}
//BOTTONE SCARTA
function deleteCard(card) {
    card.remove();
}
//BOTTONE COMPRA ORA
function addToCart(card) {
    let itemId = card.getAttribute('id');
    let item = items.find((itm) => itm.asin === itemId);

    if (item) {
        let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

        let existingItem = cart.find((cartItem) => cartItem.asin === itemId);

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
//IMMAGINE NEL CARRELLO
function createImageElement(book) {
    let img = document.createElement("img");
    img.src = book.img;
    img.alt = book.title;
    img.classList.add("card-img-top");
    img.style.width = "5rem"; 
    img.style.height = "auto"; 
    return img;
}
//CARRELLO
function updateCartView(cart) {
    let cartItemsList = document.getElementById("cartItemsList");
    cartItemsList.innerHTML = "";

    if (cart.length > 0) {
        cart.forEach((item) => {
            let listItem = document.createElement("li");
            listItem.classList.add("list-group-item");

            let img = createImageElement(item);
            listItem.appendChild(img);

            let totalAmount = (item.price * item.quantity).toFixed(2);

            let text = document.createElement("p");
            text.innerHTML = `<strong>${item.title}</strong> - Prezzo: ${item.price}`;
            listItem.appendChild(text);

            //QUANTITA'
            let qt=document.createElement("p")
            qt.innerHTML = `Qt: ${item.quantity} - Totale: ${totalAmount}`;
            listItem.appendChild(qt);

            let increaseButton = document.createElement("button");
            increaseButton.classList.add("btn", "btn-primary", "ms-2");
            increaseButton.innerHTML = "+";
            increaseButton.addEventListener("click", () => increaseQuantity(item.asin));
            listItem.appendChild(increaseButton);

            //BOTTONE QT
            let decreaseButton = document.createElement("button");
            decreaseButton.classList.add("btn", "btn-primary", "ms-2");
            decreaseButton.innerHTML = "-";
            decreaseButton.addEventListener("click", () => decreaseQuantity(item.asin));
            listItem.appendChild(decreaseButton);

            //BOTTONE RIMUOVI
            let removeButton = document.createElement("button");
            removeButton.classList.add("btn", "btn-danger", "ms-2");
            removeButton.innerHTML = "Rimuovi";
            removeButton.addEventListener("click", () => removeCartItem(item.asin));
            listItem.appendChild(removeButton);

            cartItemsList.appendChild(listItem);
        });
    } else {
        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerHTML = "Il tuo carrello è vuoto";
        cartItemsList.appendChild(listItem);
    }
}

function increaseQuantity(asin) {
    updateQuantity(asin, 1);
}

function decreaseQuantity(asin) {
    updateQuantity(asin, -1);
}
function updateQuantity(asin, amount) {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    let updatedCart = cart.map((item) => {
        if (item.asin === asin) {
            
            item.quantity = Math.max(0, item.quantity + amount);
        }
        return item;
    });

    updatedCart = updatedCart.filter((item) => item.quantity > 0);

    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
    updateCartView(updatedCart);
}

document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    updateCartView(cart);
});
//UN CLICK PER RIMUOVERE INTERO ARTICOLO
function removeCartItem(asin) {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
  
    let updatedCart = cart.filter((item) => item.asin !== asin);

    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
    updateCartView(updatedCart);
}
