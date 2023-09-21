const readline = require('readline'); 
const rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
});
function calculateSalary(){readline.clearScreenDown
    rl.question('Name:',(Nname) =>{ 
        rl.question('No of days worked :', (Nwork) =>{2
            rl.question('No of Hours worked :', (Nhours) =>{5
                const hours = parseFloat (Nhours); 
                const days = parseFloat(Nwork);
                const salary = hours*days*100;
                console.log(`${Nname} your salary is ${salary}`); 
                rl.close();
            });
        });
	});
};
calculateSalary();