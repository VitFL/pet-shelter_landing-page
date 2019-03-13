/* Owl.Carousel */
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['🠨', '🠪'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      800: {
        items: 3,
        nav: true,
      },
      1200: {
        items: 4,
        nav: true,
      },
    },
  });
});

/* END: Owl.Carousel */

/* Modal */

const modalElements = document.querySelectorAll('.modal-overlay, .modal');
const modalButtons = document.querySelectorAll('.friends__card-button, .modal__close');
const modalOpenButton = document.querySelectorAll('.friends__card-button');
modalButtons.forEach(button => {
  button.addEventListener('click', e => {
    modalElements.forEach(modalElement => {
      modalElement.classList.toggle('active');
    });
  });
});

modalOpenButton.forEach(button => {
  button.addEventListener('click', e => {
    fetch(`api/pet/${e.target.dataset.name}`)
      .then(response => response.json())
      .then(pet => {
        for (const [key, value] of Object.entries(pet)) {
          if (key === 'photo') {
            document.querySelector('#pet-photo').src = value;
          } else {
            document.querySelector(`#pet-${key}`).innerHTML = value;
          }
        }
      });
  });
});

/* END: Modal */

/* Mobile Navbar */

const hamburger = document.getElementById('menu-button');
const menuMobile = document.getElementsByClassName('menu-mobile')[0];
const menuMobileItems = document.querySelectorAll('.menu-mobile__item');

hamburger.onclick = () => {
  hamburger.classList.toggle('active');
  menuMobile.classList.toggle('menu-mobile--active');
  menuMobileItems.forEach(menuMobileItem => menuMobileItem.classList.toggle('menu-mobile__item--active'));
};

/* Mobile Navbar */
