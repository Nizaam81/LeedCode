/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    const tempFn = Symbol('fn'); 
       context[tempFn] = this;  
         const result = context[tempFn](...args);
          delete context[tempFn];
          return result
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */