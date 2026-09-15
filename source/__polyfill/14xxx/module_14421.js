// Module ID: 14421
// Function ID: 14422
// Dependencies: []

// Module 14421
let all = typeof document === "object";
if (typeof document === "object") {
  const _document = document;
  all = document.all;
}
if (undefined === all) {
  if (undefined !== all) {
    let fn = (fn) => {
      let tmp = typeof fn === "function";
      if (typeof fn !== "function") {
        tmp = fn === all;
      }
      return tmp;
    };
  }
  module.exports = fn;
}
fn = (fn) => typeof fn === "function";
