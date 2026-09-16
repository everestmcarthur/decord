// Module ID: 16131
// Function ID: 16132
// Name: useOrientationLock
// Dependencies: [19, 4617, 1609, 7052, 8462, 2]
// Exports: default

// Module 16131 (useOrientationLock)
import DeviceUtils from "DeviceUtils" /* 4617 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7052 */;
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
      tmp4 = !tmp(1609).isMetaQuest();
      const tmpResult = tmp(1609);
    }
    if (tmp4) {
      tmp4 = !closure_0;
    }
    closure_0 = tmp4;
    if (tmp4) {
      tmp(8462).lockOrientation("PORTRAIT", false);
      const tmpResult2 = tmp(8462);
    }
    return () => {
      if (closure_0) {
        closure_0(dependencyMap[4]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        const obj = closure_0(dependencyMap[4]);
      }
    };
  }, items);
};
