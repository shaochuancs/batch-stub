# batch-stub
Stub multiple fields according to configuration object.

With batch-stub, multiple fields can be stubbed according to the configuration object.

## Installation
```sh
$ npm install batch-stub
```

## Usage
To stub fields on object `x` using configuration object `config`:
```js
var batchStub = require('batch-stub');
batchStub(x, config);
```

Example `config` object would be:
```
var config = [{
  field: 'address',
  type: 'string'
}, {
  field: 'doSomething',
  type: 'function'
}, {
  field: 'job',
  type: 'object',
  children: [{
    field: 'category',
    type: 'string'
  }, {
    field: 'years',
    type: 'number'
  }]
}];
```

Supported field types include: `string`, `number`, `boolean`, `function`, `object`, `array`, `null` and `undefined`. When field type is `object`, it can use `children` to define the internal structure of that object.

If object `x` already has a field that exists in `config`, the field in `x` would be overridden by corresponding stub in the `config`.

## License
(The MIT License)

Copyright (c) 2016 Chuan Shao &lt;shaochuancs@gmail.com&gt;