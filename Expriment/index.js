var addon = require('./build/Release/addon')

console.log(addon.hw())
console.log(addon.sum(3.5, 4.12343434333333333334))

function js () {
    let a = 0;
    for (let i = 0; i < 100000000; i++) {
      a++;
    }
    return a;
}

console.time('c++')
let a = addon.sum_test_speed()
console.log(a)
console.timeEnd('c++')

console.time('js')
let b = js()
console.log(b)
console.timeEnd('js')