// Module ID: 14279
// Function ID: 14280
// Dependencies: [14280, 14281]

// Module 14279
const require = arg1;
const dependencyMap = arg6;
arg5.shouldPolyfill = undefined;
arg5.supportedValuesOf = undefined;
let obj = {
  enumerable: true,
  get() {
    return require(14280) /* shouldPolyfill */.shouldPolyfill;
  }
};
Object.defineProperty(arg5, "shouldPolyfill", obj);
obj = {
  enumerable: true,
  get() {
    return require(14281) /* supportedValuesOf */.supportedValuesOf;
  }
};
Object.defineProperty(arg5, "supportedValuesOf", obj);
