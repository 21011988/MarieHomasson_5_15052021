/** @format */

// récupération de l'id dans url
const url = new URL(window.location.href);
const idUrl = url.searchParams.get("id");
console.log(idUrl);

// récupération de la page du produit sélectionné/
fetch(`http://localhost:3000/api/teddies/${idUrl}`)
  .then((reponse) => {
    if (reponse.ok) {
      return reponse.json();
    }
  })

  .then((datas) => {
    affichageElements(datas);
    console.log(datas);
  })

  .catch((error) => {
    console.log(error.message);
  });

// affichage du produit sélectionné
function affichageElements(datas) {
  const elementDom = document.getElementById("choix");
  elementDom.innerHTML += `

  <div class="produit">

  <div class="produit__imageUrl"> <img src="${datas.imageUrl}" alt="${
    datas.name
  }"/>
  </div>
    
  <div class="produit__name">${datas.name}</div>

  <div class="produit__price">€${datas.price / 100}</div>

  <select class="produit__select" name="couleurs" id="couleurs-select">
    <option value="">--Merci de choisir une option--</option>
    ${datas.colors.map(
      (option) => `<option value = "${option}"> ${option} </option> `
    )}
  </select>
  </div>
  `;

  let optionsProduit = {
    name: datas.name,
    id_ProduitSelectionner: datas._id,
    prix: datas.price / 100,
  };

  //gestion au clik sur bouton ajouter au panier

  const bouton = document.getElementById("boutonajouter");
  bouton.addEventListener("click", function () {
    // récupérer le panier en storage
    let produitEnregistreDansLocalStorage = JSON.parse(
      localStorage.getItem("panier")
    );
    console.log(produitEnregistreDansLocalStorage);

    //si le panier existe déjà
    if (produitEnregistreDansLocalStorage) {
      console.log("panier existe deja");

      produitEnregistreDansLocalStorage.push(optionsProduit); //si j'ajoute un autre article
      alert("Votre produit est bien ajouté au panier"); // message alerte pour confirmer l'ajout au panier

      localStorage.setItem(
        "panier",
        JSON.stringify(produitEnregistreDansLocalStorage)
      );
    }

    //si le panier est nul
    else {
      produitEnregistreDansLocalStorage = []; //création tableau objet
      console.log("panier n'existe pas");

      produitEnregistreDansLocalStorage.push(optionsProduit); //si j'ajoute un article
      alert("Votre produit est bien ajouté au panier"); // message alerte pour confirmer l'ajout au panier

      localStorage.setItem(
        "panier",
        JSON.stringify(produitEnregistreDansLocalStorage)
      );
    }
  });
}
