
/* On récupere le pannier de l'utilisateur dans le local storage */
let panier = JSON.parse(localStorage.getItem("panier"));
let id = JSON.parse(localStorage.getItem("id"));
console.log("id", id)

/*fonction pour envoyer les info avec fetch-post*/
function postapi() {
let firstname = document.getElementById("firstname").value
let lastname = document.getElementById("lastname").value
let adress = document.getElementById("adress").value
let city = document.getElementById("city").value
let email = document.getElementById("mail").value
let products = [id]

const contact = {
    firstName: firstname,
    lastName: lastname,
    address: adress,
    city: city,
    email: email
  }

    //  phone : document.getElementById("phone").value
   
    //envoie du panier et du formulaire dans le serveur avec fecth et post//
    const arraysend = {
      contact,
      products
    }
    console.log("array", arraysend)
    localStorage.setItem("arraysend", JSON.stringify(arraysend))
    
    let sendpost = {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      mode: "cors",
      body: JSON.stringify(arraysend)
    }
    fetch ("http://localhost:3000/api/teddies/order", sendpost) 
    .then(res => res.json())
    .then(data => {
      orderId = data.orderId;
      JSON.stringify(orderId)
      console.log(orderId)
      localStorage.setItem("orderId", orderId)
      window.location.href = "confirmation.html"
      
    })
    .catch( (err) => {
      console.log("fetch Error",err);
    });
}
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
    localStorage.setItem("sommeTotal", JSON.stringify(sommeTotal))
  });
  facture.innerHTML = "<div class='centerprice' >Le montant total est de : </div>" + sommeTotal + ".00 €";

  /* LA PARTIE FORMULAIRE*/
    //recuperation du formulaire pour les mettre dans le local storage au clic sur le bouton envoie//
  
    const envoieFomulaire = document.getElementById("commander")
    envoieFomulaire.addEventListener('click', (e)=> {
      e.preventDefault()
      postapi()
  })
}

main();
// localStorage.removeItem('panier')
//       window.location.href = "confirmation.html"
// orderId = data.orderId;
//       JSON.stringify(orderId)
//       localStorage.setItem("orderId", orderId);