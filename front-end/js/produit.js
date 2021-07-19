/** @format */

/** recuperation de lid dans url*/
const url = new URL(window.location.href);
const idUrl = url.searchParams.get("id");

console.log(idUrl);

fetch(`http://localhost:3000/api/teddies/${idUrl}`)
  .then((reponse) => {
    if (reponse.ok) {
      return reponse.json();
    }
  })

  .then((datas) => {
    affichageElements(datas);
    console.log(datas);
    addListener(datas);
    
  
  })

  .catch((error) => {
    console.log(error.message);
  });

function affichageElements(datas) {
  
  const elementDom = document.getElementById("choix");
  elementDom.innerHTML += `

  <div class="produit">

  <div class="produit__imageUrl"> <img src="${datas.imageUrl}" alt="${datas.name}"/>
  </div>
    
  <div class="produit__name">${datas.name}</div>

  <div class="produit__price">€${datas.price}</div>

  <select name="couleurs" id="couleurs-select">
    <option value="">--Merci de choisir une option--</option>
    ${datas.colors.map (
      (option) =>`<option value = "${option}"> ${option} </option> `
    )}
  </select>
  </div>
  `
};

//gérer click sur bouton ajouter au panier


function addListener(datas) {
  const bouton = document.getElementById("bouton");
  bouton.addEventListener('click', function () {

    
    //créer un local storage
    let monStockage = localStorage; //monStockage = localStorage; a verifier
    localStorage.setItem('monStockage', 'articles');
    console.log(monStockage);

    if (monStockage === null) { //si monStockage existe alors j'ajoute les articles
      localStorage.setItem('articles', JSON.stringify, (['articles']));
      console.log(articles);
           
    }
  
    else (monStockage !== null); { //si monStockage existe mais n'est pas vide
      
      localStorage.setItem('produit', JSON.parse, ('produits'));
      
    };
    
      
    
  
  });
  
} 

//créer un local storage 
//
// if const monStorage 
//monStorage.push('produit')

