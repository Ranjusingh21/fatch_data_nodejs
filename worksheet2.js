const fs = require('fs');
fs.readFile('worksheet2.txt', 'utf-8', (err, data)=>{
    if(err){
        console.error('Error readinng worksheet2.txt: ',err);
        }else{
            fs.writeFile('worksheet2.txt', data, (err)=>{
                if(err){
                console.error('Error reading worksheet2.txt: ',err);
            }else{
                console.log('Data transferred to worksheet2.txt')
            }
        });
    }
});