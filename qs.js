//querystring是一个系统模块
//里面的parse方法能够将特定格式字符串转换为对象
const qs = require('querystring');

const str = 'id=1001;name=zs;age=20';
//参数1: 要转换的字符串
//参数2: 第一次分割使用的字符标记
//参数3: 第二次分割使用的字符标记
const obj = qs.parse(str, ';', '=');

console.log(obj); //{id:1001, name:"zs", age:20}


const str1 = 'color=red&bgcolor=blue';
const obj1 = qs.parse(str1, '&', '=');
console.log(obj1);  //{color:"red", bgcolor:"blue"}
