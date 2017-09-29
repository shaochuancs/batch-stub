/**
 * Created by cshao on 09/29/17.
 */

'use strict';

function assignFields(obj, configArray) {
  for (var i=0; i<configArray.length; i++) {
    var fieldObj = configArray[i];
    switch (fieldObj.type) {
      case 'string':
        obj[fieldObj.field] = '';
        break;
      case 'number':
        obj[fieldObj.field] = 42;
        break;
      case 'boolean':
        obj[fieldObj.field] = false;
        break;
      case 'function':
        obj[fieldObj.field] = function(){};
        break;
      case 'object':
        var internalObj = {};
        if (fieldObj.children) {
          assignFields(internalObj, fieldObj.children);
        }
        obj[fieldObj.field] = internalObj;
        break;
      case 'array':
        obj[fieldObj.field] = [];
        break;
      case 'null':
        obj[fieldObj.field] = null;
        break;
      case 'undefined':
        obj[fieldObj.field] = undefined;
        break;
    }
  }
}

module.exports = function(obj, configArray) {
  assignFields(obj, configArray);
};