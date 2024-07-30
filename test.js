
function power(x) {
    return function (y) {
        console.log(y)
        if (y === 0) return 1;
        return x * power(x)(y - 1)
    }
}

const result = power(2)(4)

console.log(result)