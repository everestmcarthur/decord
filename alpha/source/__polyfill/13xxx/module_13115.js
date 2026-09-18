// Module ID: 13115
// Function ID: 13116
// Dependencies: [13116, 13099, 13095]

// Module 13115
import eventFromMessage from "eventFromMessage" /* 13099 */;
import _mod13116 from "module_13116" /* 13116 */;
import setupIntegration from "module_13095" /* 13095 */;


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
      const result = _mod13116.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
