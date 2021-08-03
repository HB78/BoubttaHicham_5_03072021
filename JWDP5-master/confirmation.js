let sommeTotal = JSON.parse(localStorage.getItem("sommeTotal"));
let arraysend = JSON.parse(localStorage.getItem("arraysend"));
let confirms = document.getElementById("confirm");
let thanks = `<div>
<h1>Nous vous remercions pour votre commande ${arraysend.contact.firstName}</h1>
<p>Votre numéro de commande est le ${arraysend.products[0]}</p>
<p>Vous avez payé ${sommeTotal}.00€</p>
<button>Retour à la page d'accuei</button>
</div>`;

confirms.innerHTML += thanks;

