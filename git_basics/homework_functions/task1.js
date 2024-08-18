//Function Declaration
function square (width, height){
    return width*=height
}
console.log(square(10,5))

//Function Expression
const square2 = function (width2, height2){
    return width2*=height2
}
console.log(square2(4,20))

//Aarrow Function
const square3 = (width3, height3) => width3 * height3;
console.log(square2(2,15))