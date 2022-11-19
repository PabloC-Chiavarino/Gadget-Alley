const addOutdoor__a = document.querySelector('#addOutdoor__a');
const moreOutdoor__a = document.querySelector('#moreOutdoor__a');

moreOutdoor__a.addEventListener('click', () => {
    window.location.assign('../pages/workingOn.html')
})

addOutdoor__a.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = solarBank;
        price = product.price;
        cartAdd();
        renderingProducts()
        if(detailsOutdoor__a.legend !== '') {
            clearTimeout(timer);
            legend.innerHTML = '';
        }
        createLegend();
        detailsOutdoor__a.appendChild(legend);
        legendTimer();
    }
})

const addOutdoor__b = document.querySelector('#addOutdoor__b');
const moreOutdoor__b = document.querySelector('#moreOutdoor__b');

moreOutdoor__b.addEventListener('click', () => {
    window.location.assign('../pages/workingOn.html')
})

addOutdoor__b.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = goPro10;
        price = product.price;
        cartAdd();
        renderingProducts()
        if(detailsOutdoor__b.legend !== '') {
            clearTimeout(timer);
            legend.innerHTML = '';
        }
        createLegend();
        detailsOutdoor__b.appendChild(legend);
        legendTimer();
    }
})

const addOutdoor__c = document.querySelector('#addOutdoor__c');
const moreOutdoor__c = document.querySelector('#moreOutdoor__c');

moreOutdoor__c.addEventListener('click', () => {
    window.location.assign('../pages/workingOn.html')
})

addOutdoor__c.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = dron2;
        price = product.price;
        cartAdd();
        renderingProducts()
        if(detailsOutdoor__c.legend !== '') {
            clearTimeout(timer);
            legend.innerHTML = '';
        }
        createLegend();
        detailsOutdoor__c.appendChild(legend);
        legendTimer();
    }
})

const addOutdoor__d = document.querySelector('#addOutdoor__d');
const moreOutdoor__d = document.querySelector('#moreOutdoor__d');

moreOutdoor__d.addEventListener('click', () => {
    window.location.assign('../pages/workingOn.html')
})

addOutdoor__d.addEventListener('click',()=>{
    stockCheck();
    if (ready == true) {
        product = dron1;
        price = product.price;
        cartAdd();
        renderingProducts()
        if(detailsOutdoor__d.legend !== '') {
            clearTimeout(timer);
            legend.innerHTML = '';
        }
        createLegend();
        detailsOutdoor__d.appendChild(legend);
        legendTimer();
    }
})



/* const addCart__btns = document.querySelectorAll('#addToCart');

addCart__btns.forEach(btn => {
    btn.addEventListener('click', e => {
        
    })
})*/