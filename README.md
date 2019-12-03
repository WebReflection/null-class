# null class

A `Null` class to simplify `Object.create(null)` and `class extends null {}` patterns.

This module exports nothing else than:

```js
function Null(){'use strict'}
```

Before being exported though, such `Null` "_class_" is modified as such:
```js
Object.setPrototypeOf(Null, null);
Null.prototype = Object.create(null);
```

Such `Null` class can be used to _extend_, as in `class extends Null {}`, or to create, faster than `Object.create(null)`, dictionaries of any kind, via `new Null`.

### Compatibility

Every engine capable of `Object.create(null)`. If the engine doesn't know `Object.setPrototypeOf`, the `Null` class will simply still be an instance of `Function`, but it can still be extended, or used to create `null` dictionaries via `new Null`.
