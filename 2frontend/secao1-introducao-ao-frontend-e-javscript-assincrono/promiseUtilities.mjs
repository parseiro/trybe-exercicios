// polyfill-safe guard check
if (!Promise.observe) {
    Promise.observe = function (pr, cb) {
        // side-observe `pr`'s resolution
        pr.then(
            function fulfilled(msg) {
                // schedule callback async (as Job)
                Promise.resolve(msg).then(cb);
            })
            .catch(
                function rejected(err) {
                    // schedule callback async (as Job)
                    Promise.resolve(err).then(cb);
                }
            );
        // return original promise
        return pr;
    };
}

function delay(ms) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(ms);
        }, ms));
}

/*delay(100).then((t) => {
    console.log(`Step 1 (after ${t}ms)`);
    return Promise.resolve(t);
})
    .then((t) => delay(2 * t)).then((t) => {
    console.log(`Step 1 (after ${t}ms)`);
    return Promise.resolve(t);
})
    .then((t) => delay(2 * t)).then((t) => {
    console.log(`Step 1 (after ${t}ms)`);
    return Promise.resolve(t);
});*/


var x = 1;

function* pauser() {
    x++;
    yield; // pause!
    x++;
}

function bar() {
    x++;
}

/*var it = pauser();
console.log(x);
it.next();
console.log(x);
bar();
console.log(x);
it.next();
console.log(x);*/


function *foo() {
    console.log(`Ativado pelo primeiro next(): x = undefined, y = undefined, z = ${z}`);
    let x = yield 2;
    console.log(`Ativado pelo segundo next(): x = ${x}, y = undefined, z = ${z}`);
    z++;
    let y = yield (x * z);
    console.log(`Ativado pelo terceiro next(): x = ${x}, y = ${y}, z = ${z}`);
    yield x + y + z;
}

/*let z = 1;
let it = foo();

console.log(`Vou chamar o primeiro next()`);
const valor1 = it.next().value;
console.log(`Primeiro next() retornou: ${valor1}`); // 2
console.log(`Vou chamar next(3)`);
const valor2 = it.next(3).value; // x=3
console.log(`Segundo next(3) retornou: ${valor2}`) // x continua 3, z continua 2, yield retorna 6
console.log(`Vou chamar next(29)`);
const valor3 = it.next(29).value;     // y = 29
console.log(`Terceiro next(29) retornou: ${valor3}`)*/

function *something() {
    try {
        let nextVal = 1;
        while (true) {
            nextVal = (3* nextVal) + 6;
            yield nextVal;
        }
    } finally {
        console.log('Limpando...');
    }
}

/*const it = something();
for (const numero of it) {
    console.log(numero);
    if (numero > 500) {
        console.log('Passei de 500...');
        // break;
        it.return();
    }
}*/

export { delay };
