/** @format */

// récupération de l'api des teddies
fetch("http://localhost:3000/api/teddies")
  .then((reponse) => {
    if (reponse.ok) {
      return reponse.json();
    }
  })
  .then((datas) => {
    affichageArticles(datas);
  })
  .catch((error) => {
    console.log(error.message);
  });

// affichage des produits disponibles teddies
function affichageArticles(datas) {
  const elementDom = document.getElementById("articles");

  for (const data of datas) {
    console.log(data);
    elementDom.innerHTML += `
    <div class="produit">
    <a href="produit.html?id=${data._id}" id="lienid">
    <div class="produit__imageUrl">
    <img src="${data.imageUrl}" alt="${data.name}"/>
    </div>
    <div class="produit__name">${data.name}</div>
    <div class="produit__price">€${data.price / 100}</div>
    </a>
    </div>

    `;
  }
}
