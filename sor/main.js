const getCarousel = id => $.parseHTML(`<div class="slider" id="${id}"></div>`);

const getCarouselTitle = title => title ? $.parseHTML(`
<div class="center">
  <h2>${title}</h2>
</div>
`) : null;

const getCarouselDescription = description => description ? $.parseHTML(`
<div class="center">
  <p>${description}</p>
</div>
`) : null;

const getCard = ({image, title, description, icon, link, linkText}) => $.parseHTML(`
<div>
  <div class="card">
    ${icon ? `<img class="card__icon" data-lazy="${icon}" />` : ''}
    ${image ? `<img class="card__image" data-lazy="${image}" />` : ''}
    ${title ? `<h3>${title}</h3>` : ''}
    ${link ? `<a href="${link}">${linkText}</a>` : ''}
    ${description ? `<p>${description}</p>` : ''}
  </div>
</div>
`);

const getSeparator = () => $.parseHTML('<div class="separator" />')

const addTitle = title => $('#title').text(title);

const addDescription = description => $('#description').text(description);

const createSlickInitializer = id => () => {
  $(`#${id}`).not('.slick-initialized').slick({
    lazyLoad: 'ondemand',
    dots: true,
    responsive: [{
      breakpoint: 500,
      settings: {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
};

const addCarousel = (id, { title, description }) => {
  const container = $('#carousels');
  container.append(getSeparator());
  container.append(getCarouselTitle(title));
  container.append(getCarouselDescription(description));
  container.append(getCarousel(id));
};

const populateCarousel = (id, data) => {
  const carousel = $(`#${id}`);
  const cards = data.map(getCard);
  cards.forEach(card => carousel.append(card));
};

const initCarousel = (id) => {
  createSlick = createSlickInitializer(id);
  createSlick();
  $(window).on('resize', createSlick);
};

const load = actData => {
  addTitle(actData.title);
  addDescription(actData.description);

  Object.keys(actData.carousels).forEach(key => {
    const carousel = actData.carousels[key];
    addCarousel(key, carousel);
    populateCarousel(key, carousel.data);
    initCarousel(key);
  });
}
