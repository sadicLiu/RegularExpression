'use strict';


/*
* \b代表的是单词的分隔符
* */
let str = 'hi history him hi';

let regex = new RegExp(/\bhi\b/);
console.log(regex.exec(str));

/*
* .匹配除了换行符以外的任意字符
* *指定前边的内容可以连续重复使用任意次
* */
let str2 = 'hi history him hi Lucy';

let regex2 = new RegExp(/\bhi\b.*\bLucy\b/);
console.log(regex2.exec(str));
console.log(regex2.exec(str2));

/*
* \d匹配一位数字
* -只匹配它本身
* */
let phone = '010-61593333';

let phoneReg = new RegExp(/0\d\d-\d\d\d\d\d\d\d\d/);
console.log(phoneReg.exec(phone));

/*
* {num}简化上面的表达式
* */
let phoneReg2 = new RegExp(/0\d{2}-\d{8}/);
console.log(phoneReg2.exec(phone));

/*
* {5,12} 表示5到12
* */
let qqReg = new RegExp(/\d{5,12}/);
let qq = `190978752`;
let notQQ = '123';
console.log(qqReg.test(qq));
console.log(qqReg.test(notQQ));

/*
* ^表示开头
* $表示结尾
* */
let idReg = new RegExp(/^\d{1,5}$/);
let id = '1';
let notId = 'a1';
console.log(idReg.test(id));
console.log(idReg.test(notId));