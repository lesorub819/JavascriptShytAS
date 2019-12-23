"use strict";
const basket = {
    products:[
        {
            product_id: 5889,
            name: 'Монитор',
            trademark: 'LG',
            model: 'WP-45877',
            price: 16100,
            quantity: 2,
        },
        {
            product_id: 1050,
            name: 'Клавиатура',
            trademark: 'Logitech',
            model: 'F-235',
            price: 2500,
            quantity: 3,
        },
        {
            product_id: 777,
            name: 'Мышь',
            trademark: 'Genius',
            model: 'LP-500',
            price: 3200,
            quantity: 1,
        },
        {
            product_id: 2458,
            name: 'Наушники',
            trademark: 'JBL',
            model: 'P-4578',
            price: 18000,
            quantity: 1,
        },
        {   product_id: 1024,
            name: 'Ноутбук',
            trademark: 'ASUS',
            model: 'ES-1011-PS',
            price: 55000,
            quantity: 5,
        }
    ],
    basketField: document.querySelector(".cart"),
    renderBasket(){
        this.basketStyle();
        if (this.numberOfBasketElements()>0){
            this.basketField.innerHTML=this.renderFullBasket();

        }
        else {
            this.basketField.innerHTML=this.renderEmptyBasket();
        }
    },
    numberOfBasketElements(){
        return this.products.length;
    },
    renderFullBasket(){
        return `В корзине ${this.numberOfBasketElements()} товаров на сумму ${this.basketSum()}`;
    },
    basketSum(){
        let sum=0;
        for (let i=0; i<this.numberOfBasketElements();i++){
            sum=sum+this.products[i].price*this.products[i].quantity;
        }
        return sum;
    },
    renderEmptyBasket(){
        return 'Корзина пуста';
    },
    basketStyle(){
        this.basketField.style.fontSize='20px';
        this.basketField.style.fontWeight='700';
        this.basketField.style.fontStyle='italic';
    }
};
basket.renderBasket();