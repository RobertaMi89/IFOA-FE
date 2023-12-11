const searchApiUrl = "https://api.pexels.com/v1/search";

document.addEventListener("DOMContentLoaded", function () {
  let loadImagesBtn = document.getElementById("loadImagesBtn");
  let loadSecondImagesBtn = document.getElementById("loadSecondImagesBtn");
  let searchBtn = document.getElementById("searchBtn");

  loadImagesBtn.addEventListener("click", function () {
    filteredGetList("query","sunset");
  });
  loadSecondImagesBtn.addEventListener("click", function () {
    filteredGetList("query","dogs");
  });
  searchBtn.addEventListener("click",function(){
    filteredGetList("query",document.getElementById("searchText").value)
  })
});
function filteredGetList(paramKey,paramValue){
    let params = new URLSearchParams([[paramKey,paramValue]]).toString();

    return getList(params)
}
function getList(queryParams) {
  let url = queryParams ? `${searchApiUrl}?${queryParams}` : searchApiUrl;
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: "QOUEtUDiH81SpmqSJgGvIGALEF6yFs7fDYVpaATLmtRjDxFaw58BD0Va",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const images = data.photos;

      const imagesContainer = document.getElementById("imagesContainer");

      imagesContainer.innerHTML = "";

      images.forEach((image) => {
 
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.classList.add("card", "mb-4", "shadow-sm");

        const imageElement = document.createElement("img");
        imageElement.src = image.src.large;
        imageElement.alt = image.photographer;
        imageElement.className = "bd-placeholder-img card-img-top";
        imageElement.width = "100%";
        imageElement.height = "225";

        card.appendChild(imageElement);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

      
        const titleElement = document.createElement("h5");
        titleElement.className = "card-title";
        titleElement.textContent = image.photographer;

        const textElement = document.createElement("p");
        textElement.className = "card-text";
        textElement.textContent = image.photographer_url;

        const container = document.createElement("div");
        container.className =
          "d-flex justify-content-between align-items-center";
        const btnGroup= document.createElement("div");
        btnGroup.className="btn-group";

        const viewButton = document.createElement("button");
        viewButton.type = "button";
        viewButton.className = "btn btn-sm btn-outline-secondary";
        viewButton.textContent = "View";

        const hideButton = document.createElement("button");
        hideButton.type = "button";
        hideButton.className = "btn btn-sm btn-outline-secondary";
        hideButton.textContent = "Hide";
        hideButton.addEventListener("click", function () {
          hideCard(card);
        });

        const smallElement = document.createElement("small");
        smallElement.className = "text-muted";
        smallElement.textContent = image.id;

        btnGroup.appendChild(viewButton);
        btnGroup.appendChild(hideButton);
        container.appendChild(btnGroup);
        container.appendChild(smallElement);
        
        cardBody.appendChild(titleElement);
        cardBody.appendChild(textElement);
        cardBody.appendChild(container);
        
        card.appendChild(cardBody);

        imagesContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching images:", error));
}
function hideCard(card) {
  card.style.display = "none";
}
