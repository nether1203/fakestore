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

    function changeText(block, someData) {
        block.innerHTML = `
            ${someData}
        `
        if (block.className == "maininfo_price"){
            block.innerHTML = `
            ${someData}$
        `
        }
    }

    const title = document.querySelector(".maininfo_name")
    changeText(title, data.title)
    const price = document.querySelector(".maininfo_price")
    changeText(price, data.price)
    const description = document.querySelector(".description_text")
    changeText(description, data.description)
    const category = document.querySelector(".title_text")
    changeText(category, data.category)
    const rating = document.querySelector(".title_rating_number")
    changeText(rating, data.rating.rate)
    const count = document.querySelector(".count")
    changeText(count, data.rating.count)
});


