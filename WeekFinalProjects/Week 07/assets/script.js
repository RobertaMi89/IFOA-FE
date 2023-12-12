const searchApiUrl = "https://striveschool-api.herokuapp.com/api/product/";

// document.addEventListener("DOMContentLoaded", function () {
//     let loadImagesBtn = document.getElementById("loadImagesBtn");
//     let loadSecondImagesBtn = document.getElementById("loadSecondImagesBtn");
//     let searchBtn = document.getElementById("searchBtn");
  
//     loadImagesBtn.addEventListener("click", function () {
//       filteredGetList("query","sunset");
//     });
//     loadSecondImagesBtn.addEventListener("click", function () {
//       filteredGetList("query","dogs");
//     });
//     searchBtn.addEventListener("click",function(){
//       filteredGetList("query",document.getElementById("searchText").value)
//     })
//   });

// function filteredGetList(paramKey,paramValue){
//     let params = new URLSearchParams([[paramKey,paramValue]]).toString();

//     return getList(params)
// }

function getList(queryParams) {
    let url = queryParams ? `${searchApiUrl}?${queryParams}` : searchApiUrl;
    fetch(url, {
        method: "GET",
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4Mjk5OWMwNTgzNTAwMTg1MjJkMGQiLCJpYXQiOjE3MDIzNzM3ODUsImV4cCI6MTcwMzU4MzM4NX0.lagYhe-XGk23aIEHYFxlxeexsEQuOHwjWxWKLQKQ2UY",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        const images = data;

        const imagesContainer = document.getElementById("imagesContainer");

        imagesContainer.innerHTML = "";

        images.forEach((image) => {
          
            const card = document.createElement("div");
            card.className = "col-md-4";
            card.classList.add("card", "mb-4", "shadow-sm");

            const imageElement = document.createElement("img");
            imageElement.src = `assets/${image.imageUrl}`;  
          
            imageElement.className = "card-img-top"; 
            card.appendChild(imageElement);

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const titleElement = document.createElement("h5");
            titleElement.className = "card-title";
           
            const textElement = document.createElement("p");
            textElement.className = "card-text";
          
            cardBody.appendChild(titleElement);
            cardBody.appendChild(textElement);

            card.appendChild(cardBody);

            imagesContainer.appendChild(card);
        });
    })
    .catch((error) => console.error("Error fetching images:", error));
}

//   function hideCard(card) {
//     card.style.display = "none";
//   }
  