'use strict';

var keycode_letters = {
  key_nums: [81,87,69,82,84,89,85,73,79,80,65, 83, 68, 70, 71, 72, 74, 75, 76,90,88,67,86,66,78,77,],//key codes
  key_letters: ['Q','W','E','R','T','Y','U','I','P','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','Z','X','C','V','B','N','M'],//array of keys
  key_sounds: ['sounds/darius_sounds/clip1.mp3', 'sounds/darius_sounds/clip2.mp3', 'sounds/darius_sounds/clip3.mp3'
  , 'sounds/darius_sounds/clip4.mp3', 'sounds/darius_sounds/clip5.mp3', 'sounds/darius_sounds/clip6.mp3'
  , 'sounds/darius_sounds/clip7.mp3', 'sounds/darius_sounds/clip8.mp3', 'sounds/darius_sounds/clip9.mp3'
  , 'sounds/darius_sounds/clip10.mp3','sounds/darius_sounds/clip11.mp3','sounds/darius_sounds/clip12.mp3','sounds/darius_sounds/clip13.mp3','sounds/darius_sounds/clip14.mp3','sounds/darius_sounds/clip15.mp3','sounds/darius_sounds/clip16.mp3','sounds/darius_sounds/clip17.mp3','sounds/darius_sounds/clip18.mp3','sounds/darius_sounds/clip20.mp3','sounds/darius_sounds/clip21.mp3','sounds/darius_sounds/clip22.mp3','sounds/birds.mp3','sounds/tremelo.mp3','sounds/sound15.WAV','sounds/sound15.WAV','sounds/sound15.WAV','sounds/sound15.WAV'],//array of file names for sounds
};

//adds a listener to the page that records keycodes and plays corresponding sounds + vids
window.addEventListener('keydown', keyHandler);
function keyHandler (event) {
  for (var i = 0; i < keycode_letters.key_nums.length; i++) {
    if (event.keyCode === keycode_letters.key_nums[i]) {
      var audio = document.getElementById(event.keyCode.toString());
      console.log(audio);
      var filepath = keycode_letters.key_sounds[i];
      audio.onended = function() {
    var element = document.getElementById('square' + event.keyCode.toString()).className = 'key';
};
      audio.src = filepath;
      var element = document.getElementById('square' + event.keyCode.toString()).className += ' foo' ;
      audio.play();
    }
  }
};





