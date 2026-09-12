// Module ID: 13002
// Function ID: 13003
// Dependencies: [13003, 12986, 12982]

// Module 13002
import eventFromMessage from "eventFromMessage" /* 12986 */;
import _mod13003 from "module_13003" /* 13003 */;
import setupIntegration from "module_12982" /* 12982 */;


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
      const result = _mod13003.applyAggregateErrorsToEvent(eventFromMessage.exceptionFromError, options.stackParser, options.maxValueLength, closure_1, closure_0, arg0, arg1);
    }
  };
});
