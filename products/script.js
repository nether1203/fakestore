
const width = screen.width
console.log(width);

const cliderTrack = document.querySelectorAll('.cliderTrack');

const swiperWrapper = document.querySelectorAll('.swiper-wrapper');
const productBox = document.querySelector('.productBox');
const jewelery = document.querySelector('.jewelery');
const mensClothing = document.querySelector('.mensClothing');
const electronics = document.querySelector('.electronics');
const womensClothing = document.querySelector('.womensClothing');
const productContent = document.querySelectorAll('.productContainer');

const filterBtn = document.querySelectorAll('.filterBtn');
const select = document.querySelector('#select');

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
  let swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper1-next",
      prevEl: ".swiper1-prev",
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
  let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper2-next",
      prevEl: ".swiper2-prev",
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

  let swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper3-next",
      prevEl: ".swiper3-prev",
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

            
            ` 
        }
            
        
    });

    let product
    document.querySelectorAll('[data-product]').forEach((name) =>{
        name.addEventListener('click', function () {
          product = name.getAttribute('data-product')
          console.log(product);
          filters(product)
        })
    })

    select.addEventListener('change', () => {
      filters(select.value)
    })

    function filters(product) {
      if (product == 'all') {
        for (let i = 0; i < productContent.length; i++) {
          productContent[i].classList.remove('none')
        }
      } else {
        for (let i = 0; i < productContent.length; i++) {
          productContent[i].classList.add('none')
        }
        document.querySelector(`.${product}`).classList.remove('none')
      }
      filterBtn.forEach((item) =>{
        item.classList.remove('activeFilter')
        item.addEventListener('click', () =>{
          item.classList.add('activeFilter')
        })
      })
    }
  }

