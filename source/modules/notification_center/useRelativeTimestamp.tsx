// Module ID: 16107
// Function ID: 16108
// Name: useRelativeTimestamp
// Dependencies: [32, 19, 7714, 1090, 2]
// Exports: useRelativeTimestamp

// Module 16107 (useRelativeTimestamp)
import NotificationCenterUtils from "NotificationCenterUtils" /* 7714 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/useRelativeTimestamp.tsx");

export const useRelativeTimestamp = function useRelativeTimestamp(timestamp) {
  timestamp = timestamp.timestamp;
  let flag = timestamp.abbreviated;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = _slicedToArray(noop.useState(() => NotificationCenterUtils.getRelativeTimestamp(timestamp, flag)), 2);
  dependencyMap = tmp[1];
  const items = [timestamp, flag];
  const effect = noop.useEffect(() => {
    dependencyMap(timestamp(7714).getRelativeTimestamp(interval, flag));
    const diff = Date.now() - interval;
    if (diff <= flag(1090).Millis.DAY) {
      if (diff >= tmp4(1090).Millis.HOUR) {
        let MINUTE = tmp4(1090).Millis.HOUR;
      } else {
        MINUTE = tmp4(1090).Millis.MINUTE;
      }
      const _setInterval = setInterval;
      interval = setInterval(() => {
        dependencyMap(timestamp(7714).getRelativeTimestamp(closure_0, flag));
      }, MINUTE, MINUTE - diff % MINUTE);
      return () => clearInterval(closure_0);
    }
    const obj = timestamp(7714);
  }, items);
  return tmp[0];
};
