function handleNum (number, handleEven, handleOdd){
        
        if(number % 2 == 0){
            handleEven(number);
        } else {
            handleOdd(number);
        }
}
function handleEven(number){
    console.log (`${number} number is even`)
}
    
function handleOdd(number){
   console.log(`${number} number is odd`)
}
    
handleNum(2,handleEven,handleOdd);