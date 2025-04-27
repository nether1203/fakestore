const cart = document.querySelector(".shoppingCart")
const modal = document.querySelector(".product_modal")
const cross = document.querySelector(".cross")
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

    console.log(userId)
    console.log(products)

    fetch(`https://fakestoreapi.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {

            console.log(data)

        });
        
    for (let index = 0; index < products.length; index++) {
        const product = products[index];

        console.log(product)

        fetch(`https://fakestoreapi.com/products/${product.productId}`)
            .then(response => response.json())
            .then(data => console.log(data));
        
    }
});