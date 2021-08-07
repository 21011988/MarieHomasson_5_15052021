/** @format */

//récupération du panier dans le local storage
let produitEnregistreDansLocalStorage = JSON.parse(
  localStorage.getItem("panier")
);
console.log(produitEnregistreDansLocalStorage);

const elementsDansPanier = document.getElementById("listeproduits");

// si le panier est vide => mettre un message
if (produitEnregistreDansLocalStorage === null) {
  console.log("je suis vide");

  const panierVide = `
    <div class="paniervide">
      <div> Votre panier est vide ! </div>
    </div>  
    `;
  elementsDansPanier.innerHTML = panierVide;
}
//si le panier n'est pas vide => affichage des produits
else {
  console.log("je ne suis pas vide");

  let titre;

  let prixTotal = 0;

  /*for (let i = 0; i < produitEnregistreDansLocalStorage.length; i++) {
       
        //nom du produit
       console.log(produitEnregistreDansLocalStorage[i].name);
       titre = document.createElement("h3");
       titre.textContent = produitEnregistreDansLocalStorage[i].name;
        elementsDansPanier.appendChild(titre);
        
        //prix total
        prixTotal = prixTotal + Number(produitEnregistreDansLocalStorage[i].prix);
        prixTotal = document.createElement("h3");
        prixTotal.textContent = Number(produitEnregistreDansLocalStorage[i].prix)
        elementsDansPanier.appendChild(prixTotal);*/
  console.log(prixTotal);

  //supprimer un produit du panier
  const bouton = document.getElementById("boutonsupprimer");
  bouton.addEventListener("click", function () {
    if (confirm("Etes-vous sûr de vouloir supprimer cet article ?")) {
      // Code à éxécuter si le l'utilisateur clique sur "OK"
    } else {
      // Code à éxécuter si l'utilisateur clique sur "Annuler"
    }
  });

  //vider l'ensemble du panier
  const bouton2 = document.getElementById("boutonvider");
  bouton2.addEventListener("click", function () {
    if (confirm("Etes-vous sûr de vouloir vider entièrement votre panier?")) {
      // Code à éxécuter si le l'utilisateur clique sur "OK"
    } else {
      // Code à éxécuter si l'utilisateur clique sur "Annuler"
    }
  });
}

function sendData(data) {
  var XHR = new XMLHttpRequest();
  var FD = new FormData();

  // Mettez les données dans l'objet FormData
  for (name in data) {
    FD.append(name, data[name]);
  }

  // Définissez ce qui se passe si la soumission s'est opérée avec succès
  XHR.addEventListener("load", function (event) {
    alert("Ouais ! Données envoyées et réponse chargée.");
  });

  // Definissez ce qui se passe en cas d'erreur
  XHR.addEventListener("error", function (event) {
    alert("Oups! Quelque chose s'est mal passé.");
  });

  // Configurez la requête
  XHR.open("POST", "http://127.0.0.1:5500/front-end/confirmation.html");

  // Expédiez l'objet FormData ; les en-têtes HTTP sont automatiquement définies
  XHR.send(FD);
}

//sinon
//Afficher panier (et calculer en meme temps) (prévoir bouton supprimé pour chaque ligne)

//Afficher montant total panier
//Afficher formulaire commande
//Bouton pour valider la commande (vérifier formulaire, créer objet contact pour back end, créer tableau avec idproduit pour back end => envoie au back end et attente de réponse => orderID à mettre en storage et afficher page confirmation (changement page)
