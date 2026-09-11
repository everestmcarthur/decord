// Module ID: 12983
// Function ID: 12984
// Name: sessionTimingIntegration
// Dependencies: [12904, 12946]

// Module 12983 (sessionTimingIntegration)
import _mod12904 from "module_12904" /* 12904 */;
import setupIntegration from "module_12946" /* 12946 */;

const require = globalThis.__r;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  _require = 1000 * require("module_12904").timestampInSeconds();
  return {
    name: "SessionTiming",
    processEvent(extra) {
      const result = 1000 * _mod12904.timestampInSeconds();
      const obj2 = {};
      const merged = Object.assign(extra);
      const obj3 = {};
      const merged1 = Object.assign(extra.extra);
      obj3["session:start"] = closure_0;
      obj3["session:duration"] = result - closure_0;
      obj3["session:end"] = result;
      obj2.extra = obj3;
      return obj2;
    }
  };
});
