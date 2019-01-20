
//Object creation
//const app = document.getElementById('root');
const app = document.getElementById('content-wraper');

var btnCreate = document.createElement('button');
btnCreate.setAttribute('type','button');
btnCreate.setAttribute('class','btn btn-primary');
btnCreate.setAttribute('id','btnCreate');
btnCreate.textContent = 'Create';

const containder = document.createElement('div');
//containder.setAttribute('class','container');
containder.setAttribute('class','containe-fluid');
app.appendChild(btnCreate);
app.appendChild(containder);

var productForm = document.createElement('form');
productForm.setAttribute('class','mb3');
var fset = document.createElement('fieldset');

productForm.appendChild(fset);
app.appendChild(productForm);

//Main controls of the window1
var CreateModal = document.getElementById('createModal');
var buttonCreate = document.getElementById('btnCreate');
var EditModal = document.getElementById('editModal');
var alertSuccess = document.getElementById('Advertise');

///Modal windows getter
var btnCreatePRoduct = document.getElementById('btnCreateProduct');
var btnCancelProduct = document.getElementById('btnCancel');

var btnProdEdit = document.getElementById('btnEditProduct');
var bntPrdEditCancel = document.getElementById('btnEditCancel');

//Show creation modal
buttonCreate.onclick = function()
{
    CreateModal.style.display = "block";
}

//Hide product creation window without any changes
btnCancelProduct.addEventListener('click',()=>{
    CreateModal.style.display = "none";
});

//Hide edition modal
bntPrdEditCancel.onclick = function(){
    EditModal.style.display = "none";
}

//Populates the page with products
//loadProductsCards();
loadProductsTable();

//Clcik events
btnProdEdit.onclick = function()
{    
    var edtDesc = document.getElementById('txtEditDesc');
    var edtSku = document.getElementById('txtEditSKU');
    var edtUrl = document.getElementById('txtEditURL');
    var edtModel = document.getElementById('txtEditModel');
    var edtPrice = document.getElementById('txtEditPrice');
    var edtTecSpect = document.getElementById('txtEditTecSpect');
    var edtDueDate = document.getElementById('txtEditDueDate');
    
    const priceValue = edtPrice.value;

    var price = priceValue.split(',',2);
    if(price[1]==null)
    {
        price[1] = "00"
    }
    var message = JSON.stringify({
        PriceDollar: price[0],
        PriceCents: price[1],
        Description: edtDesc.value,
        URL: edtUrl.value,
        SKU: edtSku.value,
        Model: edtModel.value,
        DueDate: edtDueDate.value,
        TechSpect: edtTecSpect.value
        });
        console.log(message);
        edtProductReq(message);

        edtDesc = "";
        edtSku = "";
        edtUrl = "";
        edtModel = "";
        edtPrice = "";
        edtTecSpect = "";
        edtDueDate = "";
}



btnCreatePRoduct.onclick = function(){
        var Description = document.getElementById('txtDesc');
        var SKU = document.getElementById('txtSKU');
        var URL = document.getElementById('txtURL');
        var Model = document.getElementById('txtModel');
        var Price = document.getElementById('txtPrice'); 

        var price = Price.value.split('.',2);
        if(price[1]==null)
        {
            price[1] = "00"
        }
        var message = JSON.stringify({
            PriceDollar: price[0],
            PriceCents: price[1],
            Description: Description.value,
            URL: URL.value,
            SKU:SKU.value,
            Model:Model.value,
            DueDate: "1/2/3",
            TechSpect: "Pending to be implemented"
            });     
     crtProductReq(message);
     Description.value = "";
     SKU.value = "";
     URL.value = "";
     Model.value = "";
     Price.value = "";
}

function clearScreen()
{
    var element =  document.getElementById('root');
    console.log(element);
    element.parentNode.removeChild(element);
}

// var buttonDelete =  document.getElementById('deleteButton');

// buttonDelete.addEventListener('click',() =>{
//     console.log('Button clicked');
//     console.log(parameter);
// });


// elem.addEventListener('click',()=>
// {
//     var Description = document.getElementById('txtDesc');
//     var SKU = document.getElementById('txtSKU');
//     var URL = document.getElementById('txtURL');
//     var Model = document.getElementById('txtModel');
//     var Price = document.getElementById('txtPrice');
//     console.log(Price.value);
//     console.log(Description.value);
//     console.log(SKU.value);
//     console.log(URL.value);
//     console.log(Model.value);   
// });


// var lblDesc = document.createElement('label');
// lblDesc.textContent = "Product mainline description";
// lblDesc.setAttribute('for','txtDesc');
// var txtDesc = document.createElement('input');
// txtDesc.setAttribute('class','form-control');
// txtDesc.setAttribute('id','txtDesc');
// txtDesc.setAttribute('placeholder','Enter product description');

// fset.appendChild(lblDesc);
// fset.appendChild(txtDesc);

// var lblSKU = document.createElement('label');
// lblSKU.textContent = 'SKU';
// lblSKU.setAttribute('for','txtSKU');
// var txtSKU =  document.createElement('input');
// txtSKU.setAttribute('class','form-control');
// txtSKU.setAttribute('id','txtSKU');
// txtSKU.setAttribute('placeholder','Enter product SKU');

// fset.appendChild(lblSKU);
// fset.appendChild(txtSKU);


// var lblURL = document.createElement('label');
// lblURL.textContent = 'URL';
// lblURL.setAttribute('for','txtURL');
// var txtURL =  document.createElement('input');
// txtURL.setAttribute('class','form-control');
// txtURL.setAttribute('id','txtURL');
// txtURL.setAttribute('placeholder','Enter product URL');

// fset.appendChild(lblURL);
// fset.appendChild(txtURL);

// var lblModel = document.createElement('label');
// lblModel.textContent = 'Model';
// lblModel.setAttribute('for','txtModel');
// var txtModel =  document.createElement('input');
// txtModel.setAttribute('class','form-control');
// txtModel.setAttribute('id','txtModel');
// txtModel.setAttribute('placeholder','Enter product Model');

// fset.appendChild(lblModel);
// fset.appendChild(txtModel);

// var lblPrice = document.createElement('label');
// lblPrice.textContent = 'Price';
// lblPrice.setAttribute('for','txtPrice');
// var txtPrice =  document.createElement('input');
// txtPrice.setAttribute('class','form-control');
// txtPrice.setAttribute('id','txtPrice');
// txtPrice.setAttribute('placeholder','Enter product Price');

// fset.appendChild(lblPrice);
// fset.appendChild(txtPrice);

// var btnCreate = document.createElement('button');
// //btnCreate.setAttribute('type','submit');
// btnCreate.setAttribute('class','btn btn-primary');
// btnCreate.setAttribute('id','btnCreate');
// btnCreate.textContent = 'Create';

// fset.appendChild(btnCreate);

// productForm.appendChild(fset);
// app.appendChild(productForm);

// var elem= document.getElementById('btnCreate');

