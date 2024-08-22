//каунтер через замикання
function makeCount(){
    let count = 0;

    return function(){
        count++;
        return count;
    }
}

const counter = makeCount();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


//каунтер через генератор
function* makeCount2(){
    let count2 = 1;
    while (true) {
    yield count2;
    [count2] =[count2 + 1];}
    
}
const con = makeCount2();
console.log(con.next().value); // Виведе 1
console.log(con.next().value); // Виведе 2
console.log(con.next().value); // Виведе 3

const results0 = Array.from({ length: 10 }, () => con.next().value);
console.log(results0);



function createMult2 (multiplier){
return function(value){
    return value * multiplier
};
}
const double = createMult2(2)
const triple = createMult2(3)

console.log(double(3));
console.log(triple(4));