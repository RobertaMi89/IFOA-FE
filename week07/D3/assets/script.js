const url = "https://striveschool-api.herokuapp.com/books";
if(!localStorage.getItem('shoppingCart'))localStorage.setItem("shoppingCart",JSON.stringify([]));
let items
fetch(url)
    .then(response => response.json())
    .then(data => populateCard(data));

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

function createCard(book) {
    let card = document.createElement("div");
    card.setAttribute('id',book.asin);
    card.classList.add("card","m-3","bg-warning-subtle");
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
    cardLink.classList.add("btn");
    cardLink.classList.add("btn-danger");
    cardLink.href = "#";
    cardLink.innerText = "Scarta";

    let cardLinkCompra = document.createElement("a");
    cardLinkCompra.classList.add("btn");
    cardLinkCompra.classList.add("btn-success");
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

function deleteCard(card) {
    card.remove();
}
function addToCart(card){
    let itemId= card.getAttribute('id')
    let item=items.filter((itm)=>itm.asin==itemId)[0]
    console.log(item)
    console.log(itemId)
    console.log(items)

    let cart=JSON.parse(localStorage.getItem("shoppingCart"))
    cart.push(item)
    localStorage.setItem("shoppingCart",JSON.stringify(cart))
    
}