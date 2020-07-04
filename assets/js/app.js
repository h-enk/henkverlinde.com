if (document.querySelector('.next-page') !== null) {

  /* eslint-disable */
  var infScroll = new InfiniteScroll('.post-list', {
    path: '.next-page',
    append: '.post-item',
    button: '.load-more',
    scrollThreshold: false,
    status: '.page-load-status',
    history: 'false'
  });
  /* eslint-enable */

}

if (document.querySelector('.category-cards') !== null) {

  /* eslint-disable */
  var flkty = new Flickity('.category-cards', {
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    groupCells: true
  });
  /* eslint-enable */

}

import galite from 'ga-lite'

galite('create', 'UA-88189921-1', 'auto')
galite('send', 'pageview')
