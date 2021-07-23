
//appel à l'API// 
function getdata() { 
    fetch("http://localhost:3000/api/teddies")
    .then(res => {
        if(res.ok) {
        }
  
      return res.json()
    })
    .then(data => {
        console.log(data)
    }
      )
    .catch(console.log("erreur"))
  }
  getdata()

//Panier de l'utilisateur
let panier = JSON.parse(localStorage.getItem("panier"));
console.log(panier[0].price*panier[0].quantity)



//Pour afficher les produits du panier dans le tableau//
panier.forEach((produitPanier, index) => {
    console.log(typeof produitPanier)

        produitPanier.price = produitPanier.quantity * produitPanier.price;
        let tableproduct = document.getElementById("tableproduct")

    tableproduct.innerHTML +=`
      <tr id="info">
        <td>${produitPanier.name}</td>
        <td>${produitPanier.quantity}</td>
        <td>${produitPanier.price}.00 €</td>
      </tr>
    `;

})

//calcule le montant total de la facture//

let sommeTotal = 0;
panier.forEach((produitPanier) => {
  sommeTotal += produitPanier.price;
  let facture = document.getElementById('facture')
  facture.innerHTML = "<div>la facture est de : </div>" + sommeTotal
  console.log(produitPanier.price)
});

//le bouton pour supprimer tous les articles//

const btnclear = `
<button id="clearall"> Vider le panier </button>
`;
/*insertion du bouton dans le html du panier*/

tableproduct.insertAdjacentHTML("beforeend", btnclear);

//le clear du bouton//
const clearall = document.getElementById("clearall")
console.log(clearall)

//suppression de la key produit du localstorage//

clearall.addEventListener('click', (e) =>{
  e.preventDefault;

    //on utilise le .removeItem pour vider le local storage//
    localStorage.removeItem("panier")
    alert('le panier a été vidé')

    //rechargement de la page avec un panier vide//

    window.location.href = "panier.html"
})

