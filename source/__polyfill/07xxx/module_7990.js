// Module ID: 7990
// Function ID: 7991
// Dependencies: []
// Exports: debounce

// Module 7990

export function debounce(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return function() {
    const self = this;
    closure_0 = [...arguments];
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      closure_0.apply(self, closure_0);
    }, self);
  };
}
