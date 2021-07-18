//RECUPERATION DE L URL
let params = (new URL(document.location)).searchParams;

//STOCK L ID 
const id = params.get("id");

//EMPLACEMENT HTML
let teddies = document.querySelector("#teddies")



function getdata() { 
    fetch("http://localhost:3000/api/teddies/" + id)
    .then(res => {
        if(res.ok) {
        }
  
      return res.json()
    })
    .then(data => {
        produit(data)
        console.log(data)
    }
      )
    .catch(console.log("erreur"))
  }

function addproduct(name, price) {
  let quantity = document.getElementById("quantity").value;
  quantity = parseInt(quantity)
  const color = document.getElementById("color").value;
  
  let product = {
    quantity: quantity,
    name: name,
    price: price,
  };
  let pannier = localStorage.getItem("pannier");
  if (pannier == null) {
    console.log("Pannier vide on le remplis pour la 1ere foi");
    localStorage.setItem("pannier", [product])
  }
  else {
    console.log("Pannier déjà existant on rajoute des items");
    // Détecter si le produit est déjà dans le pannier
    // utiliser forEatch ou map pour détecter
    // si il existe ajouté la qte choisis
    // sinon 'PUSH' l'objet dans le tableau
  }
}

function produit(data) {
    teddies.innerHTML +=`
    <div class="peluche" id="cardsProduct">
      <img class="img2" src=${data.imageUrl} alt="">
      <div class="description">
        <p class="nom">${data.name}</p>
        <span class="peluche-description">
          ${data.description}
        </span>
        <select class="options" id ="color">
          <option value=${data.colors[0]}>${data.colors[0]}</option>
          <option value=${data.colors[1]}>${data.colors[1]}</option>
          <option value=${data.colors[2]}>${data.colors[2]}</option>
        </select>
        <p class="prix"> Prix Unitaire: ${data.price/ 100}€</p>
        <select class="quantite" id="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>         
        <button onclick="addproduct('${data.name}', ${data.price/100})" type ="submit" id="panier" value="submit"> Ajouter au panier</button>
      </div>
    </div>
  `;
  
}


getdata()

console.log(id)

// for (let lenses of camera.lenses){
//   document.getElementById('option').innerHTML+=
//   `<option value="1">${data[0].colors[2]}</option>`


