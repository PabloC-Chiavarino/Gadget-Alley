let product = "";
let price = parseInt(0);
let quantityRequest = parseInt(0);
let ready = undefined;

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

/** functions */

/** add products to cart */

const cartAdd = () => {
    product.stockDeduct();
    cartProducts.push(product);
    let cartProducts__JSON = JSON.stringify(cartProducts);
    let cartProducts__toLstorage = localStorage.setItem('cartProducts', cartProducts__JSON);
    cartItems = cartItems + 1;
    let cartItems__toLstorage = localStorage.setItem('cartItems', cartItems);
    totalPrice = totalPrice + price;
    let totalPrice__toLstorage = localStorage.setItem('totalPrice', totalPrice);
    
    console.log(cartProducts);
    console.log(`Cant. productos: ${cartItems}`);
    console.log(`Total compra: ${totalPrice}`);

    //localStorage.clear();
}

/** checking status avaiable */

const stockCheck = () => {if (product.actualStock === 0) {
    alert(`Actualmente no contamos con stock de ${product.id}`);
    ready = false;
    } else {
        ready = true;
    }
}
