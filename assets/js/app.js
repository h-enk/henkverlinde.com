/* eslint-disable */
if (document.querySelector('.next-page') !== null) {
  var infScroll = new InfiniteScroll('.post-list', {
    path: '.next-page',
    append: '.post-item',
    button: '.load-more',
    scrollThreshold: false,
    status: '.page-load-status',
    history: 'false',
  });
}

if (document.querySelector('.category-cards') !== null) {
  var flkty = new Flickity('.category-cards', {
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    groupCells: true,
  });
}
/* eslint-enable */
