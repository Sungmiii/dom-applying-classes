// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()
    
  // Your turn! Create a new function called `two`, then call it from here.
  two()
  three()
  makeVisible()
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('pink')
}

// CREATE FUNCTION two HERE
function two() {
  var two = document.getElementById('two');
  two.classList.add('gray');
  
};
// CREATE FUNCTION three HERE
function three() {
  var three = document.getElementById('three');
  three.classList.add('aquamarine');
};
// CREATE FUNCTION makeVisible HERE
function makeVisible() {
  var makeVisible = document.getElementsByClassName('invisible')[0];
  makeVisible.classList.add('visible');
  var visible = document.getElementsByClassName('invisible')[0];
  visible.addEventListener('mouseenter', makeSky);
  visible.addEventListener('mouseleave', makeWhite);
}
function makeSky(evt) {
  evt.target.style.backgroundColor = 'skyblue';
}
function makeWhite(evt) {
  evt.target.style.backgroundColor = 'white';
}