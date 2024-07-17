const sayHi = () => {
    console.log("hii");
};

function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}

repeat(sayHi, 5);

function main(fu1, fu2, value) {
    const res = fu1(value);
    const ans = fu2(res);
    return ans;
}

const add = (a) => a + 10;

const mul = (b) => b * 10;

console.log(main(add, mul, 2));
