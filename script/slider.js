const sliderAudience = document.querySelector('.audience-reviews__container');
const sliderPress = document.querySelector('.press-reviews__container');
const sliderNextButtons = document.querySelectorAll('.button__slider-right');
const sliderBackButtons = document.querySelectorAll('.button__slider-left');
let offsetSliderAudience = 0;
let offsetSliderPress = -362;
let pressReviewNumber = 0;
const pressReviews = [
  {
    image: './images/logo/tnyt-logo.svg',
    author: 'Логотип The New York Times',
    text: '«Действие пьесы «Длань Господня» разворачивается в подвале провинциальной церкви в Техасе, где мать главного героя с группой добровольцев готовит кукольное представление. Ей отчаянно нужна эта работа, её муж недавно умер, оставив её с сыном-подростком в эмоциональной и финансовой яме. И вот жуткая тварь захватывает контроль над левой рукой её беспокойного Джейсона и принимается терроризировать его и всех вокруг. По мере накала страстей окружающие начинают подозревать, что рука одержима самим дьяволом, и пастор Грег предлагает прибегнуть к экзорцизму. Однако «Длань Господня» — это не ужастик, по крайней мере, природа зла тут вовсе не сверхъестественная. Чёрная комедия Аскинса о разделённой надвое душе человека ненавязчиво обнажает глубинные импульсы — сексуальные, саморазрушительные, агрессивные — которые притаились в каждом из нас».',
  },
  {
    image: './images/logo/sobaka-logo.svg',
    author: 'Логотип Собака',
    text: '«Действие пьесы «Длань Господня» разворачивается в подвале провинциальной церкви в Техасе, где мать главного героя с группой добровольцев готовит кукольное представление. Ей отчаянно нужна эта работа, её муж недавно умер, оставив её с сыном-подростком в эмоциональной и финансовой яме. И вот жуткая тварь захватывает контрол над левой рукой её беспокойного Джейсона и принимается терроризировать его и всех вокруг».',
  },
  {
    image: './images/logo/tnyt-logo.svg',
    author: 'Логотип The New York Times',
    text: '«Действие пьесы «Длань Господня» разворачивается в подвале провинциальной церкви в Техасе, где мать главного героя с группой добровольцев готовит кукольное представление. Ей отчаянно нужна эта работа, её муж недавно умер, оставив её с сыном-подростком в эмоциональной и финансовой яме. И вот жуткая тварь захватывает контроль над левой рукой её беспокойного Джейсона и принимается терроризировать его и всех вокруг. По мере накала страстей окружающие начинают подозревать, что рука одержима самим дьяволом, и пастор Грег предлагает прибегнуть к экзорцизму. Однако «Длань Господня» — это не ужастик, по крайней мере, природа зла тут вовсе не сверхъестественная. Чёрная комедия Аскинса о разделённой надвое душе человека ненавязчиво обнажает глубинные импульсы — сексуальные, саморазрушительные, агрессивные — которые притаились в каждом из нас».',
  },
  {
    image: './images/logo/sobaka-logo.svg',
    author: 'Логотип Собака',
    text: '«Действие пьесы «Длань Господня» разворачивается в подвале провинциальной церкви в Техасе, где мать главного героя с группой добровольцев готовит кукольное представление. Ей отчаянно нужна эта работа, её муж недавно умер, оставив её с сыном-подростком в эмоциональной и финансовой яме. И вот жуткая тварь захватывает контрол над левой рукой её беспокойного Джейсона и принимается терроризировать его и всех вокруг».',
  },
];
const 
audienceReviews = [
  {
    author: 'Наталья Зайцева',
    text: 'Что-то похожее на эффект от мультфильмов типа «Сауз Парк» или про коня Боджэка возникает — я думаю, и пьеса написана с этой интонацией американских взрослых мультсериалов. И как хорошо все это с куклой-носочком. Так все чисто сделано!',
  },
  {
    author: 'Дина Годер',
    text: 'Для самой этой истории формат читки работает отличным ироническим отстранением',
  },
  {
    author: 'Дарья Морозова',
    text: 'Мне данный формат дал возможность самой выбирать, как двигается персонаж, что на нем надето, какую машину он водит, и что за плакат висит в подвале церкви. Это было приятно, ведь я как будто сама поучаствовала в спектакле',
  },
  {
    author: 'Наталья Зайцева',
    text: 'Что-то похожее на эффект от мультфильмов типа «Сауз Парк» или про коня Боджэка возникает — я думаю, и пьеса написана с этой интонацией американских взрослых мультсериалов. И как хорошо все это с куклой-носочком. Так все чисто сделано!',
  },
  {
    author: 'Дина Годер',
    text: 'Для самой этой истории формат читки работает отличным ироническим отстранением',
  },
  {
    author: 'Дарья Морозова',
    text: 'Мне данный формат дал возможность самой выбирать, как двигается персонаж, что на нем надето, какую машину он водит, и что за плакат висит в подвале церкви. Это было приятно, ведь я как будто сама поучаствовала в спектакле',
  },
  {
    author: 'Наталья Зайцева',
    text: 'Что-то похожее на эффект от мультфильмов типа «Сауз Парк» или про коня Боджэка возникает — я думаю, и пьеса написана с этой интонацией американских взрослых мультсериалов. И как хорошо все это с куклой-носочком. Так все чисто сделано!',
  },
  {
    author: 'Дина Годер',
    text: 'Для самой этой истории формат читки работает отличным ироническим отстранением',
  },
  {
    author: 'Дарья Морозова',
    text: 'Мне данный формат дал возможность самой выбирать, как двигается персонаж, что на нем надето, какую машину он водит, и что за плакат висит в подвале церкви. Это было приятно, ведь я как будто сама поучаствовала в спектакле',
  },
  {
    author: 'Наталья Зайцева',
    text: 'Что-то похожее на эффект от мультфильмов типа «Сауз Парк» или про коня Боджэка возникает — я думаю, и пьеса написана с этой интонацией американских взрослых мультсериалов. И как хорошо все это с куклой-носочком. Так все чисто сделано!',
  },
  {
    author: 'Дина Годер',
    text: 'Для самой этой истории формат читки работает отличным ироническим отстранением',
  },
  {
    author: 'Дарья Морозова',
    text: 'Мне данный формат дал возможность самой выбирать, как двигается персонаж, что на нем надето, какую машину он водит, и что за плакат висит в подвале церкви. Это было приятно, ведь я как будто сама поучаствовала в спектакле',
  }
];
const audienceReviewTemplate = document.querySelector('#audience-review-template').content;
const audienceReviewContainer = document.querySelector('.audience-reviews__container');
const pressReviewTemplate = document.querySelector('#press-review-template').content;
const pressReviewContainer = document.querySelector('.press-reviews__container');

