// Source: https://github.com/bramstein/fontfaceobserver
var FontFaceObserver = require('fontfaceobserver');

var font = new FontFaceObserver('Inter var');

font.load().then(function () {
  document.documentElement.className += ' fonts-loaded';
});
