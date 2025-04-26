
const width = screen.width
console.log(width);

const cliderTrack = document.querySelectorAll('.cliderTrack');

const swiperWrapper = document.querySelectorAll('.swiper-wrapper');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    products(data)
  });

  function products(data){
    data.forEach(item => {
        if (item.category == "men's clothing") {
          if (width <= 1440) {
            swiperWrapper[0].innerHTML += `
            <a href="/product-detail/index.html?id=${item.id}" class="swiper-slide">
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
          } else {
            cliderTrack[0].innerHTML += `
            <a href="/product-detail/index.html?id=${item.id}" class="sliderItem">
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
        } else if(item.category == "jewelery") {
          if (width <= 1440) {
            swiperWrapper[1].innerHTML += `
            <a href="/product-detail/index.html?id=${item.id}" class="swiper-slide">
                <div >
                    <div class="productContentTop">
                        <img src="${item.image}" alt="" class="productImg jeweleryImg">
                    </div>
                    <img src="../src/img/Button.png" alt="" class="basket">
                    <div class="productContentBotton">
                        <h3>${item.title}</h3>
                        <p>$${item.price}</p>
                    </div>
                </div>
            </a>
            `
          } else {
            cliderTrack[1].innerHTML += `
            <a href="/product-detail/index.html?id=${item.id}" class="sliderItem">
                <div>
                    <div class="productContentTop">
                        <img src="${item.image}" alt="" class="productImg jeweleryImg">
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
        } else if (item.category == "women's clothing") {
          swiperWrapper[2].innerHTML += `
            <a href="/product-detail/index.html?id=${item.id}" class="swiper-slide">
                <div >
                    <div class="productContentTop">
                        <img src="${item.image}" alt="" class="productImg jeweleryImg">
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
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1050: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1441: {
        slidesPerView: 4,
        spaceBetween: 50,
      }
    },
  });


  