function curriedAd(a){
    return function (b){
       return function (c){
            return a + b + c;
        };
    };
};
const result = curriedAd(2)(3)(5)
console.log(result);