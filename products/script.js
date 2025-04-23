
const cliderTrack = document.querySelector('.cliderTrack');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    products(data)
  });

  function products(data){
    data.forEach(item => {
        if (item.category == "women's clothing") {
            cliderTrack.innerHTML += `
            <a href="http://127.0.0.1:5500/product-detail/index.html?id=${item.id}" class="sliderItem">
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

    const width = screen.width

    let position = 0;
    const sliderToShow = 4;
    const sliderToScroll = 1;
    const container = document.querySelector('.sliderContainer');
    const track = document.querySelector('.cliderTrack');
    const items = document.querySelectorAll('.sliderItem');
    const btnPrew = document.querySelector('.prew');
    const btnNext = document.querySelector('.next');
    const itemCount = items.length
    const itemWidth = container.clientWidth / sliderToShow;
    const movePosition = sliderToScroll * itemWidth;
    // console.log(itemWidth);
    
    items.forEach((item) =>{
        item.style.minWidth = `${itemWidth}px`
    });

    btnNext.addEventListener('click', () => {
        const itemLeft = itemCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;

        position -= itemLeft >= sliderToScroll ? movePosition : itemLeft * itemWidth;

        setPosition();
        checkBtns();
    })

    btnPrew.addEventListener('click', () => {
        const itemLeft = itemCount - Math.abs(position) / itemWidth;

        position += itemLeft >= sliderToScroll ? movePosition : itemLeft * itemWidth;

        setPosition();
        checkBtns();
    })

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`
    }

    const checkBtns = () => {
        btnPrew.disabled = position === 0;
        btnNext.disabled = position <= -(itemCount - sliderToShow) * itemWidth
    }


    


  }
  