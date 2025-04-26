
// function toggleText() {
//     const text = document.getElementById('hiddenText');
//     text.style.display = (text.style.display === 'block') ? 'none' : 'block';
//     const title = document.querySelector('.questionBoxTitle');
//     title.classList.toggle('questionTitleBig');
//   }

const toggles = document.querySelectorAll('.svg');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const text = toggle.parentNode.parentNode.querySelector('#hiddenText');
    console.log(toggle.parentNode.parentNode);
    text.style.display = (text.style.display === 'block') ? 'none' : 'block';
    const title = toggle.parentNode.querySelector('.questionBoxTitle');
  });
});
