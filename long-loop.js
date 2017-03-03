'use strict';
var key_nums = [65, 83, 68, 70, 71, 72, 74, 75, 76];//key codes
// var key_letters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';']; //array of keys
var key_sounds = ['sounds/roads.mp3', 'sounds/clicks.mp3', 'sounds/kick.mp3', 'sounds/marley2.mp3', 'sounds/claps.mp3', 'sounds/marley1.mp3', 'sounds/hihat.mp3', 'sounds/horns.mp3', 'sounds/subbass.mp3'];

window.addEventListener('keydown', keyHandler);

function keyHandler (event) {
  for (var i = 0; i < key_nums.length; i++) {
    if (event.keyCode === key_nums[i]) {

      var audio = document.getElementById(event.keyCode.toString());
      var rotate = document.getElementsByClassName('record-div');
      rotate[i].classList.toggle('spinning-div');
      console.log('audio element selected', audio, audio.currentTime, audio.paused);
      if(audio.currentTime === 0) {
        console.log('playing');
        audio.src = key_sounds[i];
        audio.play();
      } else {
        console.log('not playing');
        audio.pause();
        audio.currentTime = 0;
      }
    }
  }
}



