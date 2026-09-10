// Module ID: 6779
// Function ID: 6780
// Dependencies: [6777, 6728]
// Exports: useSimultaneousGestures

// Module 6779
import ComposedGestureName from "ComposedGestureName" /* 6728 */;
import _mod6777 from "module_6777" /* 6777 */;

require = arg1;
const dependencyMap = arg6;

export const useSimultaneousGestures = function useSimultaneousGestures() {
  const items = [...arguments];
  const items1 = [ComposedGestureName.ComposedGestureName.Simultaneous, ...items];
  return _mod6777.useComposedGesture.apply(items1);
};
