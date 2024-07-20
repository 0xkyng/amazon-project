import {addToCart, cart, loadFromStorage} from '../../data/cart.js';

describe('test suite: addToCart', () => {
    it('adds an existing product to the cart', () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e4f64a65-1377-42bc-89a5-e572d19252e2',
                quantity: 1,
                deliveryOption: '1'

            }]);
        });

        loadFromStorage();
        addToCart('e4f64a65-1377-42bc-89a5-e572d19252e2');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e4f64a65-1377-42bc-89a5-e572d19252e2');
        expect(cart[0].quantity).toEqual(2);
    });

    it('adds a new product to the cart', () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });

        loadFromStorage();

        addToCart('e4f64a65-1377-42bc-89a5-e572d19252e2');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e4f64a65-1377-42bc-89a5-e572d19252e2');
        expect(cart[0].quantity).toEqual(1);
    })
})