'use strict';
var users = [];
var kitImageNode = document.getElementsByClassName('kitimage');
var userForm = document.getElementById('name-form');
var icon_box = document.getElementById('icon-container');
var headerText = document.getElementById('header');
var newUser;

console.log(localStorage.getItem('storedObjects'));
function User(name) {
  this.name = name;
  this.lastKit;
  this.image_src;
}

for(var i = 0; i < kitImageNode.length; i++) {
  kitImageNode[i].addEventListener('click', clickHandler);
}

function loadIcons() {
  if(localStorage.getItem('storedObjects') === null) {
    return;
  }
  retrieve();
  console.log('users before ', users);
  var lastTimeHeader = document.createElement('h3');
  var icon_image = document.createElement('img');
  icon_image.src = users[0].image_src;
  icon_image.className = 'last_icon';
  lastTimeHeader.textContent = 'Last time you chose:';
  icon_box.appendChild(lastTimeHeader);
  icon_box.appendChild(icon_image);
}

loadIcons();

function clickHandler(event) {
  event.preventDefault();
  if(localStorage.getItem('storedObjects') === null){
    alert('duuuddee, what\'s your name?');
  } else {
    retrieve();
    var chosenKit = event.target.name;
    var target_src = event.target.src;
    users[0].lastKit = chosenKit;
    users[0].image_src = target_src;
    storage();
   //appends image
    var icon_image = document.createElement('img');
    var lastTimeHeader = document.createElement('h3');
    icon_image.src = users[0].image_src;
    icon_image.className = 'last_icon';
    icon_box.appendChild(icon_image);
    lastTimeHeader.textContent = 'Last time you chose:';
    headerText.insertBefore(lastTimeHeader, headerText.childNodes[0]);
    window.location.href = event.target.dataset.link;
  }
}

if(localStorage.getItem('storedObjects') === null) {
  //makes an listener for the form to store new object
  userForm.addEventListener('submit', submitHandler);
  function submitHandler(event) {
    event.preventDefault();
    var nameNode = document.getElementById('text-input');
    var userName = nameNode.value;

    document.getElementById('kits').style.marginTop = '158px';
    var formParent = document.getElementById('form');
    var formChildren = document.getElementById('name-form', 'text-input', 'submit-button');
    formParent.removeChild(formChildren);

    newUser = new User(userName);
    users.push(newUser);
    console.log(newUser);
    var headerMessage = document.getElementById('header-message');
    headerMessage.textContent = 'Welcome, ' + userName;
    storage();
  }
} else {

  retrieve();
// to remove text input if already done
  var formParent = document.getElementById('form');
  var formChildren = document.getElementById('name-form', 'text-input', 'submit-button');
  formParent.removeChild(formChildren);

  // adds name to header
  var headerMessage = document.getElementById('header-message');
  headerMessage.textContent = 'Welcome, ' + users[0].name;
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
