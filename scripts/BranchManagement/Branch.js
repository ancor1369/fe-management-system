
//General function to interact with the API.
//Same method, different use cases

function promiseQuery(crud,method, message)
{
    console.log('Promise query');
    return new Promise((resolve,reject)=>{
        URL = queryURL;
        URL = concatPath(URL,crud);

        var request =  new XMLHttpRequest();

        request.open(method,URL,true);    
        if(message!=undefined) 
        {
            request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');       
            request.send(message);
        }
        else
        {
            request.send();
        }
        
        request.onload=function(result){
            if(result.target.status = 200)
            {
                resolve(result);
            }
            else{
                reject('Result not retrived');
            }
        }
    });
}

function promiseGetAll()
{
    return promiseQuery('store','get','');    
}


