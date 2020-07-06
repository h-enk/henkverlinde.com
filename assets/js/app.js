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

/* eslint-disable */

const galite = require('ga-lite')

galite('create', 'UA-88189921-1', 'auto')
galite('send', 'pageview')


// https://github.com/jehna/ga-lite
/*
(function(e,t,n,i,s,a,c){e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)}
;a=t.createElement(i);c=t.getElementsByTagName(i)[0];a.async=true;a.src=s
;c.parentNode.insertBefore(a,c)
})(window,document,"galite","script","https://henkverlinde.com/js/vendor/ga-lite/ga-lite.min.js");

galite('create', 'UA-88189921-1', 'auto');
galite('send', 'pageview');

window.addEventListener('unload', function() {
  galite('send', 'timing', 'JS Dependencies', 'unload')
})
*/
/* eslint-enable */
