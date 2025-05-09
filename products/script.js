const width = screen.width
console.log(width);

const cliderTrack = document.querySelectorAll('.cliderTrack');

const swiperWrapper = document.querySelectorAll('.swiper-wrapper');
const productContainer = document.querySelectorAll('.productContainer');

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
            elemetsFun(swiperWrapper, 'swiper-slide', item, 0)
          } else {
            elemetsFun(cliderTrack, 'sliderItem', item, 0)
          }
        } else if(item.category == "jewelery") {
          if (width <= 1440) {
            elemetsFun(swiperWrapper, 'swiper-slide', item, 1)
          } else {
            elemetsFun(cliderTrack, 'sliderItem', item, 1)
          }
        } else if (item.category == "women's clothing") {
          elemetsFun(swiperWrapper, 'swiper-slide', item, 2)
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
        for (let i = 0; i < productContainer.length; i++) {
          productContainer[i].classList.remove('none')
        }
      } else {
        for (let i = 0; i < productContainer.length; i++) {
          productContainer[i].classList.add('none')
        }
        document.querySelector(`.${product}`).classList.remove('none')
      }
      filterBtn.forEach((item) =>{
        item.addEventListener('click', () =>{
          for (let i = 0; i < filterBtn.length; i++) {
            filterBtn[i].classList.remove('activeFilter')
          }
          item.classList.add('activeFilter')
        })
      })
    }

    function elemetsFun(tag, tagclass, item, numbertag) {
      tag[numbertag].innerHTML += `
        <a href="/product-detail/index.html?id=${item.id}" class="${tagclass}">
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

