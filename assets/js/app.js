/* eslint-disable */
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-88189921-1');
/* eslint-enable */

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
