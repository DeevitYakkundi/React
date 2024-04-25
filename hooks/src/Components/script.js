// simple function which returns a promise to google , 
function makeRequest(location){ 
    return new Promise((resolve,reject)=>{
        console.log('Making request to ' + location)
        if(location==="Google"){
            resolve('Google Search'); //if true -> resolve
        }
        else{
            reject('We need Google'); //else false -> reject
        }
    })
}

//simple function which returns a promise for processing
function processRequest(response){
    return new Promise((resolve,reject)=> {
        console.log('Processing Request');
        resolve('Extra Info '+ response) //if true -> resolve
    })
}

makeRequest('Google').then((message) => {  
    console.log("Response Recieved")
    return processRequest(message)
}).then((processedResponse)=> {
    console.log(processedResponse)
}).catch(err =>{
    console.log(err);
})

async function doWork(){
    try{
    const response = makeRequest('Facebook')
    console.log("Response Recieved")
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
    } catch (err){
        console.log(err)
    }
}
// doWork();