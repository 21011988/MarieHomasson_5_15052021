/** @format */

//récupération du panier dans le local storage
let produitEnregistreDansLocalStorage = JSON.parse(
  localStorage.getItem("panier")
);

const elementsDansPanier = document.getElementById("listeproduits"); //produits ajoutés dans le panier
const recapPanier = document.getElementById("total"); //montant total du panier

// si le panier est vide => mettre un message
if (produitEnregistreDansLocalStorage === null) {
  const panierVide = `
    <div class="paniervide">
      <div> Votre panier est vide ! </div>
    </div>  
    `;
  elementsDansPanier.innerHTML = panierVide;
}
//si le panier n'est pas vide => affichage des produits
else {
  let nomProduit;
  let prixProduit;
  let montantTotal = 0;

  //récupration et affichage des informations produits par création
  for (let i = 0; i < produitEnregistreDansLocalStorage.length; i++) {
    console.log(produitEnregistreDansLocalStorage);

    //nom du produit
    const nom = document.getElementById("nomproduit");
    nomProduit = document.createElement("p");
    nomProduit.textContent = produitEnregistreDansLocalStorage[i].name;
    nom.appendChild(nomProduit);
  
    //prix du produit
    const prix = document.getElementById("prixproduit");
    prixProduit = document.createElement("p");
    prixProduit.textContent = produitEnregistreDansLocalStorage[i].prix;
    prix.appendChild(prixProduit);
   
    //montant total calcul
    montantTotal = montantTotal + Number(produitEnregistreDansLocalStorage[i].prix);

    //créer un bouton supprimer sur chaque ligne produit
    const supprimer = document.getElementById("boutonsupprimer")
    supprimer.innerHTML += `
    <button type="submit" class="produit__supprimer">Supprimer</button>
    `
  }
  // affichage calcul du montant total des produits dans le panier
  const affichageMontant = document.createElement("p");
  affichageMontant.textContent = montantTotal;
  recapPanier.appendChild(affichageMontant);

  // SI > supprimer un produit du panier
  const bouton = document.getElementById("boutonsupprimer");
  let produitASupprimer;
  bouton.addEventListener("click", function () {
    if (confirm("Etes-vous sûr de vouloir supprimer cet article ?")) {
      // Suppression article dans panier 
      produitEnregistreDansLocalStorage.shift(produitASupprimer); 
      alert("Votre produit est bien supprimé du panier"); 
      localStorage.setItem("panier", JSON.stringify(produitEnregistreDansLocalStorage));
      // Affichage du panier actualisé
    } else {
      // Article reste dans panier, il ne se passe rien d'autre
    }
  });

  //vider l'ensemble du panier
  const bouton2 = document.getElementById("boutonvider");
  bouton2.addEventListener("click", function () {
    if (confirm("Etes-vous sûr de vouloir vider entièrement votre panier?")) {
      // Tous les produits sont supprimés > message que le panier est vide 
    } else {
      // Tous les produits restent dans panier, il ne se passe rien d'autre
    }
  });
}
//Bouton pour valider la commande (vérifier formulaire, créer objet contact pour back end, créer tableau avec idproduit pour back end => envoie au back end et attente de réponse => orderID à mettre en storage et afficher page confirmation (changement page)

//gestion au clik sur bouton valider la commande
    
  //Créer objet contact pour envoyer au back-end
  
  //Créer tableau produits pour envoyer au back-end
  
  //Retour du back end > numéro de commande IdOrder
  
  //Affichage page confirmation


