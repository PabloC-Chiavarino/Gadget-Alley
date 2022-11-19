/**obtengo botones correspondientes a cada producto, luego cada uno va a tener informacion distinta por eso utilize id distintos en el boton conoce mas, pero eso lo construire mas adelante como otra funcionalidad. */

const addStreet__a = document.querySelector('#addStreet__a');
const moreStreet__a = document.querySelector('#moreStreet__a');


/** aca luego va a ver un modal con mas especificaciones del producto */

moreStreet__a.addEventListener('click', () => {
    window.location.assign('../pages/workingOn.html')
})


/** selecciono el div y creo el espacio para alojar la leyenda en le mismo */

const detailsStreet__a = document.querySelector('#detailsStreet__a');

addStreet__a.addEventListener('click',()=>{
    product = watch4;
    stockCheck();
/** checkeo stock y obtengo un boolean para la variable ready */
    if (ready == true) {
        cartAdd();
        renderingProducts()
    }
    /** checkeo si se mostró la leyenda anteriormente por si se ejecuta nuevamente antes que finalice el setTimeOut */
    if(detailsStreet__a.legend !== '') {
        clearTimeout(timer);
        legend.innerHTML = '';
    }
    createLegend();
    detailsStreet__a.appendChild(legend);
    legendTimer();
})


const addStreet__b = document.querySelector('#addStreet__b');
const moreStreet__b = document.querySelector('#moreStreet__b');
const detailsStreet__b = document.querySelector('#detailsStreet__b');

moreStreet__b.addEventListener('click', () => {
    window.location.assign('../pages/workingOn.html')
})

addStreet__b.addEventListener('click',()=>{
    product = miBand7;
    stockCheck();
    if (ready == true) {
        cartAdd();
        renderingProducts()
        if(detailsStreet__b.legend !== '') {
            clearTimeout(timer);
            legend.innerHTML = '';
        }
        createLegend();
        detailsStreet__b.appendChild(legend);
        legendTimer();
    }
})

const addStreet__c = document.querySelector('#addStreet__c');
const moreStreet__c = document.querySelector('#moreStreet__c');
const detailsStreet__c = document.querySelector('#detailsStreet__c');

moreStreet__c.addEventListener('click', () => {
    window.location.assign('../pages/workingOn.html')
})

addStreet__c.addEventListener('click',()=>{
    product = miBand6;
    stockCheck();
    if (ready == true) {
        cartAdd();
        renderingProducts()
        if(detailsStreet__c.legend !== '') {
            clearTimeout(timer);
            legend.innerHTML = '';
        }
        createLegend();
        detailsStreet__c.appendChild(legend);
        legendTimer();
    }
})

const addStreet__d = document.querySelector('#addStreet__d');
const moreStreet__d = document.querySelector('#moreStreet__d');
const detailsStreet__d = document.querySelector('#detailsStreet__d');

moreStreet__d.addEventListener('click', () => {
    window.location.assign('../pages/workingOn.html')
})

addStreet__d.addEventListener('click',()=>{
    product = gtr2;
    stockCheck();
    if (ready == true) {
        cartAdd();
        renderingProducts()
        if(detailsStreet__d.legend !== '') {
            clearTimeout(timer);
            legend.innerHTML = '';
        }
        createLegend();
        detailsStreet__d.appendChild(legend);
        legendTimer();
    }
})

const addStreet__e = document.querySelector('#addStreet__e');
const moreStreet__e = document.querySelector('#moreStreet__e');
const detailsStreet__e = document.querySelector('#detailsStreet__e');

moreStreet__e.addEventListener('click', () => {
    window.location.assign('../pages/workingOn.html')
})

addStreet__e.addEventListener('click',()=>{
    product = gts2Mini;
    stockCheck();
    if (ready == true) {
        cartAdd();
        renderingProducts()
        if(detailsStreet__e.legend !== '') {
            clearTimeout(timer);
            legend.innerHTML = '';
        }
        createLegend();
        detailsStreet__e.appendChild(legend);
        legendTimer();
    }
})

const addStreet__f = document.querySelector('#addStreet__f');
const moreStreet__f = document.querySelector('#moreStreet__f');
const detailsStreet__f = document.querySelector('#detailsStreet__f');

moreStreet__f.addEventListener('click', () => {
    window.location.assign('../pages/workingOn.html')
})

addStreet__f.addEventListener('click',()=>{
    product = gts2;
    stockCheck();
    if (ready == true) {
        cartAdd();
        renderingProducts()
        if(detailsStreet__f.legend !== '') {
            clearTimeout(timer);
            legend.innerHTML = '';
        }
        createLegend();
        detailsStreet__f.appendChild(legend);
        legendTimer();
    }
})