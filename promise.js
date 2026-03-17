const prom = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = true;
        if (!error){
            resolve({message:`Promise resolved`});
        } 
        else{
            reject({message:`Promise reject`});
        }
    },2000);
});
console.log("promise default",prom);
prom.then((res)=>console.log("Sucess",res))
   .catch((err)=>console.log("Errror",err));

   
