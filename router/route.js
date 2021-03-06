let fs = require('fs');
let control = require('../control');
let express = require('express');
const { render } = require('ejs');
let router = express.Router();

router.get('/', (req,res)=>{  
    let total = control.getTotal();
    let list = control.getList();

    //템플릿에 넘겨줄 데이터 구성, setTimeout으로 감싼 이유는 res.render에 넘겨주는 데이터가 앞의 비동기함수에 의해 undefined로 형성되지 않기 위해서이다.
    setTimeout(()=>{
        console.log(list);
        res.render('index.ejs', {   
            title: "MANAGE MY MONEY",
            total: total,
            list: list,
        })
    },0);
})
router.get('/update', (req,res)=>{
        res.render('./update/update.ejs', {
            title: "UPDATE",
            list: control.getList()
    })
})
router.post('/update-process', (req,res)=>{
        let id = req.body.id;
        let money = req.body.money;

        console.log(req.body);  

        fs.writeFileSync(`./data/bank/${id}`, req.body.money);
        control.updateTotal();

        res.redirect('/');
})

router.get('/delete', (req,res)=>{
    res.render('./delete/delete.ejs', {
        title: 'DELETE',
        total: control.getTotal(),
        list: control.getList(),
    })
})

router.post('/delete-process', (req,res)=>{
    let id = req.body.id;
    fs.rmSync(`data/bank/${id}`);
    control.updateTotal();

    res.render('./delete/delete.ejs', {
        title: 'DELETE',
        total: control.getTotal(),
        list: control.getList(),
    })
})

router.get('/add', (req,res)=>{
    res.render('add/add.ejs', {
        title: 'ADD',
    })
})

router.post('/add-process', (req,res)=>{
    let id = req.body.id;
    let value = req.body.value;
    
    fs.writeFileSync(`data/bank/${id}`, value);
    control.updateTotal();
    res.redirect('/');
})


module.exports = router;