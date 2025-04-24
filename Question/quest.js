
function toggleText() {
    const text = document.getElementById('hiddenText');
    text.style.display = (text.style.display === 'block') ? 'none' : 'block';
    const title = document.querySelector('.questionBoxTitle');
  title.classList.toggle('questionTitleBig');
  }
