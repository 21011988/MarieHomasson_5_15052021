/** @format */

const url = new URL(window.location.href);

const idUrl = url.searchParams.get("id");

console.log(idUrl);

fetch("http://produit.html?id=${data._id}")
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

function affichageArticles(datas) {
  const elementDom = document.getElementById("choix");

  for (const data of datas) {
    console.log(data);
    elementDom.innerHTML += `
        <div class="produit">
        <div class="produit__imageUrl">
        <img src="${data.imageUrl}" alt="${data.name}"/>
        </div>
        <div class="produit__name">${data.name}</div>
        <div class="produit__price">${data.price}</div>
        <div class="produit__colors">${data.colors}</div>
        </div>
        `;
  }
}

/* ajouter au panier = créer un local storage*/
//let colors = ["Pale Brown", "Dark Brown", "White"];
let resultat = colors.map((el) => {
  console.log(el);
});

function optionSelectionColors(colors) {
  const elementDom = document.getElementById("couleurs-select");
  console.log(colors);

  elementDom.innerHTML += `
  <option value="">--Choix 1 couleur--</option>
  <option value="color">${colors.color1}</option>
  <option value="color2">${colors.color2}</option>
  <option value="color3">${colors.color3}</option>
  <option value="color4">${colors.color4}</option>
   `;
}

  ${datas.colors.map} => '
  
  <option value> = "${datas.colors}" "${datas.colors}"</option>
  `
  </select>
  </div >
    `
  
 



// gérer click bouton
const bouton = document.getElementById('bouton')
bouton.addEventListener('click', () => {
  
  
}) 