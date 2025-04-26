const cart = document.querySelector(".shoppingCart")
const modal = document.querySelector(".product_modal")
cart.addEventListener("click", ()=>{
    modal.classList.toggle("active")
})