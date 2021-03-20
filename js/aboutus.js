const cards = document.querySelector(".cards");

const profiles = [
  {
    name: "Jessica",
    foto: "",
    text: "The mind of the hotel",
  },
  {
    name: "Agnes",
    foto: "",
    text: "",
  },
  {
    name: "Gordon",
    foto: "",
    text: "",
  },
  {
    name: "Okan",
    foto: "",
    text: "",
  },
  {
    name: "Gege",
    foto: "",
    text: "",
  },
];

function createCard(title, imageUrl) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  card.classList.add("card-title");
  cardTitle.innerHTML = title;
  card.appendChild(cardTitle);
}
for (let i = 0; i < profiles.length; i++) {
  createCard(profiles[i].name, profiles[i].foto, profiles[i].text);
}
