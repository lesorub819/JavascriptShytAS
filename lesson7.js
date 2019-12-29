'use strict';
const importedBasketFromPreviousPage = JSON.parse(localStorage.getItem("basket"));
const basket = {
basket: {},
basketField: document.querySelector('.catalog'),
basketSumField: document.querySelector('.basketSum'),
renderBasket(){
    if (importedBasketFromPreviousPage===null){
        this.renderEmptyBasket();
        return;
    }
    if (this.basketLength()>0){
        this.basketField.innerHTML='';
        this.renderBasketList();
        this.renderBasketSum();

    }
    else {
        this.basketField.innerHTML='';
        this.renderEmptyBasket();
    }
},
basketLength(){
    return this.basket.products.length;
},
renderEmptyBasket(){
    this.basketSumField.innerHTML='Корзина пуста';
},
renderBasketList: function () {
        for (let i = 0; i < this.basketLength(); i++) {
            this.basketField.insertAdjacentHTML("beforeend", this.renderBasketItem(i));
        }
},
renderBasketItem(i){
    return `<div class="CatalogItem">
                <h3 class="CatalogItem_h3">${this.basket.products[i].name} ${this.basket.products[i].trademark}</h3>
                <p class="CatalogItem_p">Модель: ${this.basket.products[i].model}</p>
                <img class="CatalogItem_img" data-id=${this.basket.products[i].product_id} src="img/${this.basket.products[i].product_id}small.jpg" alt="">
                <p class="CatalogItem_p"> Цена: ${this.basket.products[i].price}</p>
                <input type="button" class="button" value="Удалить" data-id=${this.basket.products[i].product_id} data-numberinbasket=${i}>
                </div>`
},
renderBasketSum(){
    this.basketSumField.innerHTML=`В корзине ${this.numberOfBasketElements()} товаров на сумму ${this.basketSum()}` ;
},
numberOfBasketElements()  {
    return this.basket.products.length;
}  ,
basketSum()    {
    let sum=0;
    for (let i=0; i<this.numberOfBasketElements();i++){
        sum=sum+this.basket.products[i].price*this.basket.products[i].quantity;
    }
    return sum;
},
addEventHandlers() {
    this.basketField.addEventListener('click',event=>this.removeFromBasket(event));
    document.addEventListener('click', event=>this.showNecessaryBlock(event));
},
showNecessaryBlock(event){
    if (!event.target.classList.contains('cartNextStep')) return;
    const block_number = +event.target.dataset.blocknumber;
    const block = document.getElementById(`${block_number}`);
    block.style.display='none';
    if (block_number===2){
        (document.getElementById('0')).style.display='block';
    }
    (document.getElementById(`${block_number+1}`)).style.display='block';
},
removeFromBasket(event){
    if (!event.target.classList.contains('button')) return;
    const product_number = +event.target.dataset.numberinbasket;
    this.basket.products.splice(product_number,1);
    this.renderBasket();
    localStorage.clear();
    localStorage.setItem("basket", JSON.stringify(basket.basket));
},
};
basket.basket=importedBasketFromPreviousPage;
basket.addEventHandlers();
basket.renderBasket();