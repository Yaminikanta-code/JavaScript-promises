const promiseone=new Promise(function(resolve,reject){
    //do an asynch task like DB calls,cryptography,network calls etc
    setTimeout(function(){
        console.log("done");
        resolve();
    },2000)
})
//consuming promiseone
promiseone.then(function(){
    console.log("promiseone consumed");
})
//second promise
//short method
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task two");
        resolve();
    },2000)
}).then(function(){
    console.log("async task two resolved");
})

//third promise
//passing parameter via resolve
const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"john", email:"j@j.com"}); 
    },2000)
})

promisethree.then(function(user){
    console.log("user",user);
})
//fourth promise
//chaining of .then()
const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({name:"john", email:"j@j.com"});
        }
        else{
            reject("something went wrong");
        }
    },2000)
})
promisefour.then((data)=>{
    console.log("data",data);
    return data.name;  //returning data to next .then() called chaining
    
}).then((name)=>{
    console.log("name",name);
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})
//fifth promise 
//consuming promise by async await
const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({name:"JAVASCRIPT", password:"12345"});
        }
        else{
            reject("JS went wrong");
        }
    },2000)
})
async function consumepromisefive(){
    try{
        const response=await promisefive;
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
};

consumepromisefive();