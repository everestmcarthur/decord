// Module ID: 282
// Function ID: 283
// Name: dispatchNativeEvent
// Dependencies: [283, 66, 149, 134, 286, 135]
// Exports: default

// Module 282 (dispatchNativeEvent)
import customBubblingEventTypes from "customBubblingEventTypes" /* 66 */;
import _mod283 from "module_283" /* 283 */;
import _modDef286 from "module_286" /* 286 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default function dispatchNativeEvent(self, arg1, timeStamp) {
  const result = _mod283.processResponderEvent(arg1, self, timeStamp);
  let tmp4 = customBubblingEventTypes.customBubblingEventTypes[arg1];
  const tmp5 = customBubblingEventTypes.customDirectEventTypes[arg1];
  if (null != tmp4) {
    let tmp6 = null != tmp4;
    if (tmp6) {
      tmp6 = true !== tmp4.phasedRegistrationNames.skipBubbling;
    }
    const result1 = tmp(149).topLevelTypeToEventType(arg1);
    const obj2 = { bubbles: tmp6, cancelable: true };
    let timestamp = timeStamp.timeStamp;
    if (timestamp == null) {
      timestamp = timeStamp.timestamp;
    }
    if (typeof timestamp === "number") {
      const result2 = tmp(134).setEventInitTimeStamp(obj2, timestamp);
      const tmpResult4 = tmp(134);
    }
    const tmpResult = tmp(149);
    if (tmp4 == null) {
      tmp4 = tmp5;
    }
    const tmp92 = new _modDef286(result1, obj2, timeStamp, tmp4);
    tmp(135).dispatchTrustedEvent(self, tmp92);
    const tmpResult5 = tmp(135);
  }
  _mod283.rethrowCaughtError();
};
