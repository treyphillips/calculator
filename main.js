var operation = "";
var displayedNumber = "";
var monkey;
var string;
var bonobo;

function bonobo(input, character) {
  if(monkey == null || monkey == "0")
    input.textContent = character
    else
      input.textContent += character
    }

function plusPressed(e) {
  e.preventDefault();
  operation = '+';
  console.log('yes')
}

function minus(e) {
  e.preventDefault();
  operation = '-';
}

function timesThat(e) {
  e.preventDefault();
  operation = '*';
}

function divided(e) {
  e.preventDefault();
  operation = '/';
}

function equals(e) {
  e.preventDefault();
  operation = '='
}

function sq(e) {
  e.preventDefault();
  operation = "displayedNumber * number(monkey)";
}

function calculate() {
  event.preventDefault();
  var value = document.getElementById('screen').value;
  document.getElementById('screen').value = value + '';
}

function numberPressed(number) {

  var monkey = document.getElementById('screen').textContent;


  if (operation == '+') {
    displayedNumber = Number(monkey);
    document.getElementById('screen').textContent = displayedNumber + number;

  } else if (operation == '-') {
    displayedNumber = Number(monkey);
    document.getElementById('screen').textContent = displayedNumber - number;

  } else if (operation == '*') {
    displayedNumber = Number(monkey);
    document.getElementById('screen').textContent = displayedNumber * number;

  } else if (operation == '/') {
    displayedNumber = Number(monkey);
    document.getElementById('screen').textContent = displayedNumber / number;

  } else {
    if (monkey == 0) {
      document.getElementById('screen').textContent = number;
    } else {
      document.getElementById('screen').textContent = monkey + number;
    }
  }
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

function sq(e) {
  event.preventDefault();
  var monkey = document.getElementById('screen').textContent;
  if (monkey.length > 0) {
    document.getElementById('screen').textContent = monkey * monkey;
  }
}

function sqrt(e) {
  event.preventDefault();
  var monkey = document.getElementById('screen').textContent;
  if (monkey.length > 0) {
    document.getElementById('screen').textContent = Math.sqrt(monkey);
  }
}



// runs when you click the del button

function clear(event) {
  event.preventDefault();
  var monkey = document.getElementById('screen').textContent;
  if (monkey.length == 1) {
    document.getElementById('screen').textContent = '0'
  } else {
    var string = monkey;
    var newString = monkey.substring(0, monkey.length - 1);
    document.getElementById('screen').textContent = newString;
  }
}

// function ac(event) {
//   event.preventDefault();
//   var monkey = document.getElementById('screen').textContent;
//   if (monkey.length == 1) {
//     document.getElementById('screen').textContent = '0'
//   } else {
//     var string = monkey;
//     var newString = monkey.substring(0, monkey.length - monkey);
//     document.getElementById('screen').textContent = newString;
//   }
// }

// document.getElementById('ac').addEventListener('click', clear);
document.getElementById('sqrt').addEventListener('click', sqrt);
document.getElementById('sq').addEventListener('click', sq);
document.getElementById('del').addEventListener('click', clear);
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
