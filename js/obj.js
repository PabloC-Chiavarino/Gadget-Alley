class Product {
    constructor (id, price, name, actualStock, withdrawnStock, quantity) {
        this.id = id;
        this.price = parseInt(price);
        this.name = name;
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

    stockRestore () {
        this.actualStock = this.actualStock + this.withdrawnStock
        this.withdrawnStock = this.withdrawnStock - this.withdrawnStock;
        this.quantity = this.quantity - this.quantity;
    }
}

/** productos */

const watch4 = new Product ("1", "35000", "Galaxy Watch 4", "20", "0", "0");
const gts2 = new Product ("2", "45000", "Amazfit GTS 2", "10", "0", "0");
const gtr2 = new Product ("3", "40000", "Amazfit GTR 2", "10", "0", "0");
const gts2Mini = new Product ("4", "30000", "Amazfit GTS 2 Mini", "10", "0", "0");
const miBand6 = new Product ("5", "12000", "Xiaomi Mi Band 6", "10", "0", "0");
const miBand7 = new Product ("6", "15000", "Xiaomi Mi Band 7", "10", "0", "0");
const goPro10 = new Product ("7", "30000", "Go Pro 10", "10", "0", "0");
const dron1 = new Product ("8", "40000", "Dron Fly Horizont", "10", "0", "0");
const dron2 = new Product ("9", "75000", "Dron High Flyer", "5", "0", "0");
const solarBank = new Product ("10", "10000", "Solar Power Bank", "5", "0", "0");