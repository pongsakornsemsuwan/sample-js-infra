import add from './calculator';

function printSomething(){
  console.log('print something please watch ');
  //console.log( add(a,b) );
}

printSomething();

window.onload = function(){
  document.getElementById('app').innerHTML = 'Hello JS';
}
