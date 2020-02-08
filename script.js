/**********
 * Hoisting
 */

calcAge(1995);

function calcAge(year) {
  console.log(2020 - year);
}

// retirement(1991); *does not work*

var retirement = function(year) {
  console.log(60 - (2020 - year));
};

retirement(1997);

// Variables

console.log(age);
var age = 23;

function foo() {
  var age = 65;
  console.log(age);
}

foo();
console.log(age);
