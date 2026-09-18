// Module ID: 12877
// Function ID: 12878
// Dependencies: [12878, 12861, 12857]

// Module 12877
import eventFromMessage from "eventFromMessage" /* 12861 */;
import _mod12878 from "module_12878" /* 12878 */;
import setupIntegration from "module_12857" /* 12857 */;


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
      const result = _mod12878.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
