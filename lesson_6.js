"use strict";
const basket = {
    products:[],
    basketField: document.querySelector(".cart"),
    renderBasket(){
        this.basketStyle();
        if (this.numberOfBasketElements()>0){
            this.basketField.innerHTML=this.renderFullBasket();

        }
        else {
            this.basketField.innerHTML=this.renderEmptyBasket();
        }
        localStorage.setItem("basket", JSON.stringify(basket));
    },
    numberOfBasketElements(){
        return this.products.length;
    },
    renderFullBasket(){
        return `В корзине ${this.numberOfBasketElements()} товаров на сумму ${this.basketSum()}
        <a href="cart.html">Перейти в корзину</a>`;
    },
    basketSum(){
        let sum=0;
        for (let i=0; i<this.numberOfBasketElements();i++){
            sum=sum+this.products[i].price*this.products[i].quantity;
        }
        return sum;
    },
    renderEmptyBasket(){
        return `Корзина пуста
        <a href="cart.html" class="goToCartButton">Перейти в корзину</a>`;
    },
    basketStyle(){
        this.basketField.style.fontSize='20px';
        this.basketField.style.fontWeight='700';
        this.basketField.style.fontStyle='italic';
    },
    addtobasket(product_id) {
        this.products.push(catalog.products.find(products=> products.product_id===product_id));
        this.renderBasket();

    }
};
const catalog ={
    basket: {},
    catalogField: null,
    modalPictureField: null,
    products: [
        {
            product_id: 5889,
            name: 'Монитор',
            trademark: 'LG',
            model: 'WP-45877',
            price: 16100,
            quantity: 1,
        },
        {
            product_id: 1050,
            name: 'Клавиатура',
            trademark: 'Logitech',
            model: 'F-235',
            price: 2500,
            quantity: 1,
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
            quantity: 1,
        }
    ],
    init(){
        this.catalogField= document.querySelector(".catalog");
        this.modalPictureField=document.querySelector(".catalog-overlay");
        this.basket=basket;
        this.addEventHandlers();
        this.renderCatalog();
    },
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
        return `<div class="CatalogItem">
                <h3 class="CatalogItem_h3">${this.products[i].name} ${this.products[i].trademark}</h3>
                <p class="CatalogItem_p">Модель: ${this.products[i].model}</p>
                <img class="CatalogItem_img" data-id=${this.products[i].product_id} src="img/${this.products[i].product_id}small.jpg" alt="">
                <p class="CatalogItem_p"> Цена: ${this.products[i].price}</p>
                <input type="button" class="button" value="Купить" data-id=${this.products[i].product_id}>
                </div>`
    },
    addEventHandlers(){
        this.catalogField.addEventListener('click', event=>this.addToBasket(event));
        this.catalogField.addEventListener('click', event=>this.showProduct(event));
        this.modalPictureField.addEventListener('click', event=>this.closeModalPicture(event));
    },
    addToBasket(event){
        if (!event.target.classList.contains('button')) return;
        const product_code= +event.target.dataset.id;
        this.basket.addtobasket(product_code);
    },
    showProduct(event){
        if (!event.target.classList.contains('CatalogItem_img')) return;
        const product_code = +event.target.dataset.id;
        this.showModalPicture(product_code);
    },
    showModalPicture(product_code){
        document.querySelector('.catalog-wrapper').style.display='flex';
        this.modalPictureField.style.display='flex';
        this.modalPictureField.insertAdjacentHTML("beforeend", this.addModalPicture(product_code));
    },
    addModalPicture(product_code){
        return `<img class="catalogItem_img__max" src="img/${product_code}big.jpg" alt="">`;
    },
    closeModalPicture(event) {
        if (event.target.classList.contains('catalogItem_img__max')) return;
        document.querySelector('.catalog-wrapper').style.display='none';
        this.modalPictureField.style.display='none';
        document.querySelector('.catalogItem_img__max').remove();
    },
};
basket.products=(JSON.parse(localStorage.getItem("basket"))).products;
catalog.init();
basket.renderBasket();