// Module ID: 16083
// Function ID: 16084
// Name: useOrientationLock
// Dependencies: [19, 4584, 1608, 6994, 8397, 2]
// Exports: default

// Module 16083 (useOrientationLock)
import DeviceUtils from "DeviceUtils" /* 4584 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6994 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default function usePortraitOrientationOnly() {
  const tmp = useWideAuthViewDefault();
  closure_0 = tmp;
  const items = [tmp];
  const effect = noop.useEffect(() => {
    const isIpadOSResult = DeviceUtils.isIpadOS();
    let tmp4 = !isIpadOSResult;
    if (!isIpadOSResult) {
      tmp4 = !tmp(1608).isMetaQuest();
      const tmpResult = tmp(1608);
    }
    if (tmp4) {
      tmp4 = !closure_0;
    }
    closure_0 = tmp4;
    if (tmp4) {
      tmp(8397).lockOrientation("PORTRAIT", false);
      const tmpResult2 = tmp(8397);
    }
    return () => {
      if (closure_0) {
        closure_0(dependencyMap[4]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        const obj = closure_0(dependencyMap[4]);
      }
    };
  }, items);
};
