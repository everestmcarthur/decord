// Module ID: 12140
// Function ID: 12141
// Name: TTIFirstContentfulPaint
// Dependencies: [19, 21, 4580, 9, 7863, 12141, 2]
// Exports: TTIFirstContentfulPaint

// Module 12140 (TTIFirstContentfulPaint)
import TTITrackerDefault from "TTITracker" /* 9 */;
import RootNavigationRef from "RootNavigationRef" /* 4580 */;
import PostTTIScheduler from "PostTTIScheduler" /* 7863 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/TTIFirstContentfulPaint.tsx");

export const TTIFirstContentfulPaint = function TTIFirstContentfulPaint(checkFocusedScreen) {
  checkFocusedScreen = checkFocusedScreen.checkFocusedScreen;
  const items = [checkFocusedScreen];
  const onMeasurement = noop.useCallback((nativeEvent) => {
    if (null != checkFocusedScreen) {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
    }
    const firstContentfulPaint = TTITrackerDefault.firstContentfulPaint;
    firstContentfulPaint.record(nativeEvent.nativeEvent.timestamp);
    PostTTIScheduler.notifyAboutTTI();
  }, items);
  return jsx(checkFocusedScreen(12141).TTIMeasurementView, { onMeasurement });
};
