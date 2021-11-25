$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('ul').toggleClass('show');
    })
})

$(document).ready(function(){
  $('.mobile-li').click(function(){
      $('ul').toggleClass('show');
  })
})

const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.mobile-ul');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false
    }
})

menuItems.addEventListener('click', () => {
    if (menuItems.classList.contains('show')) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false
    }
})