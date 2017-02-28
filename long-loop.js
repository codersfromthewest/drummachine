'use strict';
var key_nums = [65, 83, 68, 70, 71, 72, 74, 75, 76];//key codes
// var key_letters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';']; //array of keys
var key_sounds = ['sounds/bass1.mp3', 'sounds/birds.mp3', 'sounds/drumloop-1.mp3', 'sounds/dubstep-drums1.mp3', 'sounds/hip-hop-drums1.mp3', 'sounds/jazz.mp3', 'sounds/marley.mp3', 'sounds/taiko.mp3', 'sounds/tremelo.mp3'];


// var clickToRotate = document.getElementsByClassName('record-div');
// var clickToPlay = document.getElementsByClassName('audio-element');

window.addEventListener('keydown', keyHandler);

function keyHandler (event) {
  for (var i = 0; i < key_nums.length; i++) {
    if (event.keyCode === key_nums[i]) {
      // var filepath = key_sounds[i];
      var audio = document.getElementById(event.keyCode.toString());
      audio.src = key_sounds[i];
      audio.play();
      var rotate = document.getElementsByClassName('record-div');
      if (rotate[i].getAttribute('class') === 'record-div'){
        rotate[i].setAttribute('class', 'spinning-div');
      } else {
        rotate[i].setAttribute('class', 'record-div');
      }
    }
  }
}

// for(var i = 0; i < clickToRotate.length; i++) {
//   clickToRotate[i].addEventListener('keydown', clickHandlerRotate);
// }

// for(var j = 0; j < clickToPlay.length; j++) {
//   clickToPlay[i].addEventListener('keydown', clickHandlerPlay);
// }




