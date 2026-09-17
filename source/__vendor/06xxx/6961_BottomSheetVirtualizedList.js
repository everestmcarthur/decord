// Module ID: 6961
// Function ID: 6962
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1637, 6951, 6739]

// Module 6961 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6951 = fn(6951);
const memoResult = fn(19).memo(module_6951.createBottomSheetScrollableComponent(fn(6739).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
