const fs = require('fs');

module.exports = {
    getTotal : function(){
        return fs.readFileSync('./data/total')
    },
    updateTotal : function(){
        let total = 0;
        let files = fs.readdirSync('./data/bank', 'utf-8')
        for(let i=0; i<files.length; i++){
            total += Number(fs.readFileSync(`./data/bank/${files[i]}`, 'utf-8'));
        }
        fs.writeFile('./data/total', `${total}` ,'utf-8', (err)=>{
            if(err) console.log("failed to write file");
            else console.log("total file write success");
            console.log(`TOTAL MONEY : ${total}`)
        })
    },
    getList : function(){
        let list = []
        let filelist = fs.readdirSync('./data/bank', 'utf-8');
        
        for(let i=0; i<filelist.length; i++){
            list[i] = {};
            list[i].name = filelist[i];
            list[i].value = fs.readFileSync(`./data/bank/${filelist[i]}`,'utf-8');
        }
        return list;
    },
    
}
