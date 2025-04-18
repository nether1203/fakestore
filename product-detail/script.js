const url = new URL(document.URL);
let idText = url.search
console.log(idText)

const id = Number(idText.slice(4, idText[idText.lenght - 1]))
console.log(id)

fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => {

    console.log(data)

    const img = document.querySelector(".product_img")
    console.log(img)

    img.setAttribute("src", data.image)
});


