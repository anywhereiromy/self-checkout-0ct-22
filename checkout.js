/* 1- As a user, I would like to be able to scan an item using a barcode so its details can be found from products list (test data).
2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket.
 */

const { catalogue } = require("./data/data");

const scanBarcode = (barcode) => {
    // return all the details of the item in the catalogue that has the barcode that we pass into this function - we want to return an object
    console.log('barcode', barcode);
    console.log('catalogue', catalogue);

    // const filteredItems = catalogue.filter((item) => {
    //     console.log('inside filter', item.barcode === barcode)
    //     return item.barcode === barcode;
    // });
    // return filteredItems[0];

    return catalogue.find((item) => {
        console.log('inside filter', item.barcode === barcode)
        return item.barcode === barcode;
    });
};

const basket = [];

const addItemToBasket = (itemToAdd) => {
    console.log('basket before push', basket);
    // basket.push(itemToAdd);
    // console.log('basket after push', basket);
    return basket.push(itemToAdd);;
}

module.exports = { scanBarcode, addItemToBasket, basket };
