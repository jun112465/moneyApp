let fs = require('fs');

module.exports = function(app){
    app.get('/', (req,res)=>{  
        let total = fs.readFileSync('./data/total', 'utf-8');

        let kb01 = fs.readFileSync('./data/kb01', 'utf-8');
        console.log(kb01);
        //     if(err) throw err;
        //     console.log(data);
        // });
        // let kb02 = fs.readFileSync('./public/kb02', 'utf-8', (err,data)=>{
        //     if(err) throw err;
        //     console.log(data);
        // })
        let dir = fs.readdirSync('./data', 'utf-8');
        console.log(dir);

        fs.readdir('./data', 'utf-8', (err,files)=>{
            console.log(`async ${files[0]}`);
        })

        res.render('index.ejs', {   
            title: "MANAGE MY MONEY",
            total: total,
            length: 5
        })
    })
}