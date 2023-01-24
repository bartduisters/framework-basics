const createCard = (name, description, showButton = true) => {
  return /*html*/ `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        ${
          showButton
            ? /*html*/ `<a href="#" class="btn btn-primary">Details</a>`
            : ""
        }
      </div>
    </div>
  `;
};

const appElement = document.querySelector("#app");

appElement.textContent = "";

const h1Element = document.createElement("h1");
h1Element.textContent = "Hell, world!";
appElement.appendChild(h1Element);

const cardsElement = document.createElement("div");
cardsElement.classList.add("cards");
appElement.appendChild(cardsElement);

const kwikElement = document.createElement("div");
kwikElement.innerHTML = createCard(
  "Kwik",
  "Kwik is een broertje van Kwek en Kwak"
);
cardsElement.appendChild(kwikElement);

const kwekElement = document.createElement("div");
kwekElement.innerHTML = createCard(
  "Kwek",
  "Kwek is een broertje van Kwik en Kwak",
  false
);
cardsElement.appendChild(kwekElement);

const kwakElement = document.createElement("div");
kwakElement.innerHTML = createCard(
  "Kwak",
  "Kwak is een broertje van Kwik en Kwek"
);
cardsElement.appendChild(kwakElement);
