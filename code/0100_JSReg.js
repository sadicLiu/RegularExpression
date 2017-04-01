'use strict';

// 要在这个字符串中匹配
let str = "hello world!";

// 正则表达式
let regex = new RegExp("hello");

/*
 * RegExp.exec()
 * 一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回null）。
 * regexObj.exec(str)
 * */
function testExec() {
    /* 执行匹配*/
    let result = regex.exec(str);

    console.log('testExec: ' + result);
}

testExec();     // [ 'hello', index: 0, input: 'hello world!' ]


/*
 * RegExp.test()
 * 一个在字符串中测试是否匹配的RegExp方法，它返回true或false。
 * regexObj.test(str)
 * */
function testTest() {
    console.log('testTest: ' + regex.test(str));
}

testTest();     // true


/*
* String.match()
* 一个在字符串中执行查找匹配的String方法，它返回一个数组或者在未匹配到时返回null。
* str.match(regexp)
* */
function testMatch() {
    let result = str.match(regex);
    console.log('testMatch: ' + result);
}

testMatch();


/*
* String.search()
* 一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。
* str.search(regexp)
* */
function testSearch() {
    console.log(str.search('world'));
    console.log(str.search('hi'));
}

testSearch();