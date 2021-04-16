var dropdown = document.getElementsByClassName("menu__link--drop");
var i;

for (i = 0; i < dropdown.length; i++) {
   dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
         dropdownContent.style.display = "none";
      } else {
         dropdownContent.style.display = "block";
      }
   });
}


// Меню бургер

const burgerLines = document.querySelector('.burger__lines');
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.mobile__menu');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
      burgerLines.classList.toggle('active');
   });
}

// Slick

$('.intro__slider').slick({
   nextArrow: '<button type="button" class="slick-btn slick-next"><span></span></button>',
   prevArrow: '<button type="button" class="slick-btn slick-prev"><span></span></button>',
   dots: true,
   infinite: true,
   speed: 1000,
   fade: true,
   autoplay: true,
   autoplaySpeed: 5000,
   cssEase: 'linear'
});

// Slick 2

$('.exclusive__slider').slick({
   infinite: false,
   slidesToShow: 4,
   speed: 500,
   dots: false,
   nextArrow: '<button type="button" class="slick-btn slick-next"><span></span></button>',
   prevArrow: '<button type="button" class="slick-btn slick-prev"><span></span></button>',
   slidesToScroll: 3
 });