
const app = document.getElementById('content-wraper');

//Create button definition
var createButton = document.createElement('Button');
createButton.setAttribute('type','button');
createButton.setAttribute('class','btn btn-primary');
createButton.setAttribute('id','BtncreateBranch');
createButton.textContent = 'Create Branch';

const container = document.createElement('div');
container.setAttribute('class','contain-fluid');

app.appendChild(createButton);
app.appendChild(container);

var CreateModal = document.getElementById('createBranch');
var warningAlertModal = document.getElementById('createIncompleteAlert');
//Create the handlers fot the modal window
var createBranch = document.getElementById('btnCreateBranch');
var cancelBranch = document.getElementById('btnCancelBranch');

//Branch data to update or create
var txtName = document.getElementById('txtName');
var txtNumber = document.getElementById('txtNumber');
var txtCountry = document.getElementById('txtCountry');
var txtProvince = document.getElementById('txtProvince');
var txtProvince = document.getElementById('txtProvince');
var txtAddress = document.getElementById('txtAddress');
var txtPC = document.getElementById('txtPC');

//Populate the table upfront
var AllStores = promiseGetAll();

AllStores.then((result)=>{
    var response = JSON.parse(result.target.response);
    console.log(response);
}).catch((error)=>{
    console.log(error);
});




//Clcik handler for the buttons in the form
createButton.onclick = ()=>{
    CreateModal.style.display = "block";
    warningAlertModal.style.display = "none"
    document.getElementById("raTrue").checked = true;
}

createBranch.onclick = ()=>{
  
    var active = document.getElementById('raTrue').checked;
    
    var message = JSON.stringify(
        {
            Name:txtName.value,
            Country:txtCountry.value,
            Province:txtProvince.value,
            City:txtCity.value,
            Number: txtNumber.value,
            Address: txtAddress.value,
            PostalCode:txtPC.value,
            Active: active
        }
    );        

    var createStore = promiseQuery('store','post',message);
    createStore.then((result)=>{
        console.log('Product created');
        console.log(result);
    }).catch((error)=>{
        console.log('There was a problem creating the store')
    });
    
}

cancelBranch.onclick = ()=>{
   
    txtName.value = "";
    txtNumber.value = "";
    txtCountry.value = "";
    txtProvince.value = "";
    txtAddress.value = "";
    txtPC.value = "";
    CreateModal.style.display = 'none';    
}






