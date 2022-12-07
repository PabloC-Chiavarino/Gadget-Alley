// variables globales */

let product;
let price = parseInt(0);
let quantityRequest = parseInt(0);
let ready = false;

let cartItems = parseInt(0);
let cartItems__fromLstorage = localStorage.getItem('cartItems');

let cartProducts = [];
let cartProducts__fromLstorage = localStorage.getItem('cartProducts');

let totalPrice = parseInt(0);
let totalPrice__fromLstorage = localStorage.getItem('totalPrice');


/** funciones */

/** funcion que checkea stock y busca que 'ready' sea true para continuar, o muestra un mensaje */

const stockCheck = () => {if (product.actualStock < 1) {
    Swal.fire({
        icon: 'warning',
        timer: 4000,
        confirmButtonColor: 'black',
        color: '',
        footer: 'Lo lamentamos!',
        focusConfirm: 'false',
        title: 'Actualmente no contamos con stock del producto seleccionado',
        showClass: {
        popup: 'animate__animated animate__fadeInDownBig'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    });
    ready = false;
    } else {
        ready = true;
    }
}

/** funcion que añade al carrito */

const cartAdd = () => {
    price = product.price;
    product.stockDeduct();
    if(cartProducts.includes(product)) {
        quantityRequest = product.quantity;
        product.price = quantityRequest * price;
    } else {
    cartProducts.push(product);
    }
    
    let cartProducts__JSON = JSON.stringify(cartProducts);
    let cartProducts__toLstorage = localStorage.setItem('cartProducts', cartProducts__JSON);
    cartItems = cartItems + 1;
    let cartItems__toLstorage = localStorage.setItem('cartItems', cartItems);
    totalPrice = totalPrice + price;
    let totalPrice__toLstorage = localStorage.setItem('totalPrice', totalPrice);
    
    console.log(cartProducts);
    console.log(`Cant. productos: ${cartItems}`);
    console.log(`Total compra: ${totalPrice}`);
    }

/** funcion para notificacion flotante */

const cart__notification = document.querySelector('.cart__icon__notification');

const notif = () => {
    cart__notification.innerHTML = cartItems;
    cart__notification.style.display = 'block';
}

/** creo las variables y funcion para crear una leyenda y controlarla asincronicamente */

let timer = null;
let legend = '';

const legendTimer = () => {timer = setTimeout(() => {legend.innerHTML = ''}, 3000);}

const createLegend = () => {
    legend = document.createElement('p');
    legend.className = 'card__legend';
    if(ready) {
        legend.innerHTML = 'Producto agregado al carrito';
        legendTimer();
    } else {
        legend.innerHTML = 'Producto sin stock';
        legend.style.color = ('red');
    }
}

/** funcion que renderiza los productos en el carrito, opciones y precio total */

const toRender = document.querySelector("#toRender");
const optionBtns = document.querySelector('.cart__modal__btn__cont');
const totalPrice__modal = document.querySelector('.cart__modal__totalPrice');

const renderingProducts = () => {

    
    /** limpio o actualizo los productos presentes en el carrito */

    if(toRender.innerHTML !== '') {
        toRender.innerHTML = ''
    }
    cartProducts.forEach(product => {
        toRender.innerHTML += `
        <div class="cart__modal__detail">
                <img class="cart__modal__img" src="${product.img}" alt="">
                <div class="cart__modal__product" id="${product.id}">
                    <p class="cart__modal__name">${product.name}</p>
                    <p class="cart__modal__price">$ ${product.price}</p>
                    <button class="cart__modal__minus">-</button>
                    <input type="" class="cart__modal__quantity" id="quantity" value=${product.quantity} readonly>
                    <button class="cart__modal__plus">+</button>
                    <button class="cart__modal__discard">Eliminar</button>
                </div>
        </div>
        `
    })
    toRender.classList.add('overflow-y');
    totalPrice__modal.firstElementChild.innerHTML = `Total: $ ${totalPrice}`
    totalPrice__modal.style.display ='flex';
    optionBtns.style.display = 'flex';
}

/**checkeo local storage */

if (cartItems__fromLstorage !== null) {
    cartItems = JSON.parse(cartItems__fromLstorage);
    console.log(`Cant. Productos: ${cartItems}`);
    notif();
}
if (totalPrice__fromLstorage !== null) {
    totalPrice = JSON.parse(totalPrice__fromLstorage);
    console.log(`Total compra: ${totalPrice}`);
}
if (cartProducts__fromLstorage !== null) {
    cartProducts = JSON.parse(cartProducts__fromLstorage);
    console.log(cartProducts);
    renderingProducts();
}

/**carrito: mostrar modal o no */

const cartBtn = document.querySelector('.cart__icon')
const cartDisplay = document.querySelector('.cart__modal');

cartBtn.addEventListener('click', ()=> {
    cartDisplay.classList.toggle('switch');
})


/**funcionalidades modal */

//const plusBtns = document.querySelectorAll('.cart__modal__plus');
//const minusBtns = document.querySelectorAll('.cart__modal__minus');
//const discardBtns = document.querySelectorAll('.cart__modal__discard');
const checkOut = document.querySelector('#checkOut');
const emptyCart = document.querySelector('#emptyCart');

// plusBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const selection = btn.parentElement.getAttribute('id');
//         console.log(selection)
//         product = cartProducts.find(parameter => parameter.id === selection);
//         // stockCheck();
//         // if (ready == true) {
//         //     cartAdd();
//         // }
//     })
// })

emptyCart.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        confirmButtonColor: 'orange',
        confirmButtonText: 'Ok',
        color: '',
        title: 'El carrito está vacío.',
        focusConfirm: 'false',
        showClass: {
        popup: 'animate__animated animate__fadeInDownBig'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    });

    /** restauro stock de los productos seleccionados y reinicio variables + LS*/

    cartProducts.forEach(function stockRestore() {
        this.actualStock = this.actualStock + this.withdrawnStock;
        this.withdrawnStock = 0;
        this.quantity = 0;
        console.log(`Stock reordenado`);
    })
    
    cartProducts = [];
    cartItems = parseInt(0);
    totalPrice = parseInt(0);
    ready = false;
    console.log(cartProducts);
    console.log(`Precio total: ${totalPrice}`);
    console.log(`Cantidad de productos: ${cartItems}`);
    localStorage.clear();

    /*limpio modal del carrito */

cart__notification.innerHTML = cartItems;
cart__notification.style.display = 'none';
toRender.classList.remove('overflow-y');
totalPrice__modal.style.display ='none';
optionBtns.style.display = 'none';
toRender.innerHTML = `<div class="cart__modal__empty">
<p>El carrito está vacío.</p>
</div>`

})


