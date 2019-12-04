const CJS = '../cjs/index.js';
let Null = require(CJS);

console.assert(Null instanceof Function === false, 'not an instance of Function');
console.assert(new Null instanceof Object === false, 'not creating instances of Object');

delete require.cache[require.resolve(CJS)];

delete Object.setPrototypeOf;
Null = require(CJS);

console.assert(Null instanceof Function, 'Null is instance of Function');
console.assert(new Null instanceof Object === false, 'not creating instances of Object');
