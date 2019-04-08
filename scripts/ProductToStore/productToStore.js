
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

//This window allow the user to see what is the product that was found
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
    if(containElement(listProducts, sku))
    {        
        ProductSearchModal.style.display = 'none';
        return;
    }
    else{        
        listProducts.push(sku);
    }     
    
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
            dltBtn.textContent = "Remove";
            var th4 = document.createElement('th');
            th4.appendChild(listBtn);
            th4.appendChild(dltBtn);
            
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            tr.appendChild(th4);
            productContentBody.appendChild(tr);
            ProductSearchModal.style.display = 'none';

            listBtn.onclick = () =>{
                alert(th2.textContent);
            }
            dltBtn.onclick = ()=>{                
                productContentBody.removeChild(tr);                
                var res = removeElement(listProducts, th2.textContent);
                listProducts = res;
            }
            
        }).catch((err)=>
        {
            console.log(err);
        });     
    }    
}

function searchStore(number)
{
    var query = 'store' +'/'+number;
    var resultQuery = queryToAPI(query,'get');
    resultQuery.then((result)=>{
        var resJSON = JSON.parse(result.target.response);
        showModalStore(resJSON);
        console.log(resJSON);
    }).catch((err)=>
    {
        console.log(err);
    });
}

function showModalStore(StoreData)
{
    console.log(StoreData);
    
    if(StoreData.length != 0)
    {
        var storeName = document.getElementById('txtStoreNameModal');
        var storeNumber = document.getElementById('txtStoreNumberModal');
        var storeLocation = document.getElementById('txtStoreLocationModal');
    if(StoreData.length != 0)
        storeName.textContent = StoreData[0].Name;    
        storeNumber.textContent = StoreData[0].Number;
        storeLocation.textContent = StoreData[0].Address + ', ' +StoreData[0].city;
        storeModal.style.display = 'block';
    }
    else{        
        NotFoundModal.style.display = 'block';
        setTimeout(()=>{
            NotFoundModal.style.display = 'none';
        },1500);
       }
}

function appendStoreToTable(storeNumber)
{
    var query = 'store' +'/'+storeNumber;
    var resultQuery = queryToAPI(query,'get');
    if(containElement(listStores, storeNumber))
    {        
        storeModal.style.display = 'none';
        return;
    }
    else{        
        listStores.push(storeNumber);
    }    
    resultQuery.then((result)=>{
        var storeInfo = JSON.parse(result.target.response);
        var tr = document.createElement('tr');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');        
        var th4 = document.createElement('th');
        th1.textContent = storeInfo[0].Name;
        th2.textContent = storeInfo[0].Number;
        th3.textContent = storeInfo[0].Address + ', ' + storeInfo[0].City;
        var listButton =  document.createElement('button');        
        listButton.setAttribute('class', 'btn-primary');
        listButton.textContent='List';
        var deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'btn-danger');
        deleteButton.textContent = 'Remove';
        th4.appendChild(listButton);
        th4.appendChild(deleteButton);
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        storeContentBody.appendChild(tr);
        storeModal.style.display = 'none';
        listButton.onclick =()=>{
            alert('List');
        }        
        deleteButton.onclick = ()=>{
            storeContentBody.removeChild(tr);
            var res = removeElement(listStores, th2.textContent);
            listStores = res;
        }

    }).catch((err)=>
    {
        console.log(err);
    });
}