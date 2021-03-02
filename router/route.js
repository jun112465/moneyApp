let fs = require('fs');
let bodyParser = require('body-parser');
let control = require('../control');



module.exports = function(app){
    app.get('/', (req,res)=>{  
        let total = control.getTotal();
        let list = control.getList();
        let _updatePage = ()=>{
            location.href = '/update';
        }

        //템플릿에 넘겨줄 데이터 구성, setTimeout으로 감싼 이유는 res.render에 넘겨주는 데이터가 앞의 비동기함수에 의해 undefined로 형성되지 않기 위해서이다.
        setTimeout(()=>{
            console.log(list);
            res.render('index.ejs', {   
                title: "MANAGE MY MONEY",
                total: total,
                list: list,
                updatePage: _updatePage,

            })
        },0);
    })
    app.get('/update', (req,res)=>{
        res.render('update.ejs', {
            title: "UPDATE"
        })
    })
    app.post('/update-process', (req,res)=>{
        console.log("post ok");
        console.log(req.body);

        fs.writeFileSync('./data/bank/kb02', req.body.money);
        control.updateTotal();

        res.render('index.ejs', {
            total: control.getTotal(),
            title: 'UPDATE'        
        })
    })
}