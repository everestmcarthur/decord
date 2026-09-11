// Module ID: 12968
// Function ID: 12969
// Dependencies: [12969, 12952, 12948]

// Module 12968
import eventFromMessage from "eventFromMessage" /* 12952 */;
import _mod12969 from "module_12969" /* 12969 */;
import setupIntegration from "module_12948" /* 12948 */;


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
      const result = _mod12969.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
