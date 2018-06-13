const express = require("express");
const mongoose = require('mongoose');
//新建app
const app = express();
//链接mongo
const DB_URL = 'mongodb://localhost:27017';
/**
 * 连接
 */
mongoose.connect(DB_URL);

// /**
//   * 连接成功
//   */
mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection open to ' + DB_URL);  
});    

// /**
//  * 连接异常
//  */
// mongoose.connection.on('error',function (err) {    
//     console.log('Mongoose connection error: ' + err);  
// });   

// /**
//  * 连接断开
//  */
// mongoose.connection.on('disconnected', function () {    
//     console.log('Mongoose connection disconnected');  
// });   
// mongoose.connection('connected',function(){
//     console.log('mongo connect success');
// });
//类似于mysql的表
const User = mongoose.model('user', new mongoose.Schema({
    name:{type:String,require:true},
    age:{type:Number,require:true}
}));
//新增数据
User.create({
    name:'wangchuanyan',
    age:19
},function(err,doc){
    if(!err){
        console.log(doc);
    }else{
        console.log(err);
    }
});
// User.remove({
//     age:19
// },function(err,doc){
//     if(!err){
//         console.log(doc);
//     }else{
//         console.log(err);
//     }
// });
// User.update({
//     name:"wangchuanyan"},
//     {'$set':{age:2}}
// ,function(err,doc){
//     if(!err){
//         console.log(doc);
//     }else{
//         console.log(err);
//     }
// });
app.get('/',function(req,res){
    User.find({},function(err,doc){
        res.json(doc)
    });
    // res.send("hello world");
})
app.get('/data',function(req,res){
    User.find({},function(err,doc){
        res.json(doc)
    });
    // res.json({"name":"tjianjinying"});
})

app.listen(9093,function(){
    console.log('Node app start at port 9093')
})