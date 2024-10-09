// Add custom JavaScript here
//Ini buat kalau navbar nya di scroll, navbar nya bakal tetep muncul bareng scroll + 
//+ warna belakang navbar jadi gelap pas di scroll
function userScroll() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 70) {
        navbar.classList.add('bg-dark');
        navbar.classList.add('navbar-sticky');
      } else {
        navbar.classList.remove('bg-dark');
        navbar.classList.remove('navbar-sticky');
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', userScroll);



//Ini fungsi buat nampilin animasi di Header
function runTypingEffect () {
    const text = ' Hi, Saya Alwan Maulana Firdaus '
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 100;

    typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
    /*Looping buat pengulangan typingElement*/
    for (let i= 0; i < text.length; i++) {
        setTimeout ( ( ) => {
            typingElement.textContent += text.charAt(i);
        }, delay * i);
    }

}

document.addEventListener('DOMContentLoaded', runTypingEffect);