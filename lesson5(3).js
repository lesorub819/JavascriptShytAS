"use strict";
const catalog ={
    catalogField: document.querySelector(".catalog"),
    products: [
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
    renderCatalog(){
        if (this.catalogLength()>0){
            this.renderCatalogList();
        }
        else {
            this.renderEmptyCatalog();
        }
    },
    catalogLength(){
       return this.products.length;
    },
    renderEmptyCatalog(){
        this.catalogField.innerHTML="Каталог товаров пуст";
    },
    renderCatalogList(){
        for (let i=0;i<this.catalogLength();i++){
            this.catalogField.insertAdjacentHTML("beforeend", this.renderCatalogItem(i)) ;
        }
    },
    renderCatalogItem(i){
        return `<div>
                <h3>${this.products[i].name} ${this.products[i].trademark}</h3>
                <p>Модель: ${this.products[i].model}</p>
                <p> Цена: ${this.products[i].price}</p>
                </div>`
    }
};
catalog.renderCatalog();