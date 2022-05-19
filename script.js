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
})

const $benefitsCarousel = document.querySelector('.js-carousel--benefits');

if(window.screen.width < 600) {
  new Glider($benefitsCarousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  });
}

function isSequentialNumber(number) {
  const numbersArray = String(number).split('').sort();
  var isValid = [];
  numbersArray.forEach((item, index) => {
    if(numbersArray[index + 1]) {
      isValid.push(+item + 1 == numbersArray[index + 1] || +item == numbersArray[index + 1])
    }
  })
  
  const numbersFiltered = isValid.filter((item) => {
    return item == false;
  });

  if(numbersFiltered.length == 0) {
    console.log('É uma sequência.');
  } else {
    console.log('Não é uma sequência.');
  }
}

isSequentialNumber(1224);

function isValidString(stringReceived) {
  let bracket = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  let heap = [];
  
  for(let char of stringReceived) {
    if(bracket[char]) {
      heap.push(bracket[char]);
    } else {
      if(heap.pop() !== char) {
        console.log('Não é valido.');
        return false;
      };
    }
  }

  if(!heap.length) {
    console.log('É valido.');
  }
}

isValidString('[{}([)]]');

function verifyDuplicatedNumbers(numberArray) {
  var results = [];
  for (var i = 0, len = numberArray.length - 1; i < len; i++) {
    if((results.indexOf(numberArray[i]) == -1) && (numberArray.indexOf(numberArray[i], i + 1) != -1)) {
        results.push(numberArray[i]);
    }
  }
  console.log(`Os números repetidos são: ${results}.`);
}

verifyDuplicatedNumbers([4, 5, 44, 98, 4, 5, 6, 98]);

function verifyPossibilities(persons) {
  var fatorial = persons;
  var result = 1;
  for (var i = fatorial; i > 1; i--) {
    result *= i;
  }
  console.log(`Existem ${result} possibilidades.`);
}

verifyPossibilities(5);