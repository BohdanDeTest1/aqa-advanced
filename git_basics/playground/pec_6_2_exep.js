function devide (a,b){
    if (b===0){
        throw new Error ('ділення на нуль не допустиме')
    }
    return a/b;
}
try{
    // код що може спричинити помилки
        console.log(devide(5,0));
}catch (error){
    console.log("наш еррор: ",error.message);
    
} finally {
    console.log("код завжди виповнюється");
}