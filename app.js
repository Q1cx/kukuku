const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('Server is running...');
})

//设置cookie
app.get('/setc', (req, res) => {
    //设置单个cookie
    //res.setHeader('set-cookie', 'id=1001');

    //设置多个cookie，参数2使用数组形式
    //res.setHeader('set-cookie', ['color=red', 'bgcolor=blue']);

    //参数1: 状态码
    //参数2: 要设置的响应头信息 -- 对象形式
    // res.writeHeader(200, {
    //     'content-type': 'text/html;charset=utf-8',
    //     'set-cookie': ['width=200', 'height=300']
    // })

    //设置cookie有效期为1小时
    //先获取一个小时之后的时间戳，再转换为UTC时间
    const t = new Date(Date.now() + 3600000).toUTCString();
    res.setHeader('set-cookie', 'id=1;expires=' + t);

    res.end('设置成功');
})

//读取cookie
const qs = require('querystring');
app.get('/getc', (req, res) => {
    console.log(req.headers.cookie);
    const obj = qs.parse(req.headers.cookie, '; ', '=');
    console.log(obj);
    res.end('ok');
})