/**clase constructora para definir metodos */

class Product {
constructor (id, price, name, img, actualStock, withdrawnStock, quantity) {
        this.id = id;
        this.price = parseInt(price);
        this.name = name;
        this.img = img;
        this.actualStock = parseInt(actualStock);
        this.withdrawnStock = parseInt(withdrawnStock);
        this.quantity = parseInt(quantity);
    }

    stockDeduct () {
        this.actualStock = this.actualStock - 1;
        this.withdrawnStock = this.withdrawnStock + 1;
        this.quantity = this.quantity + 1;
        console.log(`parámetro actualStock actualizado`);
    }
}

/**creo array para traerme los productos disponibles en el json */

let available = [];

/** request, parse y push nuevos obj instanciandolos con la clase constructora */

let retrieveObjs;

fetch('../stockAvailable.json')
.then(response => response.json())
    .then(parsedResult => {
        retrieveObjs = parsedResult;
        retrieveObjs.forEach(obj => {
            available.push(new Product(obj.id, obj.price, obj.name, obj.img, obj.actualStock, obj.withdrawnStock, obj.quantity));
        });
    })