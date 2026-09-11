// Module ID: 12966
// Function ID: 12967
// Dependencies: [12967, 12950, 12946]

// Module 12966
import eventFromMessage from "eventFromMessage" /* 12950 */;
import _mod12967 from "module_12967" /* 12967 */;
import setupIntegration from "module_12946" /* 12946 */;


export const linkedErrorsIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = obj.limit || 5;
  closure_1 = obj.key || "cause";
  return {
    name: "LinkedErrors",
    preprocessEvent(arg0, arg1, getOptions) {
      const options = getOptions.getOptions();
      const result = _mod12967.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
