'use strict';
// across the three arrays there are common forms which you're trying to keep
// track of by remembering which index corresponds to which. If you have specific
// data that you need to keep track of this is generally a good use case for an
// object or constructor.
// something like:
// function Key(code, letter, file) {
//   this.code = code;
//   this.letter = letter;
//   this.file = file;
// }
// You could even put the play method on the prototype!
// Key.prototype.play = function() {
//   var audio = document.getElementById(this.code);
//   var square = document.getElementById('square' + this.code);
//
//   square.classList.add('foo');
//   audio.src = this.file;
//   audio.onended = function() {
//     square.className = 'key';
//   };
//   audio.play();
// }
var keycode_letters = {
  key_nums: [81,87,69,82,84,89,85,73,79,80,65, 83, 68, 70, 71, 72, 74, 75, 76,90,88,67,86,66,78,77,],//key codes
  key_letters: ['Q','W','E','R','T','Y','U','I','P','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','Z','X','C','V','B','N','M'],//array of keys
  key_sounds: ['sounds/darius_sounds/clip1.mp3', 'sounds/darius_sounds/clip2.mp3', 'sounds/darius_sounds/clip3.mp3'
  , 'sounds/darius_sounds/clip4.mp3', 'sounds/darius_sounds/clip5.mp3', 'sounds/darius_sounds/clip6.mp3'
  , 'sounds/darius_sounds/clip7.mp3', 'sounds/darius_sounds/clip8.mp3', 'sounds/darius_sounds/clip9.mp3'
  , 'sounds/darius_sounds/clip10.mp3','sounds/darius_sounds/clip11.mp3','sounds/darius_sounds/clip12.mp3','sounds/darius_sounds/clip13.mp3','sounds/darius_sounds/clip14.mp3','sounds/darius_sounds/clip15.mp3','sounds/darius_sounds/clip16.mp3','sounds/darius_sounds/clip17.mp3','sounds/darius_sounds/clip18.mp3','sounds/darius_sounds/clip20.mp3','sounds/darius_sounds/clip21.mp3','sounds/darius_sounds/clip22.mp3','sounds/darius_sounds/pop.mp3','sounds/darius_sounds/rrr.mp3','sounds/darius_sounds/ooo.mp3','sounds/darius_sounds/Simmons ClapTrap-13.mp3','sounds/darius_sounds/ppp.mp3',],//array of file names for sounds
};

//adds a listener to the page that records keycodes and plays corresponding sounds + vids
window.addEventListener('keydown', keyHandler);
function keyHandler (event) {
  for (var i = 0; i < keycode_letters.key_nums.length; i++) {
    if (event.keyCode === keycode_letters.key_nums[i]) {
      var audio = document.getElementById(event.keyCode.toString());
      console.log(audio);
      // even if you didn't have stuff in objects you could clean up the code at the top a little bit
      // by concatenating the path here. So doing something like:
      // var filepath = 'sounds/darius_sounds/' + key_letters.key_sounds[i];
      var filepath = keycode_letters.key_sounds[i];
      audio.onended = function() {
        // it doesn't seem like this variable is being used for anything. You can
        // probably just leave it out.
        var element = document.getElementById('square' + event.keyCode.toString()).className = 'key';
      };
      audio.src = filepath;
      var element = document.getElementById('square' + event.keyCode.toString()).className += ' foo' ;
      audio.play();
    }
  }
};





