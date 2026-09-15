// Module ID: 13008
// Function ID: 13009
// Dependencies: [13009, 12992, 12988]

// Module 13008
import eventFromMessage from "eventFromMessage" /* 12992 */;
import _mod13009 from "module_13009" /* 13009 */;
import setupIntegration from "module_12988" /* 12988 */;


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
      const result = _mod13009.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
