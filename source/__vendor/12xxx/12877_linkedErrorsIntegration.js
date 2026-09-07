// Module ID: 12877
// Function ID: 12878
// Name: linkedErrorsIntegration
// Dependencies: [12878, 12861, 12857]

// Module 12877 (linkedErrorsIntegration)
import setupIntegration from "setupIntegration" /* 12857 */;


export const linkedErrorsIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = undefined;
  closure_1 = undefined;
  closure_0 = obj.limit || 5;
  closure_1 = obj.key || "cause";
  obj = {
    name: "LinkedErrors",
    preprocessEvent(arg0, arg1, getOptions) {
      const options = getOptions.getOptions();
      const result = callback(12878).applyAggregateErrorsToEvent(callback(12861).exceptionFromError, options.stackParser, options.maxValueLength, dependencyMap, callback, arg0, arg1);
    }
  };
  return obj;
});
