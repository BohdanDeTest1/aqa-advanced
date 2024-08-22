//function #1
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

//function #2
function recursion1(num1) {
while (num1 >= 1) {
    console.log(num1);
    num1--;
    };
};
recursion1(5);