const express= require ("express");
const handlebars= require("express-handlebars");
const app= express();

const mongodbConnection = require("./configs/mongodb_connection");

app.engine("handlebars", handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+ '/views');

app.get("/", (req, res)=>{
    res.render('home', {title: '게시판', message: '만나서 반갑습니다'});
});

app.get("/write", (req, res)=>{
    res.render('write', {title: '게시판'});
});

let collection;

app.listen(3000, async()=>{
    console.log('Server Started');
    const mongoClient= await mongodbConnection();
    collection = mongoClient.db().collection('post');
    console.log('MongoDB Connected');
});

