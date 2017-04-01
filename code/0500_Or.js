'use strict';

let tel = '010-61591234';
let tel2 = '0316-3666086';

let telReg = new RegExp(/(0\d{2}-\d{8})|0\d{3}-\d{7}/);
console.log(telReg.test(tel));
console.log(telReg.test(tel2));

