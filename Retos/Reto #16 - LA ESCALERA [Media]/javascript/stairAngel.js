"use strict";

let cantStairs = +prompt("Numero","");

let stair = '__';

console.log(stairs(cantStairs));


function stairs(num){
    if(num > 0){
        for(let i = 0; i <= num; i++){
            console.log(' '.repeat(num - i)+'_|');
            console.log('\n');
        }
    }else if(num < 0){
        num = Math.abs(num);
        for(let i = num; i > 0; i--){
            console.log(' '.repeat(num - i) + '|_');
            console.log('\n');
        }
    }else if(num == 0) return stair;
}