// Module ID: 13386
// Function ID: 13387
// Name: useBuyNitroListData
// Dependencies: [19, 1074, 7176, 1242, 13387, 2]
// Exports: default

// Module 13386 (useBuyNitroListData)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroListData.tsx");

export default function useBuyNitroListData(selection) {
  selection = selection.selection;
  const setTier = selection.setTier;
  let ref;
  noop = undefined;
  const tmp = setTier(ref[4])(selection.tier);
  ref = noop.useRef(null);
  noop = noop.useRef(false);
  const items = [setTier];
  const items1 = [tmp];
  const callback = noop.useCallback((arg0) => {
    closure_2.current = true;
    setTier(arg0);
  }, items);
  const effect = noop.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
      const _requestAnimationFrame = requestAnimationFrame;
      closure_0 = requestAnimationFrame(() => {
        const current = ref.current;
        let scrollToTopResult;
        if (current != null) {
          scrollToTopResult = current.scrollToTop({ animated: true });
        }
        return scrollToTopResult;
      });
      return () => cancelAnimationFrame(closure_0);
    }
  }, items1);
  let obj = { onScroll: null, onSelectNitroTier: null, listData: null, listRef: null };
  const analyticsLocations = setTier(ref[2])().analyticsLocations;
  closure_129_1 = noop.useRef(false);
  obj.onScroll = function onScroll(nativeEvent) {
    const current = ref.current;
    let tmp4 = !current;
    if (!current) {
      tmp4 = nativeEvent.nativeEvent.layoutMeasurement.height + tmp.y >= tmp2.height;
    }
    if (tmp4) {
      const obj2 = { location_stack: setTier };
      AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, obj2);
      ref.current = true;
    }
  };
  obj.onSelectNitroTier = callback;
  obj.listData = tmp;
  obj.listRef = ref;
  return obj;
};
