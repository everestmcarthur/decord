// Module ID: 13003
// Function ID: 13004
// Dependencies: [13004, 12987, 12983]

// Module 13003
import eventFromMessage from "eventFromMessage" /* 12987 */;
import _mod13004 from "module_13004" /* 13004 */;
import setupIntegration from "module_12983" /* 12983 */;


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
      const result = _mod13004.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
