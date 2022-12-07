/* 1- As a user, I would like to be able to scan an item using a barcode so its details can be found from products list (test data).
2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket.
 */
const { orange, pineapple, kiwi, apple, banana, catalogue } = require("../data/data");
const { scanBarcode, addItemToBasket, basket } = require("../checkout");

describe('barcode returns product', () => {
    test('when I scan a kiwi barcode, I get the kiwi details', () => {
    // we will need a barcode variable, and we will need access to the product catalogue
        const barcode = 765;
        const result = scanBarcode(barcode);
        console.log('result', result)
        expect(result.price).toEqual(25);
        expect(result.barcode).toEqual(barcode);
    });
    test('when I scan a banana barcode, I get the banana details', () => {
        // we will need a barcode variable, and we will need access to the product catalogue
            const barcode = 456;
            const result = scanBarcode(barcode);
            console.log('result', result)
            expect(result.price).toEqual(6);
            expect(result.barcode).toEqual(barcode);
        });
});

describe('', () => {
    // test('basket length is 1 after 1 item is added', () => {
    //     const basketLength = addItemToBasket(kiwi);
    //     expect(basketLength).toEqual(1);
    // })

    // test('basket length is 2 after 2 items is added', () => {
    //     const basketLength = addItemToBasket(kiwi);
    //     expect(basketLength).toEqual(2);
    // })


    test('adds kiwi to basket and only adds 1 kiwi when only 1 is added', () => {
        const basketLength = addItemToBasket(kiwi);
        expect(basketLength).toEqual(1);
        expect(basket[0].barcode).toEqual(kiwi.barcode);
    })

    // test('adds banana to basket', () => {
    //     const resultBasket = addItemToBasket(banana)
    //     expect(resultBasket[1].barcode).toEqual(banana.barcode);
    // })
})

