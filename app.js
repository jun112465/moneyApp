const express = require('express');
const app = express();

app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname+'/public'));

console.log(__dirname);


let server = app.listen(3000, ()=>{
    console.log("Express server has started on port 3000");
})


/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUnintialized: true
}));
*/
const router = require('./router/route')(app);

let test = require('./control');
test.getTotal();