const addOne = (x) => x + 1;
const double = (x) => x * 2;

const compose = (f, g) => (x) => f(g(x))
const addAndDouble = compose(double, addOne);

console.log(addAndDouble(5))