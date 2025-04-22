
const productBox = document.querySelector('.productBox');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    products(data)
  });

  function products(data){
    data.forEach(item => {
        if (item.category == "men's clothing") {
            productBox.innerHTML += `
            <a href="http://127.0.0.1:5500/product-detail/index.html?id=${item.id}" class="productContent">
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
        } 
    });
  }