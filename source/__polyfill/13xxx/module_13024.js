// Module ID: 13024
// Function ID: 13025
// Dependencies: [13025, 13008, 13004]

// Module 13024
import eventFromMessage from "eventFromMessage" /* 13008 */;
import _mod13025 from "module_13025" /* 13025 */;
import setupIntegration from "module_13004" /* 13004 */;


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
      const result = _mod13025.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
