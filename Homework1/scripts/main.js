
  let myImage = document.querySelector('img');
// meaningful interaction! (image switch with button)
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/testimage.jpg');
  } else {
    myImage.setAttribute ('src','images/me.jpeg');
  }
}

// meaningful interaction! (button + prompt to enter name)

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName, '!');
    myHeading.innerHTML = 'Hello ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hello ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}