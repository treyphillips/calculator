var operation;
var displayedNumber;

function plusPressed(e){
  e.preventDefault();
  operation = '+';
  console.log('yes')
}

function minus(e){
  e.preventDefault();
  operation = '-';
}

function timesThat(e){
  e.preventDefault();
  operation = '*';
}

function divided(e){
  e.preventDefault();
  operation = '/';
}

function equals(e){
  e.preventDefault();
  operation = '='
}


function calculate() {
  event.preventDefault();
  var value = document.getElementById('screen').value;
  document.getElementById('screen').value = value + '';
}



function numberPressed(number){

  var monkey = document.getElementById('screen').textContent;

  displayedNumber = Number(document.getElementById('screen').textContent);

  if(operation == '+') {
    displayedNumber = displayedNumber + number;

  } else if(operation == '-') {
    displayedNumber = displayedNumber - number;

  } else if(operation == '*') {
    displayedNumber = displayedNumber * number;

  } else if(operation == '/') {
    displayedNumber = displayedNumber / number;

  } else {
    displayedNumber = number;
  }

  if (monkey=='0'){
    document.getElementById('screen').textContent = displayedNumber
  } else {
    document.getElementById('screen').textContent = document.getElementById('screen').textContent + displayedNumber;
  }

  // document.getElementById('screen').textContent = document.getElementById('screen').textContent + displayedNumber;
}


function onePressed(event) {
  event.preventDefault();
  numberPressed(Number(1));
}

function twoPressed(event) {
  event.preventDefault();
  numberPressed(Number(2));
}

function threePressed(event) {
  event.preventDefault();
  numberPressed(Number(3));
}

function fourPressed(event) {
  event.preventDefault();
  numberPressed(Number(4));
}

function fivePressed(event) {
  event.preventDefault();
  numberPressed(Number(5));
}

function sixPressed(event) {
  event.preventDefault();
  numberPressed(Number(6));
}

function sevenPressed(event) {
  event.preventDefault();
  numberPressed(Number(7));
}

function eightPressed(event) {
  event.preventDefault();
  numberPressed(Number(8));
}

function ninePressed(event) {
  event.preventDefault();
  numberPressed(Number(9));
}

function zeroPressed(event) {
  event.preventDefault();
  numberPressed(Number(0));
}




document.getElementById('1').addEventListener('click', onePressed);
document.getElementById('2').addEventListener('click', twoPressed);
document.getElementById('3').addEventListener('click', threePressed);
document.getElementById('4').addEventListener('click', fourPressed);
document.getElementById('5').addEventListener('click', fivePressed);
document.getElementById('6').addEventListener('click', sixPressed);
document.getElementById('7').addEventListener('click', sevenPressed);
document.getElementById('8').addEventListener('click', eightPressed);
document.getElementById('9').addEventListener('click', ninePressed);
document.getElementById('0').addEventListener('click', zeroPressed);
document.getElementById('+').addEventListener('click', plusPressed);
document.getElementById('-').addEventListener('click', minus);
document.getElementById('*').addEventListener('click', timesThat);
document.getElementById('/').addEventListener('click', divided);
document.getElementById('=').addEventListener('click', equals);
