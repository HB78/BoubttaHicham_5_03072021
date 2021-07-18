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

  
function produit(data) {
    teddies.innerHTML +=`
    <div class="peluche" id="cardsProduct">
      <img class="img2" src=${data.imageUrl} alt="">
      <div class="description">
        <p class="nom">${data.name}</p>
        <span class="peluche-description">
          ${data.description}
        </span>
        <select class="options" id ="option">
          <option>${data.colors[1]}</option>
          <option>${data.colors[2]}</option>
          <option>${data.colors[3]}</option>
        </select>
        <p class="prix"> Prix Unitaire: ${data.price/ 100}€</p>
        <select class="quantite" id="quantity">           
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>         
        <a href ="panier.html"><button type ="submit" id="panier" value="submit"> Ajouter au panier</button></a>
      </div>
    </div>
  `;
}
getdata()

console.log(id)

// for (let lenses of camera.lenses){
//   document.getElementById('option').innerHTML+=
//   `<option value="1">${data[0].colors[2]}</option>`
