/* On récupere le pannier de l'utilisateur dans le local storage */
let panier = JSON.parse(localStorage.getItem("panier"));

function delIndexPanier(index) {
  panier.splice(index, 1);
  localStorage.setItem("panier", JSON.stringify(panier));
  window.location.href = "panier.html";
}

function viderPanier() {
  localStorage.removeItem("panier");
  alert('le panier a été vidé');
  window.location.href = "panier.html";
}

function main() {
  let sommeTotal = 0;
  let facture = document.getElementById('facture');
  let tableproduct = document.getElementById("tableproduct");
  console.log("panier", panier);
  /* On remplis le html avec les donné du pannier et on calcule le total*/
  panier.forEach((produitPanier, index) => {
    produitPanier.totalPrice = produitPanier.quantity * produitPanier.price;
    tableproduct.innerHTML += `
      <tr id="info">
        <td>${produitPanier.name}</td>
        <td>${produitPanier.quantity}</td>
        <td>${produitPanier.price}.00 €</td>
        <td>${produitPanier.totalPrice}.00 €</td>
        <td><button id="supprimer" onClick="delIndexPanier(${index})"> <i class="fas fa-trash-alt"></i></button></td>
      </tr>
    `;
    /* On ajoute le prix de l'objet (le prix total) au prix total */
    sommeTotal += produitPanier.totalPrice;
  });
  facture.innerHTML = "<div class='centerprice' >la facture est de : </div>" + sommeTotal + ".00 €";
}

main();
