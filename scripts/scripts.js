


var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:3000/products', true);

request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);
   
    for(i=0; i < Object.keys(data).length ; i++)
    {
        var obj = data[i];
        const card = document.createElement('div');        
        card.setAttribute('class','card bg-light mb-3');
        const h1 = document.createElement('h1');
        h1.textContent = data[i].Description;
        h1.setAttribute('class','card-header');             
        
        const uiE = document.createElement('ul');
        uiE.setAttribute('class','list-group list-group-flush'); 
        const SKU = document.createElement('li');
        SKU.setAttribute('class','list-group-item'); 
        SKU.textContent = 'SKU: ' + obj.SKU;                
        uiE.appendChild(SKU);
        const URL = document.createElement('li');
        URL.setAttribute('class','list-group-item card-link'); 
        const Link = document.createElement('a');
        Link.setAttribute('href',obj.URL);
        Link.setAttribute('target','_blank');
        Link.textContent = 'URL: ' + obj.URL;
        URL.appendChild(Link);        
        uiE.appendChild(URL);

        const Model = document.createElement('li');
        Model.textContent = 'Model: ' + obj.Model;
        Model.setAttribute('class','list-group-item'); 
        uiE.appendChild(Model);
        const Price = document.createElement('li');
        Price.textContent = 'Price: ' + obj.PriceDollar + ','+ obj.PriceCents;;
        Price.setAttribute('class','list-group-item');         
        uiE.appendChild(Price);

        containder.appendChild(card);
        card.appendChild(h1);        
        card.appendChild(uiE);        
    }

}

request.send();