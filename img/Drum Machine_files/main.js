'use strict';
var users = [];
var kitImage = document.getElementsByClassName('kitimage');
var userForm = document.getElementById('name-form');
var icon_box = document.getElementById('icon-container');
var newUser;

console.log(localStorage.getItem('storedObjects'));
function User(name) {
  this.name = name;
  this.lastKit;
  this.image_src;
}

for(var i = 0; i < kitImage.length; i++) {
  kitImage[i].addEventListener('click', clickHandler);
}
function clickHandler(event) {
  if(localStorage.getItem('storedObjects') === null) {
    alert('duuuddee, what\'s your name?');
  } else {
    retrieve();
    var chosenKit = event.target.name;
    var target_src = event.target.src;
    console.log(chosenKit);
    users[0].lastKit = chosenKit;
    users[0].image_src = target_src;
    storage();
    console.log(localStorage.getItem('storedObjects'));
   //appends image
    if(icon_box.textContent === ''){
      var icon_image = document.createElement('img');
      icon_image.src = users[0].image_src;
      icon_image.id = 'last_icon';
      icon_box.appendChild(icon_image);
    }
  }
}

if(localStorage.getItem('storedObjects') === null) {

  //makes an listner for the form to store new object
  userForm.addEventListener('submit', submitHandler);
  function submitHandler(event) {
    event.preventDefault();
    var nameNode = document.getElementById('text-input');
    var userName = nameNode.value;

    var formParent = document.getElementById('form');
    var formChildren = document.getElementById('name-form', 'text-input', 'submit-button');
    formParent.removeChild(formChildren);

    newUser = new User(userName);
    users.push(newUser);
    console.log(newUser);
    var headerMessage = document.getElementById('header-message');
    headerMessage.textContent = 'Welcome, ' + userName;
  }


} else {

  retrieve();
// to remove text input if already done
  var formParent = document.getElementById('form');
  var formChildren = document.getElementById('name-form', 'text-input', 'submit-button');
  formParent.removeChild(formChildren);

  // adds name to header
  var headerMessage = document.getElementById('header-message');
  headerMessage.textContent = 'Welcome, ' + users[0].name;;
}


function storage() {
  var storedObjects = JSON.stringify(users);
  localStorage.setItem('storedObjects', storedObjects);
}

function retrieve () {
  var storedObjects = localStorage.getItem('storedObjects');
  storedObjects = JSON.parse(storedObjects);
  users = storedObjects;

}