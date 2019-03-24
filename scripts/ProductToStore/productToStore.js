
function searchProduct(sku)
{
    var query = 'products' +'/'+sku;
    var resultQuery = queryToAPI(query,'get');
    resultQuery.then((result)=>{
        var resJSON = JSON.parse(result.target.response);
        showModalProduct(resJSON);
    }).catch((err)=>
    {
        console.log(err);
    });
}

function showModalProduct(product)
{
    console.log(product); 
    if(product.length != 0)
    {
        var prdTitle = document.getElementById('txtProductTitleModal');
        var prdSKU = document.getElementById('txtProductSKUModal');
        var prdURL = document.getElementById('txtProductURLModal');
        prdTitle.textContent = product[0].Title;    
        prdSKU.textContent = product[0].SKU;
        //prdURL.textContent = product[0].ShortURL;
        var link = document.createElement('a');
        link.setAttribute('href',product[0].ShortURL);
        link.setAttribute('target','_blank');
        link.textContent = product[0].ShortURL;
        prdURL.appendChild(link);

        ProductSearchModal.style.display = 'block';
    }
    else{        
        NotFoundModal.style.display = 'block';
        setTimeout(()=>{
            NotFoundModal.style.display = 'none';
        },1500);
       }
   
}

//this function appends a new product to the table
function appendPrdToTable(sku)
{    
    if(sku.length != 0)
    {
        //Get the product again from the service
        var query = 'products' +'/'+sku;
        var resultQuery = queryToAPI(query,'get');
        resultQuery.then((result)=>{
            var resJSON = JSON.parse(result.target.response);  
            console.log(resJSON);
            
            var tr = document.createElement('tr');
            var th1 = document.createElement('th');
            th1.textContent = resJSON[0].Title;
            var th2 = document.createElement('th');
            th2.textContent = resJSON[0].SKU;
            var link = document.createElement('a');
            link.setAttribute('href',resJSON[0].ShortURL);
            link.setAttribute('target','_blank');
            link.textContent = resJSON[0].ShortURL;
            var th3 = document.createElement('th');
            //th3.textContent = link;
            th3.appendChild(link);
            var listBtn = document.createElement('button');
            listBtn.setAttribute('class','btn-primary');
            listBtn.textContent = "List";
            var dltBtn = document.createElement('button');
            dltBtn.setAttribute('class','btn-danger');
            dltBtn.textContent = "Delete";
            var th4 = document.createElement('th');
            th4.appendChild(listBtn);
            th4.appendChild(dltBtn);
            
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            tr.appendChild(th4);
            productContentBody.appendChild(tr);
            ProductSearchModal.style.display = 'none';
            
        }).catch((err)=>
        {
            console.log(err);
        });     
    }    
}