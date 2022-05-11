'use strict';

var myData = require('./my-data.js'),
  Clock = require('./clock-es6'), //./clock-es5
  cucu = new Clock();

console.log(myData.name, myData.email, myData._phone);

cucu.on('tictac', function () {
  cucu.theTime();
});
