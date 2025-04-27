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

console.log(randomId())