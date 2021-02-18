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

window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }

if (document.querySelector('#deploy-to-netlify') !== null) {
  document.getElementById('deploy-to-netlify').addEventListener('click', function(){
    plausible('Deploy to Netlify');
  });
}
/* eslint-enable */

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});
