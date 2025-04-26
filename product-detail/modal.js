const cart = document.querySelector(".shoppingCart")
const modal = document.querySelector(".product_modal")
cart.addEventListener("click", ()=>{
    modal.classList.toggle("active")
})

function randomId() {
    return Math.floor(Math.random() * 8 )
}  

console.log(randomId())