"use strict";
//Заданиие 1
/*
const units='Еденицы', tens= 'Десятки', hundreds= 'Сотни';
const numObj = {
    [units]: null,
    [tens]: null,
    [hundreds]: null,
    convertNumToObj(){
        inputNum.getNumber();
        if (inputNum.number>99){
        this[units]=inputNum.number%10;
        this[tens]=((inputNum.number-inputNum.number%10)/10)%10;
        this[hundreds]= Math.floor(inputNum.number/100);
        }
        else if (inputNum.number>10 && inputNum.number<100){
            this[units]=inputNum.number%10;
            this[tens]=((inputNum.number-inputNum.number%10)/10)%10;
            this[hundreds]= 0;
        }
        else {
            this[units]=inputNum.number;
            this[tens]=0;
            this[hundreds]= 0;
        }
    }
    };
const inputNum={
    number: 0,
    getNumber(num){
        num = +prompt('Введите число от 0 до 999') ;
        for(;;){
        if (num<0) {
            num= +prompt('Вы ввели число меньше 0. Пожалуйста, введите число от 0 до 999');
        }
        else if (num>999){
            num= +prompt('Вы ввели число больше 999. Пожалуйста, введите число от 0 до 999');
        }
        else if (isNaN(num)){
            num= +prompt('Вы ввели не число. Пожалуйста, введите число от 0 до 999');
        }
        else{
            this.number=num;
            break;
        }
        }

    }
};
numObj.convertNumToObj();
console.log(numObj);

 */
//Задание 2
const Notebook={
    product_id: 1024,
    name: 'Ноутбук',
    trademark: 'ASUS',
    model: 'ES-1011-PS',
    price: 55000,
};
const Headphones={
    product_id: 2458,
    name: 'Наушники',
    trademark: 'JBL',
    model: 'P-4578',
    price: 18000,
};
const Mouse={
    product_id: 777,
    name: 'Мышь',
    trademark: 'Genius',
    model: 'LP-500',
    price: 3200,
};
const Keyboard={
    product_id: 1050,
    name: 'Клавиатура',
    trademark: 'Logitech',
    model: 'F-235',
    price: 2500,
};
const Display={
    product_id: 5889,
    name: 'Монитор',
    trademark: 'LG',
    model: 'WP-45877',
    price: 16100,
};
const basket = [];
cycle: for (let z=0;;z++){
    let productCodeToCart=+prompt('Введите товар, который хотите добавить в корзину: \n 1:Ноутбук\n2:Наушники\n3:Мышь\n4:Клавиатура\n5:Монитор\nДля окончания добавления товаров в корзину ввведите 0')
    if (productCodeToCart<0 || productCodeToCart>5){
        alert('Вы ввели недопустимое значение');
        continue;}
        else{

    switch (productCodeToCart){
        case 0: break cycle;
        case 1:  basket.push(Object.create(Notebook,{quantity:{enumerable: true, configurable: true, writable: true, value:+prompt('Введите количество товара для добавления в корзину')}}));
        console.log(`Вы добавили товар ${basket[z].name} в количестве ${basket[z].quantity} шт. на сумму ${basket[z].quantity*basket[z].price} руб.`);
        alert(`Вы добавили товар ${basket[z].name} в количестве ${basket[z].quantity} шт. на сумму ${basket[z].quantity*basket[z].price} руб.`);
        break;
        case 2:  basket.push(Object.create(Headphones,{quantity:{enumerable: true, configurable: true, writable: true, value:+prompt('Введите количество товара для добавления в корзину')}}));
        console.log(`Вы добавили товар ${basket[z].name} в количестве ${basket[z].quantity} шт. на сумму ${basket[z].quantity*basket[z].price} руб.`);
        alert(`Вы добавили товар ${basket[z].name} в количестве ${basket[z].quantity} шт. на сумму ${basket[z].quantity*basket[z].price} руб.`);
        break;
        case 3:  basket.push(Object.create(Mouse,{quantity:{enumerable: true, configurable: true, writable: true, value:+prompt('Введите количество товара для добавления в корзину')}}));
        console.log(`Вы добавили товар ${basket[z].name} в количестве ${basket[z].quantity} шт. на сумму ${basket[z].quantity*basket[z].price} руб.`);
        alert(`Вы добавили товар ${basket[z].name} в количестве ${basket[z].quantity} шт. на сумму ${basket[z].quantity*basket[z].price} руб.`);
        break;
        case 4:  basket.push(Object.create(Keyboard,{quantity:{enumerable: true, configurable: true, writable: true, value:+prompt('Введите количество товара для добавления в корзину')}}));
        console.log(`Вы добавили товар ${basket[z].name} в количестве ${basket[z].quantity} шт. на сумму ${basket[z].quantity*basket[z].price} руб.`);
        alert(`Вы добавили товар ${basket[z].name} в количестве ${basket[z].quantity} шт. на сумму ${basket[z].quantity*basket[z].price} руб.`);
        break;
        case 5:  basket.push(Object.create(Display,{quantity:{enumerable: true, configurable: true, writable: true, value:+prompt('Введите количество товара для добавления в корзину')}}));
        console.log(`Вы добавили товар ${basket[z].name} в количестве ${basket[z].quantity} шт. на сумму ${basket[z].quantity*basket[z].price} руб.`);
        alert(`Вы добавили товар ${basket[z].name} в количестве ${basket[z].quantity} шт. на сумму ${basket[z].quantity*basket[z].price} руб.`);
        break;

    }
}
}
let totalSum=0;
for (let x=0;x<basket.length;x++){
    totalSum=totalSum+basket[x].price*basket[x].quantity;
}
console.log(`Сумма товаров в корзине составляет ${totalSum} руб.`);
alert(`Сумма товаров в корзине составляет ${totalSum} руб.`);

