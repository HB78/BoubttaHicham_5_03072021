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





panier.forEach((produitPanier, index) => {
    console.log(typeof produitPanier)

        produitPanier.price = produitPanier.quantity * produitPanier.price;
        let tableproduct = document.getElementById("tableproduct")

  for (let produit in produitPanier) {
    tableproduct.innerHTML +=`
      <tr id="info">
        <td>${produitPanier.name}</td>
        <td>${produitPanier.quantity}</td>
        <td>${produitPanier.price}.00 €</td>
      </tr>
    `;
  } 
})
console.log(typeof panier)

