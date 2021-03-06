// /**********
//  * Hoisting
//  */

// calcAge(1995);

// function calcAge(year) {
//   console.log(2020 - year);
// }

// // retirement(1991); *does not work*

// var retirement = function(year) {
//   console.log(60 - (2020 - year));
// };

// retirement(1997);

// // Variables

// console.log(age);
// var age = 23;

// function foo() {
//   var age = 65;
//   console.log(age);
// }

// foo();
// console.log(age);

// /*********
//  * Scoping
//  */

// // // First scoping example
// // var a = 'Hello!';
// // first();

// // function first() {
// //   var b = 'Hi!';
// //   second();

// //   function second() {
// //     var c = 'Hey!';
// //     console.log(a, b, c);
// //   }
// // }

// // Second example to show difference between execution stack and scope chain
// var a = 'Hello!';
// first();

// function first() {
//   var b = 'Hi!';
//   second();

//   function second() {
//     var c = 'Hey!';
//     third();
//   }
// }

// function third() {
//   var d = 'John';
//   // console.log(c);
//   console.log(a, d);
// }

/******************
 * The this keyword
 */

// console.log(this);

calcAge(1997);

function calcAge(year) {
  console.log(2020 - year);
  console.log(this);
}

var frail = {
  name: 'Frail',
  yearOfBirth: 1997,
  calcAge: function() {
    console.log(this);
    console.log(2020 - this.yearOfBirth);

    /*
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
    */
  }
};

frail.calcAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calcAge = frail.calcAge;
mike.calcAge();
