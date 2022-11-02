class Product {
    constructor (price, id, actualStock, withdrawnStock) {
        this.price = parseInt(price);
        this.id = id;
        this.actualStock = parseInt(actualStock);
        this.withdrawnStock = parseInt(withdrawnStock);
    }

    stockDeduct () {
        this.actualStock = this.actualStock - 1// quantityRequest;
        this.withdrawnStock = this.withdrawnStock + 1//+ quantityRequest;
        console.log(`parámentro actualStock actualizado`);
    }

    stockRestore () {
        this.actualStock = this.actualStock + this.withdrawnStock
        this.withdrawnStock = this.withdrawnStock - this.withdrawnStock;
    }
}

/** products */

const watch4 = new Product ("35000", "Galaxy Watch 4", "20", "0");
const gts2 = new Product ("45000", "Amazfit GTS 2", "10", "0");
const gtr2 = new Product ("40000", "Amazfit GTR 2", "10", "0");
const gts2Mini = new Product ("30000", "Amazfit GTS 2 Mini", "10", "0");
const miBand6 = new Product ("12000", "Xiaomi Mi Band 6", "10", "0");
const miBand7 = new Product ("15000", "Xiaomi Mi Band 7", "10", "0");
const goPro10 = new Product ("30000", "Go Pro 10", "10", "0");
const dron1 = new Product ("40000", "Dron Fly Horizont", "10", "0");
const dron2 = new Product ("75000", "Dron High Flyer", "5", "0");
const solarBank = new Product ("10000", "Solar Power Bank", "5", "0");