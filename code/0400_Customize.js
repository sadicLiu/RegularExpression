'use strict';

let date = '2017-04-01';
let date2 = '2017/04/01';

let regex = new RegExp(/(\d{4})([-/])(\d{1,2})(\d{1,2})/);

console.log(regex.test(date));
console.log(regex.test(date2));
