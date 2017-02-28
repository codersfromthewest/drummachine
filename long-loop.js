'use strict';
var key_nums = [65, 83, 68, 70, 71, 72, 74, 75, 76];//key codes
// var key_letters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';']; //array of keys
var key_sounds = ['sounds/bass1.mp3', 'sounds/birds.mp3', 'sounds/drumloop-1.mp3', 'sounds/dubstep-drums1.mp3', 'sounds/hip-hop-drums1.mp3', 'sounds/jazz.mp3', 'sounds/marley.mp3', 'sounds/taiko.mp3', 'sounds/tremelo.mp3'];

window.addEventListener('keydown', keyHandler);

function keyHandler (event) {
  for (var i = 0; i < key_nums.length; i++) {
    if (event.keyCode === key_nums[i]) {

      var audio = document.getElementById(event.keyCode.toString());
      var rotate = document.getElementsByClassName('record-div');

      rotate[i].classList.toggle('spinning-div');
      audio.src = key_sounds[i];
      console.log('audio element selected', audio, audio.paused);
      if(audio.currentTime > 0) {
        console.log('playing');
        audio.removeAttribute('loop', false);
      } else {
        console.log('not playing');
        audio.play();
        audio.setAttribute('controls', true);
      }
    }
  }
}



