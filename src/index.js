const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'css')))
app.use(express.static(path.join(__dirname, 'img')))
//HTTP logger
app.use(morgan('combined'));

// templates-engine
app.engine('hbs',handlebars({
    extname:'hbs'
}))
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resource/views'))
console.log( "Path: ", path.join(__dirname,'resource/views'));

app.get('/', (req, res)=>res.render('home'));
app.get('/new', (req, res)=>res.render('news'));
app.get('/search',(req,ré)=>res.render('search'))
app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`));