function createAudienceReview(review) {
 const reviewElement = audienceReviewTemplate.querySelector('.audience-review').cloneNode(true);
 reviewElement.querySelector('.audience-review__text').textContent = review.text;
 reviewElement.querySelector('.audience-review__author').textContent = review.author;
 return reviewElement;
}

function renderAudienceReview(review) {
  audienceReviewContainer.append(createAudienceReview(review));
}

function createPressReview(review) {
  const reviewElement = pressReviewTemplate.querySelector('.press-review').cloneNode(true);
  const reviewImageElement = reviewElement.querySelector('.press-review__logo');
  reviewImageElement.src = review.image;
  reviewImageElement.alt = review.author;
  reviewElement.querySelector('.press-review__text').textContent = review.text;
  return reviewElement;
}

function renderPressReview(review) {
  pressReviewContainer.append(createPressReview(review));
}

audienceReviews.forEach(review => renderAudienceReview(review));
pressReviews.forEach(review => renderPressReview(review));
const pressReviewList = pressReviewContainer.querySelectorAll('.press-review');
pressReviewList[pressReviewNumber].classList.remove('press-review_inactive');

sliderNextButtons.forEach((buttonNext) => {
  buttonNext.addEventListener('click', (evt) => {
    if (evt.target.closest('.audience-reviews')) {
      offsetSliderAudience += 1350;
      if (offsetSliderAudience > 4050) {
        offsetSliderAudience = 0;
      }
      sliderAudience.style.left = -offsetSliderAudience + 'px';
    } else {
      offsetSliderPress += 748;
      pressReviewList[pressReviewNumber].classList.toggle('press-review_inactive');
      pressReviewNumber += 1;
      if (offsetSliderPress > ((pressReviewList.length - 1) * 748)) {
        offsetSliderPress = -362;
        pressReviewNumber = 0;
      }
      sliderPress.style.left = -offsetSliderPress + 'px';
      pressReviewList[pressReviewNumber].classList.toggle('press-review_inactive');
    }
    });
});

sliderBackButtons.forEach((buttonBack) => {
  buttonBack.addEventListener('click', (evt) => {
    if (evt.target.closest('.audience-reviews')) {
      offsetSliderAudience -= 1350;
      if (offsetSliderAudience < 0) {
        offsetSliderAudience = 4050;
      }
      sliderAudience.style.left = -offsetSliderAudience + 'px';
    } else {
      offsetSliderPress -= 748;
      pressReviewList[pressReviewNumber].classList.toggle('press-review_inactive');
      pressReviewNumber -= 1;
      if (offsetSliderPress < -362) {
        offsetSliderPress = 1882;
        pressReviewNumber = pressReviewList.length - 1;
      }
      sliderPress.style.left = -offsetSliderPress + 'px';
      pressReviewList[pressReviewNumber].classList.toggle('press-review_inactive');
    }
    });
});