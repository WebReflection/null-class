# null class

[![Build Status](https://travis-ci.com/WebReflection/null-class.svg?branch=master)](https://travis-ci.com/WebReflection/null-class) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/null-class/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/null-class?branch=master)

A `Null` class to simplify `Object.create(null)` and `class extends null {}` patterns.

This module exports nothing else than:

```js
function Null(){}
```

Before being exported though, such `Null` "_class_" is modified as such:
```js
Object.setPrototypeOf(Null, null);
Null.prototype = Object.create(null);
```

The `Null` class can be used to _extend_, as in `class extends Null {}`, or to create, faster than `Object.create(null)`, dictionaries of any kind, via `new Null`.

### Compatibility

Every engine capable of `Object.create(null)`. If the engine doesn't know `Object.setPrototypeOf`, the `Null` class will simply still be an instance of `Function`, but it can still be extended, or used to create `null` dictionaries via `new Null`.
