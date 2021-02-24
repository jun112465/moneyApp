const fs = require('fs');

function Total(){
    let total = 0;
    fs.readdir('./data/bank', 'utf-8', (err, files)=>{
        if(err) console.log(err);
        for(let i=0; i<files.length; i++){
            // fs.readFile(`/data/${files[i]}`, (err, data)=>{
            //     console.log('data is '+data);
            //     total += data;
            //     console.log(total);
            // })
            console.log(i); 
            total += Number(fs.readFileSync(`./data/bank/${files[i]}`, 'utf-8'));
        }
        fs.writeFile('./data/total', `${total}` ,'utf-8', (err)=>{
            if(err) console.log("failed to write file");
            else console.log("total file write success");
            console.log(`TOTAL MONEY : ${total}`)
            return total;
        })
    });
}

module.exports.getTotal = Total;

