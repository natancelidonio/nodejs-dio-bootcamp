const { getFullName, productType }= require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
    console.log("Carrinho de compras:");

    getFullName("1", "teclado");
    // p.getFullName("408", "mousepad");
    // p.getFullName("508", "mouse");
    // p.getProductLabel("mousepad");
    
    // product.getFullName();
    // product.productType.version;
    console.log(config.client);
    database.connectToDatabase();
};

main();