const productStreet__a = document.querySelector('#watch4');

productStreet__a.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = watch4;
        price = product.price;
        cartAdd();
        //const legend = document.querySelector('#cardLegend__a');
        //legend.innerHTML = <p class="card__legend switch" id="cardLegend__a">Producto agregado al carrito</p>;
    }
})

const productStreet__b = document.querySelector('#band7');

productStreet__b.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = miBand7;
        price = product.price;
        cartAdd();
    }
})

const productStreet__c = document.querySelector('#band6');

productStreet__c.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = miBand6;
        price = product.price;
        cartAdd();
    }
})

const productStreet__d = document.querySelector('#gtr2');

productStreet__d.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = gtr2;
        price = product.price;
        cartAdd();
    }
})

const productStreet__e = document.querySelector('#gts2Mini');

productStreet__e.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = gts2Mini;
        price = product.price;
        cartAdd();
    }
})

const productStreet__f = document.querySelector('#gts2');

productStreet__f.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = gts2;
        price = product.price;
        cartAdd();
    }
})