function recursion(num) {
    console.log(num);
    if(num >= 1) {
        num-=1;
        recursion(num);
    } else {
        return;
    };
};
recursion(5);