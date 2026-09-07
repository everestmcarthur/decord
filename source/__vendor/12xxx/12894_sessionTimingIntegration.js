// Module ID: 12894
// Function ID: 12895
// Name: sessionTimingIntegration
// Dependencies: [12815, 12857]

// Module 12894 (sessionTimingIntegration)
import setupIntegration from "setupIntegration" /* 12857 */;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = _require(12815);
  _require = 1000 * obj.timestampInSeconds();
  obj = {
    name: "SessionTiming",
    processEvent(extra) {
      let obj = callback(closure_1_1[0]);
      const result = 1000 * obj.timestampInSeconds();
      obj = {};
      const merged = Object.assign(extra);
      obj = {};
      const merged1 = Object.assign(extra.extra);
      obj["session:start"] = callback;
      obj["session:duration"] = result - callback;
      obj["session:end"] = result;
      obj.extra = obj;
      return obj;
    }
  };
  return obj;
});
