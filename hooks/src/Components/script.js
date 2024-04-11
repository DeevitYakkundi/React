// simple promise to google , 
function makeRequest(location){ 
    return new Promise((resolve,reject)=>{
        console.log('Making request to' + location)
        if(location==="Google"){
            resolve('Google Search');
        }
        else{
            reject('We need Google');
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject)=> {
        console.log('Processing Request');
        resolve('Extra Info '+ response)
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