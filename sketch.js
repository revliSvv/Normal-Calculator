var x = 0, y = 0, z;


function multiplyNumbers() {
  x = prompt('Enter first number to be multiplied.');
  y = prompt('Enter second number to be multiplied.');
  z = x*1 * y*1;
  document.getElementById('display').innerHTML =  z;
}

function divideNumbers() {
  x = prompt('Enter first number to be divided.');
  y = prompt('Enter second number to be divided.');
  z = x*1 / y*1;
  document.getElementById('display').innerHTML =  z;
}

function subtractNumbers() {
  x = prompt('Enter first number to be subtracted.');
  y = prompt('Enter second number to be subtracted.');
  z = x*1 - y*1;
  document.getElementById('display').innerHTML =  z;
}

function addNumbers() {
  x = prompt('Enter first number to be added.');
  y = prompt('Enter second number to be added.');
  z = x*1 + y*1;
  document.getElementById('display').innerHTML =  z;
}
