'use strict';

var clickToRotate = document.getElementsByClassName('record-div');
var clickToPlay = document.getElementsByClassName('audio-element');

for(var i = 0; i < clickToRotate.length; i++) {
  clickToRotate[i].addEventListener('click', clickHandlerRotate);
}

for(var i = 0; i < clickToPlay.length; i++) {
  clickToPlay[i].addEventListener('click', clickHandlerPlay);
}

function clickHandlerRotate(event) {
  event.preventDefault();
  if(event.target.getAttribute('class') === 'record-div'){
    event.target.setAttribute('class', 'spinning-div');
  } else {
    event.target.setAttribute('class', 'record-div');
  }
}

function clickHandlerPlay(event) {
  event.preventDefault();
  if(event.target.getAttribute('ended')) {
    event.target.play();
  } else {
    event.target.pause();
  }
}



