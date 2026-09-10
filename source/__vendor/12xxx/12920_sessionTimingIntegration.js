// Module ID: 12920
// Function ID: 12921
// Name: sessionTimingIntegration
// Dependencies: [12841, 12883]

// Module 12920 (sessionTimingIntegration)
import _mod12841 from "module_12841" /* 12841 */;
import setupIntegration from "module_12883" /* 12883 */;

const require = globalThis.__r;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  _require = 1000 * require("module_12841").timestampInSeconds();
  return {
    name: "SessionTiming",
    processEvent(extra) {
      const result = 1000 * _mod12841.timestampInSeconds();
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
