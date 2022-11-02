const productOutdoor__a = document.querySelector('#solarBank');

productOutdoor__a.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = solarBank;
        price = product.price;
        cartAdd();
    }
})

const productOutdoor__b = document.querySelector('#goPro10');

productOutdoor__b.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = goPro10;
        price = product.price;
        cartAdd();
    }
})

const productOutdoor__c = document.querySelector('#dron2');

productOutdoor__c.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = dron2;
        price = product.price;
        cartAdd();
    }
})

const productOutdoor__d = document.querySelector('#dron1');

productOutdoor__d.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = dron1;
        price = product.price;
        cartAdd();
    }
})