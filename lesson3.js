"use strict";
//задание 1

let n= 100, i=1;

while (i<=n){
    if (i===1){
        console.log(i);
        i++;
    }
    if (i===2){
        console.log(i);
        i++;
    }
    let j=2;
    while (j<=i){
        if (i===j){
            console.log(i);
            break;
        }
        if ((i%j)>0){
            j++;
            continue;
        }
        else if ((i%j)===0){

        break;
        }
        console.log(i);
        i++;
    }
    i++;

}

// задание 2

let basket=[];
let item1=['cap',100,1], item2=['t-shirt',250,2], item3=['polo',150,3], item4=['socks',30,1], item5=['boots',210,1];
basket.push(item1);
basket.push(item2);
basket.push(item3);
basket.push(item4);
basket.push(item5);
function countProductSum(item){
    return item[1]*item[2];
}
function countBasketSum(arr){
    let TotalSum=0;
    for (let i=0; i<arr.length;i++){
    TotalSum=TotalSum+countProductSum(basket[i]);
    }
    return TotalSum;
}
let c=countBasketSum(basket);
console.log(c);

//задание 3

for (let k=0; k<10; console.log(k++)){}

// Задание 4
let str='';
for (let p=0; p<20; p++){
   str=str+'x';
   console.log(str);
}