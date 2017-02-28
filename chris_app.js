'use strict';

var keycode_letters = {
  key_nums: [65, 83, 68, 70, 71, 72, 74, 75, 76, 186],//key codes
  key_letters: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'],//array of keys
  key_sounds: ['sounds/sound1.mp3', 'sounds/sound2.mp3', 'sounds/sound3.mp3'
  , 'sounds/sound4.mp3', 'sounds/sound5.mp3', 'sounds/sound6.mp3'
  , 'sounds/sound7.mp3', 'sounds/sound8.mp3', 'sounds/sound9.mp3'
  , 'sounds/sound10.mp3']//array of file names for sounds
};

//adds a listener to the page that records keycodes and plays corresponding sounds + vids
window.addEventListener('keydown', keyHandler);
function keyHandler (event) {
  for (var i = 0; i < keycode_letters.key_nums.length; i++) {
    if (event.keyCode === keycode_letters.key_nums[i]) {
      var filepath = keycode_letters.key_sounds[i];
      var audio = document.getElementById(event.keyCode.toString());
      audio.src = filepath;
      audio.play();
    }
  }
}