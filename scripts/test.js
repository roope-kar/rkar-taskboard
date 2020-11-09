const path = require('path');

const tests = [];

function test(name, fn) {
    tests.push({ name, fn });
}

global.test = test;

function run() {
    console.log('Collected', `\x1b[33m${tests.length}\x1b[0m`, 'tests');
    tests.forEach(({ name, fn }) => {
        try {
            fn();
            console.log('\x1b[32m✔\x1b[0m', name);
        } catch (e) {
            console.log('\x1b[31m×\x1b[0m', name);
            console.log(e.stack);
        }
    });
}

process.argv.slice(2).forEach(fileName => {
    require(path.resolve(__dirname, '..', fileName));
});

run();
