'use strict';
var users = [];
var kitImage = document.getElementsByClassName('kitimage');
var userForm = document.getElementById('name-form');
var newUser;

userForm.addEventListener('submit', submitHandler);

function User(name) {
  this.name = name;
  this.lastKit;
}

for(var i = 0; i < kitImage.length; i++) {
  kitImage[i].addEventListener('click', clickHandler);
}

function submitHandler(event) {
  event.preventDefault();
  var nameNode = document.getElementById('text-input');
  var userName = nameNode.value;

  var formParent = document.getElementById('form');
  var formChildren = document.getElementById('name-form', 'text-input', 'submit-button');
  formParent.removeChild(formChildren);

  newUser = new User(userName);
  users.push(newUser);
  console.log(newUser, users);

  var headerMessage = document.getElementById('header-message');
  headerMessage.textContent = 'Welcome, ' + userName;
  // localStorage.setItem('name', username);
}

function clickHandler(event) {
  if(!newUser) {
    alert('duuuddee, what\'s your name?');
  }
  var chosenKit = event.target.name;
  console.log(chosenKit);
  newUser.lastKit = chosenKit;
}
