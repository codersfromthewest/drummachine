'use strict';
var key_arr = document.getElementsByClassName('key');
var border = document.getElementById('key-container');
var keycode_letters = {
  key_nums: [82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76],//key codes
  key_letters: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'],//array of keys
  key_sounds: ['sounds/bass1.mp3', 'sounds/sound2.mp3', 'sounds/sound3.mp3'
  , 'sounds/sound4.mp3', 'sounds/sound5.mp3', 'sounds/sound6.mp3'
  , 'sounds/sound7.mp3', 'sounds/sound8.mp3', 'sounds/sound9.mp3'
  , 'sounds/sound4.mp3', 'sounds/sound5.mp3', 'sounds/sound6.mp3'
  , 'sounds/sound4.mp3', 'sounds/sound5.mp3', 'sounds/sound6.mp3'
  , 'sounds/sound10.mp3'],//array of file names for sounds
};

//var rotate = document.getElementsByClassName('record-div');
//rotate[i].classList.toggle('spinning-div');
//adds a listener to the page that records keycodes and plays corresponding sounds + vids
window.addEventListener('keydown', keyHandler);
window.addEventListener('keyup', upHandler);

function keyHandler (event) {
  if(keycode_letters.key_nums.includes(event.keyCode)){
    for (var i = 0; i < keycode_letters.key_nums.length; i++) {
      key_arr[i].classList.toggle('keytwo');
      if (event.keyCode === keycode_letters.key_nums[i]) {
        var audio = document.getElementById(event.keyCode.toString());
        var filepath = keycode_letters.key_sounds[i];
        audio.src = filepath;
        audio.play();
        key_arr[i].classList.toggle('keythree');
        border.style.boxShadow = '2px 2px 5px 5px white';
      }
    }
  }
};

function upHandler (event) {
  if(keycode_letters.key_nums.includes(event.keyCode)){
    border.style.boxShadow = 'none';
    for (var i = 0; i < keycode_letters.key_nums.length; i++) {
      key_arr[i].classList.toggle('keytwo');
      if (event.keyCode === keycode_letters.key_nums[i]) {
        key_arr[i].classList.toggle('keythree');
      }
    }
  }
}

//toggle method, class list

//potential deleted

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var audioElement = document.getElementById('68');
var audioSrc = audioCtx.createMediaElementSource(audioElement);
var analyser = audioCtx.createAnalyser();

  // Bind our analyser to the media element source.
audioSrc.connect(analyser);
audioSrc.connect(audioCtx.destination);