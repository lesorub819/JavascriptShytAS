"use strict";
//пункт 1 задания
/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 п.1 Префиксная форма, возвращает новое значение переменной с, значение переменно a так же стало 2
d = b++; alert(d);           // 1 п.2 Постфиксная форма, возвращает старое значение переменной с, при этом само значение переменной b увеличено на 1  и стало равняться 2
c = (2+ ++a); alert(c);      // 5 п.3 Префиксная форма. К переменной из п.1. добавлена еденица и возвращено значение 3 для проведения расчета
d = (2+ b++); alert(d);      // 4 п.4 Постфиксная форма. В расчетах используется значение переменной b из п.2. Значение самой переменной увеличено на 1 стало 3
alert(a);                    // 3 п.5 Выводим значение из п.3
alert(b);                    // 3 п.6 Выводим значение из п.4
 */
//пункт 2 задания
/*
var a = 2;
var x = 1 + (a *= 2); Получим 5, по причине того, что запись *= означает присваивание с умножением, то есть данная запись то же что и a=a*2
 */
//пункт 3 задания
alert('если a и b положительные, вывести их разность;\n' +
    'если а и b отрицательные, вывести их произведение;\n' +
    'если а и b разных знаков, вывести их сумму;');
let a, b, rezult;
a=+prompt('Введите первое число');
b=+prompt('Введите второе число');
function sum(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function minus(a,b){
    return a-b;
}

switch (true) {
    case a>= 0:
        switch (true) {
            case b >= 0:
                rezult = minus(a, b);
                break;
            case b < 0:
                rezult = sum(a, b);
                break;
        }
        break;
    case a < 0:
        switch (true) {
            case b >= 0:
                rezult = sum(a, b);
                break;
            case b < 0:
                rezult = multiply(a, b);
                break;

        }
}
alert('Результат вычислений: '+rezult);

// пункт 4 задания
alert('Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.');
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
let c=getRandomIntInclusive(0,20);
let output='';
switch (true) {
    case c>=0 && c<=0:
        output=output+'0';
    case c>=0 && c<=1:
        output=output+' 1';
    case c>=0 && c<=2:
        output=output+' 2';
    case c>=0 && c<=3:
        output=output+' 3';
    case c>=0 && c<=4:
        output=output+' 4';
    case c>=0 && c<=5:
        output=output+' 5';
    case c>=0 && c<=6:
        output=output+' 6';
    case c>=0 && c<=7:
        output=output+' 7';
    case c>=0 && c<=8:
        output=output+' 8';
    case c>=0 && c<=9:
        output=output+' 9';
    case c>=0 && c<=10:
        output=output+' 10';
    case c>=0 && c<=11:
        output=output+' 11';
    case c>=0 && c<=12:
        output=output+' 12';
    case c>=0 && c<=13:
        output=output+' 13';
    case c>=0 && c<=14:
        output=output+' 14';
    case c>=0 && c<=15:
        output=output+' 15';
    case c>=0 && c<=16:
        output=output+' 16';
    case c>=0 && c<=17:
        output=output+' 17';
    case c>=0 && c<=18:
        output=output+' 18';
    case c>=0 && c<=19:
        output=output+' 19';
    case c===20:
        output=output+' 20';
    break;
}
alert('Результат '+output);

//задание 5
alert('Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.');
function sum(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function minus(a,b){
    return a-b;
}
function div(a,b){
    return a/b.toFixed(2);
}
a=+prompt('Введите первое число:');
b=+prompt('Введите второе число:');
alert(a+' + '+b+' = '+sum(a,b));
alert(a+' - '+b+' = '+minus(a,b));
alert(a+' * '+b+' = '+multiply(a,b));
alert(a+' / '+b+' = '+div(a,b));

//задание 6
alert('Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).');
function sum(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function minus(a,b){
    return a-b;
}

function div(a,b){
    return (a/b).toFixed(2);
}
a=+prompt('Введите первое число:');
b=+prompt('Введите второе число:');
let operation=prompt('Введите название операции: sum, minus, multiply или div').toLowerCase();
function calculator(a,b,operation) {
   switch (operation){
       case 'sum':
           return sum(a,b);
           break;
       case 'multiply':
           return multiply(a,b);
           break;
       case 'minus':
           return minus(a,b);
           break;
       case 'div':
           return div(a,b);
           break;
   }

}
alert ('Результат: '+calculator(a,b,operation));


//задание 7
alert('Сравнить null и 0. Попробуйте объяснить результат');
let f=null, x=0;
if (f===x) {
    alert('Значения null и 0 равны');
}
    else{
    alert('Значения null и 0 не равны по причине того, что null означает отсутствие значения в переменной, а 0 является значением');
    }

//задание 8
alert('С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень');
let val, pow;
val=+prompt('Введите число для возведения в степень');
pow=+prompt('Введите степень');
let powernumber;
function power(val,pow) {
    if (pow==1){
        return val;
    }
    else {
        return val*power(val,pow-1);
    }
}
powernumber=power(val,pow);
alert(val+' в степени '+pow+' = '+powernumber);

