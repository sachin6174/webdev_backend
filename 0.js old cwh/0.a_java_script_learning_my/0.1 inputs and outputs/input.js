const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
//   let t;
//   readline.question('', (name) => {
//     name=name.split();
//     x=Number(name[0]);
//     t=x;
//     while(t--){
//         readline.question('', (name) => {
//             console.log(name)
//             readline.close();
//         });
//     }
//     console.log(t)
//     readline.close();
//   });

t=3;
while(t--){
    readline.question('', (name) => {
        console.log(name);
        readline.close();
    });
    readline.question('', (name) => {
        console.log(name);
        readline.close();
    });
}






//   readline.question('', (name ) => {
//     x=JSON.parse(name)
//     console.log(`${x.name}, ${x.hometown.name}, ${x.hometown.id}`);
//     readline.close();
//   });

