// 项目管理包
// $npm init -y 
// 后端内容node.js
// $cnpm i express -S

// 安装依赖包
// cnpm i

var express = require("express");
var app = express();

// 创建静态目录./dist,默认访问index.html文件
// app.use(express.static("./dist"));



//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// req 客户端向服务器数据响应
// res 服务器向客户端数据响应
// get() 数据请求get请求post请求
// post()
// "/" 路由操作
// http://127.0.0.1:3000/
app.get("/",function(req,res){
    // 返回字符串 send()方法
    res.send("你好");
})

// 请求数据接口APi，获取数据
// http://127.0.0.1:3000/goodsApi
app.get("/goodsApi",function(req,res){
    // 返回对象 json()方法
    res.json({name:"商品名称",price:"22",num:1})
})
// 在服务器中定义变量，重启服务器会被初始化
var userList = [{
    username : '123',
    password : '123'
}];//全局数据变量
// 先注册用户，在登陆用户

// 登陆接口
// http://127.0.0.1:3000/login
app.get("/login",function(req,res){
    // let {username,password} = req.query;
    let password = req.query.password;
    let username = req.query.username;
    console.log(req.query,"req");
    console.log(req.query.password,"req");

    if(username == "" && password == ""){
        return; //终止路由操作
    }
    
    // 1.通过前端传递登陆信息
    // 2.使用前台登陆用户名，在后台中userList匹配到相同用户名密码，找到为登陆成功，找不到登陆失败
    
    // 使用前台用户名找userlist对象数据，对比密码
    let data = userList.find(item=>item.username == username);//返回对象
    console.log("返回对象",data);
    // 判断密码是否相同
    // console.log(password,"mima")
    if( data && data.password == password){
        res.send("200");
    }else{
        res.send("201");
    }

})

// 注册接口
// http://127.0.0.1:3000/register
// http://127.0.0.1:3000/register?username=zhangsan&password=123123&password2=123123
app.get("/register",function(req,res){
    // req.query获取get请求传递数据
    console.log(req.query);
    // 判断数据
    let {username,password,password2} = req.query;
    if(username != "" && password == password2 && password != ""){
        console.log("注册成功");
        userList.push({username,password});
        res.send("200");
    }else{
        res.send("201");
    }
})




app.listen(3000,"127.0.0.1",()=>{
    console.log("请访问:http://127.0.0.1:3000");
})