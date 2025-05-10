const cart = document.querySelector(".shoppingCart")
const modal = document.querySelector(".product_modal")
const cross = document.querySelector(".cross")
const userName = document.querySelector(".user_name")
const date = document.querySelector(".date")
let inputs = document.querySelectorAll(".checkbox_example")
const container = document.querySelector(".modal_container")
const BlockSum = document.querySelector(".sum")

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
            .then(data => {

                console.log(data)
                    
                container.innerHTML += `
                            <div class="modal_item_example">
                                        <div class="item_left">
                                        <input class="checkbox_example" type="checkbox" name="add" data-count="${data.rating.count}" data-price="${data.price}" value="false">
                                        <label class="added_product_name_example">${data.title}</label>
                                        </div>
                                        <div class="item_right">
                                        <div class="added_product_count_example">Кількість: <span class="product_count">${data.rating.count}</span></div>
                                        <div class="added_product_price_example">Ціна за 1: <span class="product_price">${data.price}</span>$</div>
                                        </div>
                                    </div>
                        `
                        inputs = document.querySelectorAll(".checkbox_example")
                        console.log(inputs)
            });
    }             
});

let sum = 0
container.addEventListener("click", () => {
    if (event.target.className == "checkbox_example") {
        if (event.target.value == "false") {
            event.target.value = "true"
        } else{
            event.target.value = "false"
        }
        sum = 0
        console.log(event.target.value)
        console.log(inputs)

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i]
            console.log(input)
            console.log(Number(input.dataset.price))
            
            if (input.value == "true") {
                sum += Number(input.dataset.price) * Number(input.dataset.count)
            }          
                   
        }
        BlockSum.textContent = `
            ${sum}
        `

    }
})

