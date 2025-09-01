 // Imediately Invoke function expressions (IIFE)

(function user(){
    console.log("DB Connected")
 })();

 ((name)=>{
    console.log(`DB Connected again ${name}`);
 })('Rachna');
