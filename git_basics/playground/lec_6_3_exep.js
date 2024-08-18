function sq (number){
    if (number < 0){
        throw new Error ("не можжливо")
    }
     return Math.sqrt(number);   

}
try  {
    let result = sq(0.1);
    console.log(result);
}catch (error) {
    console.log(error.message)
}