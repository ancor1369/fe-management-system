const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'assets/logo.png';

const containder = document.createElement('div');
containder.setAttribute('class','container');
app.appendChild(logo);
app.appendChild(containder);


var productForm = document.createElement('form');
productForm.setAttribute('class','mb3');
var fset = document.createElement('fieldset');



var lblDesc = document.createElement('label');
lblDesc.textContent = "Product mainline description";
lblDesc.setAttribute('for','txtDesc');
var txtDesc = document.createElement('input');
txtDesc.setAttribute('class','form-control');
txtDesc.setAttribute('id','txtDesc');
txtDesc.setAttribute('placeholder','Enter product description');

fset.appendChild(lblDesc);
fset.appendChild(txtDesc);

var lblSKU = document.createElement('label');
lblSKU.textContent = 'SKU';
lblSKU.setAttribute('for','txtSKU');
var txtSKU =  document.createElement('input');
txtSKU.setAttribute('class','form-control');
txtSKU.setAttribute('id','txtSKU');
txtSKU.setAttribute('placeholder','Enter product SKU');

fset.appendChild(lblSKU);
fset.appendChild(txtSKU);


var lblURL = document.createElement('label');
lblURL.textContent = 'URL';
lblURL.setAttribute('for','txtURL');
var txtURL =  document.createElement('input');
txtURL.setAttribute('class','form-control');
txtURL.setAttribute('id','txtURL');
txtURL.setAttribute('placeholder','Enter product URL');

fset.appendChild(lblURL);
fset.appendChild(txtURL);

var lblModel = document.createElement('label');
lblModel.textContent = 'Model';
lblModel.setAttribute('for','txtModel');
var txtModel =  document.createElement('input');
txtModel.setAttribute('class','form-control');
txtModel.setAttribute('id','txtModel');
txtModel.setAttribute('placeholder','Enter product Model');

fset.appendChild(lblModel);
fset.appendChild(txtModel);

var lblPrice = document.createElement('label');
lblPrice.textContent = 'Price';
lblPrice.setAttribute('for','txtPrice');
var txtPrice =  document.createElement('input');
txtPrice.setAttribute('class','form-control');
txtPrice.setAttribute('id','txtPrice');
txtPrice.setAttribute('placeholder','Enter product Price');

fset.appendChild(lblPrice);
fset.appendChild(txtPrice);

var btnCreate = document.createElement('button');
//btnCreate.setAttribute('type','submit');
btnCreate.setAttribute('class','btn btn-primary');
btnCreate.setAttribute('id','btnCreate');
btnCreate.textContent = 'Create';

fset.appendChild(btnCreate);


productForm.appendChild(fset);
app.appendChild(productForm);

var elem= document.getElementById('btnCreate');

elem.addEventListener('click',()=>
{
    var Description = document.getElementById('txtDesc');
    var SKU = document.getElementById('txtSKU');
    var URL = document.getElementById('txtURL');
    var Model = document.getElementById('txtModel');
    var Price = document.getElementById('txtPrice');
    console.log(Price.value);
    console.log(Description.value);
    console.log(SKU.value);
    console.log(URL.value);
    console.log(Model.value);
    alert('Wait!!');
    
});