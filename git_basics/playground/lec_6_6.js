function createDiscount (percent) {
    return function (price){
        return price*(1 - percent/100);
    }
}
let tenPercentDiscount= createDiscount (10);
console.log(tenPercentDiscount(100));


function createDiscount2 (percent, price) {

    return price*(1 - percent/100);
    
}

console.log(createDiscount2(10,100));