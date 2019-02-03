const app = document.getElementById('content-wraper');

var searchForm = document.createElement('form');
searchForm.setAttribute('class','d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0');
var skuSearchBox = document.createElement('input');
skuSearchBox.setAttribute('type','input');
skuSearchBox.setAttribute('class','form-control');
skuSearchBox.setAttribute('placeholder','Search SKU');
skuSearchBox.setAttribute('id','skuSearchBox');
var searchButton = document.createElement('button');
searchButton.setAttribute('class','btn btn-primary');
searchButton.setAttribute('id','searchButton');
var icon = document.createElement('i');
icon.setAttribute('class','fa fa-search');
searchButton.appendChild(icon);

searchForm.appendChild(skuSearchBox);
searchForm.appendChild(searchButton);
app.appendChild(searchForm);

searchButton.onclick() = function()
{
    var price = skuSearchBox.value;    
    searchOnePrice(price);
}