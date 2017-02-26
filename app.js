'use strict';
var audio = document.getElementById('audio_element');
var keycode_letters = {
  key_nums: [65, 83, 68, 70, 71, 72, 74, 75, 76, 186],//key codes
  key_letters: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'],//array of keys
  key_sounds: ['sounds/sound.WAV', 'sounds/sound2.WAV', 'sounds/sound3.WAV'
  , 'sounds/sound4.WAV', 'sounds/sound5.WAV', 'sounds/sound6.WAV'
  , 'sounds/sound7.WAV', 'sounds/sound8.WAV', 'sounds/sound9.WAV'
  , 'sounds/sound10.WAV'],//array of file names for sounds
  key_vids: []//array of file names for vids
};

//adds a listener to the page that records keycodes and plays corresponding sounds + vids
window.addEventListener('keydown', keyHandler);
function keyHandler (event) {
  for (var i = 0; i < keycode_letters.key_nums.length; i++) {
    if (event.keyCode === keycode_letters.key_nums[i]) {
      var filepath = keycode_letters.key_sounds[i];
      audio.src = filepath;
      audio.play();
    }
  }
}