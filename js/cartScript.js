// variables globales */

let product;
let price = parseInt(0);
let ready = false;
let cartItems = parseInt(0);
let cartProducts = [];
let totalPrice = parseInt(0);

/** funciones */

/** funcion que checkea stock y busca que 'ready' sea true para continuar, o muestra un mensaje */

const stockCheck = () => {if (product.actualStock < 1) {
    Swal.fire({
        allowOutsideClick: false,
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
    product.stockDeduct();
    if(!cartProducts.includes(product)) {
        price = product.price;
        cartProducts.push(product);
    }
    price = product.quantity * product.price;
    let cartProducts__JSON = JSON.stringify(cartProducts);
    let cartProducts__toLstorage = localStorage.setItem('cartProducts', cartProducts__JSON);
    cartItems++;
    let cartItems__toLstorage = localStorage.setItem('cartItems', cartItems);
    totalPrice += product.price;
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

/** (creo las variables y funcion para crear una leyenda y controlarla asincronicamente en las cards) */

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
    /** mostar el modal del carrito y los botones principales */

const cartBtn = document.querySelector('.cart__icon')
const cartDisplay = document.querySelector('.cart__modal');

cartBtn.addEventListener('click', ()=> {
    cartDisplay.classList.toggle('switch');
})

    /* funcion que limpia modal del carrito al quedar vacio */

    function eraseModal () {
        cart__notification.innerHTML = cartItems;
        cart__notification.style.display = 'none';
        toRender.classList.remove('overflow-y');
        totalPrice__modal.style.display ='none';
        optionBtns.style.display = 'none';
        toRender.innerHTML = `<div class="cart__modal__empty">
        <p>El carrito está vacío.</p>
        </div>`
        }

/** funcion que renderiza los productos en el carrito, opciones y precio total */

const toRender = document.querySelector("#toRender");
const optionBtns = document.querySelector('.cart__modal__btn__cont');
const totalPrice__modal = document.querySelector('.cart__modal__totalPrice');

const renderingProducts = () => {

    /** (limpio y/o actualizo los productos presentes en el carrito) */

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
                    <input type="" class="cart__modal__quantity" id="quantity" value=${product.quantity} readonly>
                    <img class="cart__modal__discard" id="${product.id}" src="../assets/icons/bin.png">
                </div>
        </div>
        `
        /** (selecciono y asigno botones de discard para c/ prod) */
        
        const discardBtns = document.querySelectorAll('.cart__modal__discard')
        
        discardBtns.forEach(btn => {
            btn.addEventListener('click', discard => {
            const btnId = discard.target.getAttribute('id');
            
            /** restauro stock del producto seleccionado y actualizo valores sus valores*/
            
            product = cartProducts.find(parameter => parameter.id === btnId);
            product.actualStock += product.withdrawnStock;
            product.withdrawnStock = 0;
            totalPrice -= product.price * product.quantity;
            cartItems -= product.quantity;
            product.quantity = 0;
            console.log('Stock restaurado de:');
            console.log(product);
            console.log(cartProducts);
            console.log(`Cant. productos: ${cartItems}`);
            console.log(`Total compra: ${totalPrice}`);

            /** encuentro el indice del producto en el array del carrito actual para poder eliminarlo del carrito */

            const toDiscard = cartProducts.findIndex(parameter => parameter.id === btnId);
            cartProducts.splice(toDiscard, 1);
            console.log(cartProducts);
            
            /** actualizo el modal */
            
            notif ();
            (cartProducts.length === 0) ? eraseModal() : renderingProducts();

            /**actualizo LS */

            let cartProducts__JSON = JSON.stringify(cartProducts);
            let cartProducts__toLstorage = localStorage.setItem('cartProducts', cartProducts__JSON);
            let cartItems__toLstorage = localStorage.setItem('cartItems', cartItems);
            let totalPrice__toLstorage = localStorage.setItem('totalPrice', totalPrice);
        })
    })
})
    toRender.classList.add('overflow-y');
    totalPrice__modal.firstElementChild.innerHTML = `Total: $ ${totalPrice}`
    totalPrice__modal.style.display ='flex';
    optionBtns.style.display = 'flex';
}

/** funcion checkout */

const checkOutBtn = document.querySelector('#checkOut');

function checkOut () {
    cartProducts = [];
    cartItems = parseInt(0);
    totalPrice = parseInt(0);
    ready = false;
    console.log(cartProducts);
    console.log(`Precio total: ${totalPrice}`);
    console.log(`Cantidad de productos: ${cartItems}`);
    localStorage.clear();
    eraseModal();
}

checkOutBtn.addEventListener('click', () => {
    const steps = ['1', '2', '3']
    const queue = Swal.mixin({
    progressSteps: steps,
})
    Swal.fire({
        allowOutsideClick: false,
        icon: 'question',
        showDenyButton: 'true',
        showConfirmButton: 'true',
        confirmButtonColor: 'green',
        confirmButtonText: 'Sí, gracias.',
        denyButtonText: 'No, continuar viendo productos.',
        color: '',
        title: 'Desea realizar la compra?',
        focusConfirm: 'false',
        showClass: {
        popup: 'animate__animated animate__fadeIn'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    }).then(async (result) => {
        if (result.isConfirmed) {
            const steps = ['1', '2', '3']
            const Queue = Swal.mixin({
                progressSteps: steps,
                confirmButtonText: 'Siguiente',
            })
            await Queue.fire({
                allowOutsideClick: false,
                input: 'text',
                title: 'Paso uno',
                text: 'Ingrese su nombre',
                currentProgressStep: 0,
                inputValidator: name => {
                    if (!name) {
                        return "Por favor escribe tu nombre";
                    } else {
                        return undefined;
                    }
                }
            })
            await Queue.fire({
                allowOutsideClick: false,
                input: 'text',
                title: 'Paso dos',
                text: 'Ingrese su dirección de envío',
                currentProgressStep: 1,
                inputValidator: address => {
                    if (!address) {
                        return "Por favor escribe tu dirección";
                    } else {
                        return undefined;
                    }
                }
            })
            await Queue.fire({
                allowOutsideClick: false,
                input: 'text',
                title: 'Paso tres',
                text: 'Ingrese su correo electrónico',
                currentProgressStep: 2,
                confirmButtonText: 'OK',
                inputValidator: email => {
                    if (!email) {
                        return "Por favor escribe tu correo electrónico";
                    } else {
                        return undefined;
                    }
                }
                
            }).then (() => {
            checkOut ();
            Swal.fire({
                allowOutsideClick: false,
                confirmButtonColor: 'green',
                confirmButtonText: 'Aceptar',
                color: '',
                title: 'Muchas gracias por su compra!',
                focusConfirm: 'false',
                showClass: {
                popup: 'animate__animated animate__fadeIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
            })
        })
    } else {
        Swal.fire({
            allowOutsideClick: false,
            icon : 'info',
            confirmButtonColor: 'green',
            confirmButtonText: 'Ok',
            color: '',
            title: 'No se realizó ningun cambio.',
            focusConfirm: 'false',
            showClass: {
            popup: 'animate__animated animate__fadeIn'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
                }
            })
        }
    })
})

/** funcion vaciar carrito */

const emptyCartBtn = document.querySelector('#emptyCart');

emptyCartBtn.addEventListener('click', () => {
    Swal.fire({
        allowOutsideClick: false,
        icon: 'warning',
        showConfirmButton: 'true',
        confirmButtonColor: 'green',
        confirmButtonText: 'Sí',
        showDenyButton: 'true',
        denyButtonText: 'No',
        color: '',
        title: 'Desea vaciar el carrito?',
        focusConfirm: 'false',
        showClass: {
        popup: 'animate__animated animate__fadeInDownBig'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    }).then ((result) => {
        if(result.isConfirmed){

            /** (restauro stock de los productos seleccionados y reinicio variables + LocalStorage) */
        
            cartProducts.forEach(obj => {
                obj.actualStock += obj.withdrawnStock;
                obj.withdrawnStock = 0;
                obj.quantity = 0;
                console.log('Stock reordenado de:');
                console.log(obj);
            })
            
            /**salida de la compra luego de devolver el stock a los prod correspondientes */

            checkOut()
        }
    });
})

/** fin de funciones */


/** LOCAL STORAGE CHECK */

let cartProducts__fromLstorage = localStorage.getItem('cartProducts');
const cartItems__fromLstorage = localStorage.getItem('cartItems');
const totalPrice__fromLstorage = localStorage.getItem('totalPrice');

if (cartItems__fromLstorage !== null) {
    cartItems = cartItems__fromLstorage;
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