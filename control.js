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

// function _updateTotal(){
//     let total = 0;
//     /*
//     fs.readdir('./data/bank', 'utf-8', (err, files)=>{
//         if(err) console.log(err);
//         for(let i=0; i<files.length; i++){
//             total += Number(fs.readFileSync(`./data/bank/${files[i]}`, 'utf-8'));
//         }
//         fs.writeFile('./data/total', `${total}` ,'utf-8', (err)=>{
//             if(err) console.log("failed to write file");
//             else console.log("total file write success");
//             console.log(`TOTAL MONEY : ${total}`)

//             return total; -> 이렇게 한다고 Total()함수에 total값이 리턴되지 않음
//             그렇다고 바깥쪽에 return을 해놓으면 0반환
//             따라서 그냥 동기적으로 함수를 만들었음
//         })
//     });
//     */

//     let files = fs.readdirSync('./data/bank', 'utf-8')
//     for(let i=0; i<files.length; i++){
//         total += Number(fs.readFileSync(`./data/bank/${files[i]}`, 'utf-8'));
//     }
//     fs.writeFile('./data/total', `${total}` ,'utf-8', (err)=>{
//         if(err) console.log("failed to write file");
//         else console.log("total file write success");
//         console.log(`TOTAL MONEY : ${total}`)
//     })
//     return total;
// }
// function _getTotal(){
//     return fs.readFileSync('./data/total')
// }

//module.exports.updateTotal = _updateTotal;
//module.exports.getTotal = _getTotal;


