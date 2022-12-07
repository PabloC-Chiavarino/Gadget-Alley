/** renderizo productos disponibles */
// const content_street = document.querySelector('.content_street');

// const renderAvaiable = () => {

//     available.forEach(product => {
//         content_street.innerHTML += `
//         <article>
//         <div data-aos-duration="500" data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" class="card text-center" style="width: 18rem;">
//             <div>
//                 <img src="../assets/img/watch4grid.png" class="card-img-top" alt="...">
//             </div>
//             <div class="card-body first_product">
//                 <h5 class="card-title">GALAXY WATCH 4</h5>
//                 <p class="card-text">El Galaxy Watch4 es el primer smartwatch con Wear OS Powered by Samsung que te permite acceder fácilmente a tus aplicaciones favoritas desde tu muñeca.</p>
//                 <button id="1street" class="btn__primary">AÑADIR AL CARRITO</button>
//                 <button id="moreStreet__a" class="btn__secondary">Conocé más</button>
//             </div>
//         </div>
//     </article>
//         `
//     })
// }

//renderAvaiable();

/** selecciono botones de compra y le paso una funcion al evento para obtener id de cada boton y compararlo con los id de los productos disponibles */

const addBtns = document.querySelectorAll('.btn__primary');

addBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        const btnId = event.target.getAttribute('id');
        console.log(`selección: ${btnId}`);
        product = available.find(parameter => parameter.id === btnId);
        stockCheck();
        if (ready == true) {
            cartAdd();
            notif();
            renderingProducts()
        }
        /** checkea si la leyenda ya fue lanzada por si se clickea mas de una vez seguido */
        if(btn.parentElement.legend !== '') {
            clearTimeout(timer);
            legend.innerHTML = '';
        }
        createLegend();
        btn.parentElement.appendChild(legend);
        })
    })
