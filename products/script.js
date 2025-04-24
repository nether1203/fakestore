
const productBox = document.querySelector('.productBox');
const jewelery = document.querySelector('.jewelery');
const mensClothing = document.querySelector('.mensClothing');
const electronics = document.querySelector('.electronics');
const womensClothing = document.querySelector('.womensClothing');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    products(data)
  });

  function products(data){
    data.forEach(item => {
        if (item.category == "men's clothing") {
            mensClothing.innerHTML += `
            <a href="/product-detail/index.html?id=${item.id}" class="productContent">
                <div >
                    <div class="productContentTop">
                        <img src="${item.image}" alt="" class="productImg">
                    </div>
                    <img src="../src/img/Button.png" alt="" class="basket">
                    <div class="productContentBotton">
                        <h3>${item.title}</h3>
                        <p>$${item.price}</p>
                    </div>
                </div>
            </a>
            
            `
        } /*else if (item.category == "jewelery") {
            jewelery.innerHTML += `
            <a href="/product-detail/index.html?id=${item.id}" class="productContent">
                <div >
                    <div class="productContentTop">
                        <img src="${item.image}" alt="" class="productImg">
                    </div>
                    <img src="../src/img/Button.png" alt="" class="basket">
                    <div class="productContentBotton">
                        <h3>${item.title}</h3>
                        <p>$${item.price}</p>
                    </div>
                </div>
            </a>
            
            `
        } else if (item.category == "women's clothing") {
            womensClothing.innerHTML += `
            <a href="/product-detail/index.html?id=${item.id}" class="productContent">
                <div >
                    <div class="productContentTop">
                        <img src="${item.image}" alt="" class="productImg">
                    </div>
                    <img src="../src/img/Button.png" alt="" class="basket">
                    <div class="productContentBotton">
                        <h3>${item.title}</h3>
                        <p>$${item.price}</p>
                    </div>
                </div>
            </a>
            
            ` 
        }*/
            
        
    });
  }