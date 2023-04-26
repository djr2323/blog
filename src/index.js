const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;

const newController = require('../src/app/controllers/NewController')

const route = require('./routes')

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'css')))
app.use(express.static(path.join(__dirname, 'img')))
app.use(express.urlencoded(
    {
        extended:true
    }
))
app.use(express.json())
//HTTP logger
app.use(morgan('combined'));

// templates-engine
app.engine('hbs',handlebars({
    extname:'hbs'
}))
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resource/views'))
console.log( "Path: ", path.join(__dirname,'resource/views'));

route(app)


app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`));