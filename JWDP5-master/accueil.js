let products = document.querySelector("#products")

async function getdata() { 
  fetch("http://localhost:3000/api/teddies")
  .then(res => {
      if(res.ok) {
      }

    return res.json()
  })
  .then(data => {
      datacards(data)
      console.log(data)
      console.log(data[0].name)
      const html = data[0].name + data[0].colors + data[0].imageUrl
  }
    )
  .catch(console.log("erreur"))
}

function datacards(data) {
    for (let i = 0; i < data.length; i++) {
        products.innerHTML += `
                <div class="productCard">
                    <a
                        href="product.html${data[i]._id}"
                        class="productLink"
                    >
                        <img class="img" src="${
                            data[i].imageUrl
                        }"  alt="Un joli nounours !" />
                        <div class="card-body teddyInfos text-dark">
                            <h5 class="card-title">${data[i].name}</h5>
                            <p class="price">${
                                data[i].price / 100
                            }.00 &euro;</p>
                        </div>
                        <p class="description"> ${
                            data[i].description
                        }</p>
                    </a>
                </div>
            `;
    }
}
getdata()
