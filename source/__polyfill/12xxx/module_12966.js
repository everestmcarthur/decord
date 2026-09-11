// Module ID: 12966
// Function ID: 12967
// Dependencies: [12898, 12919, 12948]

// Module 12966
import setupIntegration from "module_12948" /* 12948 */;

const weakMap = new WeakMap();

export const functionToStringIntegration = setupIntegration.defineIntegration(() => ({
  name: "FunctionToString",
  setupOnce() {
    toString = Function.prototype.toString;
    try {
      const _Function = Function;
      Function.prototype.toString = function() {
        const items = [...arguments];
        const originalFunction = closure_1_0(12898).getOriginalFunction(this);
        const obj = closure_1_0(12898);
        let self = this;
        if (set.has(obj2.getClient())) {
          self = this;
          if (undefined !== originalFunction) {
            self = originalFunction;
          }
        }
        return toString.apply(self, items);
      };
    } catch (err) {
    }
  },
  setup(arg0) {
    const result = weakMap.set(arg0, true);
  }
}));
