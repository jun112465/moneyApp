let fs = require('fs');
let control = require('../control');

module.exports = function(app){
    app.get('/', (req,res)=>{  
        let total = control.getTotal();
        let list = control.getList();

        setTimeout(()=>{
            console.log(list);
            res.render('index.ejs', {   
                title: "MANAGE MY MONEY",
                total: total,
                list: list,
                length: 5
            })
        },0);
    })
}