// variables globales */

let product = "";
let price = parseInt(0);
let quantityRequest = parseInt(0);
let ready = false;

let cartItems = parseInt(0);
let cartItems__fromLstorage = localStorage.getItem('cartItems');

let cartProducts = [];
let cartProducts__fromLstorage = localStorage.getItem('cartProducts');

let totalPrice = parseInt(0);
let totalPrice__fromLstorage = localStorage.getItem('totalPrice');


if (cartItems__fromLstorage !== null) {
    cartItems = JSON.parse(cartItems__fromLstorage);
    console.log(`Cant. Productos: ${cartItems}`);
}
if (cartProducts__fromLstorage !== null) {
    cartProducts = JSON.parse(cartProducts__fromLstorage);
    console.log(cartProducts);
}
if (totalPrice__fromLstorage !== null) {
    totalPrice = JSON.parse(totalPrice__fromLstorage);
    console.log(`Total compra: ${totalPrice}`);
}

const cartBtn = document.querySelector('.cart__icon')
const cartDisplay = document.querySelector('.cart__modal');

cartBtn.addEventListener('click', ()=> {
    cartDisplay.classList.toggle('switch');
})

/** funciones */

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

    localStorage.clear();
}

/** checkeo stock y busco true para continuar, o muestro un mensaje */

const stockCheck = () => {if (product.actualStock === 0) {
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

/** funcion que renderiza los productos en el carrito */

const renderingProducts = () => {

    const toRender = document.querySelector("#toRender");
    
    /** limpio o actualizo los presentes en el carrito */

    if(toRender.innerHTML !== '') {
        toRender.innerHTML = ''
    }

    cartProducts.forEach(product => {
        const {price, id, actualStock} = product;
        toRender.innerHTML += `
        <div class="cart__modal__detail">
                <img class="cart__modal__img" src="" alt="">
                <div class="cart__modal__product">
                    <p class="cart__modal__name" id="product__name">${product.name}</p>
                    <p class="cart__modal__price" id="product__price">${product.price}</p>
                    <img class="cart__modal__minus" id="product${product.id}__minus" src="../assets/icons/minus.png" alt="">
                    <input type="" class="cart__modal__quantity" id="quantity" value=${product.quantity} readonly>
                    <img class="cart__modal__plus" id="product${product.id}__plus" src="../assets/icons/plus.png" alt="">
                    <img class="cart__modal__discard" id="product${product.id}__discard" src="../assets/icons/bin.png">
                </div>
        </div>
        `
        })
    }
    renderingProducts();

/** creo las variables y funcion para crear una leyenda y controlarla asincronicamente */

let timer = null;
let legend = '';
const legendTimer = () => {timer = setTimeout(() => {legend.innerHTML = ''}, 3000);}

const createLegend = () => {
    legend = document.createElement('p');
    legend.className = 'card__legend';
    legend.innerHTML = 'Producto agregado al carrito';
}
