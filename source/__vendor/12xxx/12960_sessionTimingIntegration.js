// Module ID: 12960
// Function ID: 12961
// Name: sessionTimingIntegration
// Dependencies: [12881, 12923]

// Module 12960 (sessionTimingIntegration)
import _mod12881 from "module_12881" /* 12881 */;
import setupIntegration from "module_12923" /* 12923 */;

const require = globalThis.__r;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  _require = 1000 * require("module_12881").timestampInSeconds();
  return {
    name: "SessionTiming",
    processEvent(extra) {
      const result = 1000 * _mod12881.timestampInSeconds();
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
