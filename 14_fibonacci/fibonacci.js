const fibonacci = function(n) {
    n = parseInt(n)
    if (n<0) return "OOPS"
    else if (n===0) return 0
    n = parseInt(n)
    let a = 1
    let b = 1
    for (let i=1; i<=n-2; i++) {
        let temp = b
        b = a+b
        a = temp
    }

    return b
};

// Do not edit below this line
module.exports = fibonacci;
