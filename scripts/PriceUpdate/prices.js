
// This function will retrive the requested price from the database
function searchOnePrice(price)
{
    return new Promise((resolve,reject)=>
    {
        URL = queryURL;
        URL = concatPath(URL,"prices");
        URL = concatPath(URL,price);

        var request =  new XMLHttpRequest();

        request.open('get',URL,true);
        request.send();
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.onload()=function(result){
            if(result.target.status = 200)
            {

            }
        }
    });
    
    
}