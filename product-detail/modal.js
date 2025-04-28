const cart = document.querySelector(".shoppingCart")
const modal = document.querySelector(".product_modal")
const cross = document.querySelector(".cross")
const userName = document.querySelector(".user_name")
const date = document.querySelector(".date")

cart.addEventListener("click", ()=>{
    modal.classList.toggle("active")
})
cross.addEventListener("click", ()=>{
    modal.classList.remove("active")
})

function randomId() {
    return Math.floor(Math.random() * 8 )
}  
const Id = randomId()
console.log(Id)

fetch(`https://fakestoreapi.com/carts/${Id}`)
  .then(response => response.json())
  .then(data => {

    console.log(data)

    const userId = data.userId
    const products = data.products
    const trueDate = new Date (data.date).toLocaleDateString()

    console.log(userId)
    console.log(products)
    console.log(trueDate)

    date.textContent = `${trueDate}`

    fetch(`https://fakestoreapi.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {

            console.log(data)

            userName.textContent = `
                ${data.username}
            `
        });
        
    for (let index = 0; index < products.length; index++) {
        const product = products[index];

        console.log(product)

        fetch(`https://fakestoreapi.com/products/${product.productId}`)
            .then(response => response.json())
            .then(data => console.log(data));


        
    }
});