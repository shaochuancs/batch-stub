/**
 * Created by cshao on 09/29/17.
 */

'use strict';

var assert = require('assert');
var _ = require('lodash');
var batchStub = require('../');

describe('Test batch-stub', function() {
  var stubObj = {a: 42};
  var config = [{
    field: 'address',
    type: 'string'
  },{
    field: 'doSomething',
    type: 'function'
  },{
    field: 'job',
    type: 'object',
    children: [{
      field: 'category',
      type: 'string'
    }, {
      field: 'years',
      type: 'number'
    }]
  },{
    field: 'hate',
    type: 'null'
  },{
    field: 'love',
    type: 'undefined'
  },{
    field: 'age',
    type: 'number'
  }, {
    field: 'isBorn',
    type: 'boolean'
  }, {
    field: 'hobby',
    type: 'array'
  }, {
    field: 'a',
    type: 'string'
  }];

  batchStub(stubObj, config);

  it('should stub fields correctly', function() {
    assert(_.isEqual(typeof stubObj.address, 'string'));
    assert(_.isEqual(typeof stubObj.doSomething, 'function'));
    assert(_.isEqual(typeof stubObj.job, 'object'));
    assert(_.isEqual(stubObj.hate, null));
    assert(_.isEqual(stubObj.love, undefined));
    assert(_.isEqual(typeof stubObj.age, 'number'));
    assert(_.isEqual(typeof stubObj.isBorn, 'boolean'));
    assert(_.isArray(stubObj.hobby));
  });

  it('should override origin field', function() {
    assert(_.isEqual(typeof stubObj.a, 'string'));
  });

  it('should stub object field\'s internal structure', function() {
    assert(_.isEqual(typeof stubObj.job.category, 'string'));
    assert(_.isEqual(typeof stubObj.job.years, 'number'));
  });
});