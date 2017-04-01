'use strict';

let str = 'test.js';

let regex = new RegExp(/\w*\.js/);

console.log(regex.test(str));

