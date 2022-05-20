const $shelvesCarousel = document.querySelector('.js-carousel--shelves');

new Glider($shelvesCarousel, {
  slidesToShow: 5,
  slidesToScroll: 2,
  draggable: true,
  duration: 1,
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next"
  },
  responsive: [
    {
      breakpoint: 999,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 300,
      settings: {
        draggable: true,
        slidesToShow: 1.25,
        slidesToScroll: 1,
      }
    }
  ]
});

const $mainSlider = document.querySelector('#mainSlider');

new Glider($mainSlider, {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: {
    prev: ".js-carousel--main-prev",
    next: ".js-carousel--main-next"
  },
});

const $benefitsCarousel = document.querySelector('.js-carousel--benefits');

if(window.screen.width < 750) {
  new Glider($benefitsCarousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    rewind: true,
  });

  setTimeout(() => {
    const modal = document.querySelector('.newsletter-modal');
    const btnCloseModal = document.querySelector('.close-modal');
    
    modal.style.display = 'flex';
    btnCloseModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }, 2000)
} else {
  setTimeout(() => {
    const modal = document.querySelector('.newsletter-modal-desktop');
    const btnCloseModal = document.querySelector('.close-modal-desktop');
    
    modal.style.display = 'flex';
    btnCloseModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }, 2000)
}

const btnMobile = document.querySelector('label[for="checkbox-menu"]');

function toggleMenu() {
  const nav = document.querySelector('.header-bottom-mobile');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

const btnSearch = document.querySelector('img[alt="Busca"]');

function toggleSearchBar() {
  const search = document.querySelector('.search-bar-mobile');
  const maeztraLogo = document.querySelector('img[alt="Logo Maeztra"]');

  if(!search.classList.contains('active')) {
    maeztraLogo.style.display = 'none';
  } else {
    maeztraLogo.style.display = 'block';
  }

  search.classList.toggle('active');
}

btnSearch.addEventListener('click', toggleSearchBar);

if(window.screen.width <= 500) {
  function showInformation() {
    const strongFooter = document.querySelectorAll('.footer-middle strong');
    strongFooter.forEach((item) => {
      item.addEventListener('click', function() {
        item.nextElementSibling.classList.toggle('active');
  
        if(item.nextElementSibling.classList.contains('active')) {
          item.nextElementSibling.style.display = 'block';
        } else {
          item.nextElementSibling.style.display = 'none';
        }
      });
    });
  }
  
  showInformation();
}