// Module ID: 6955
// Function ID: 6956
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1637, 6945, 6733]

// Module 6955 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6945 = fn(6945);
const memoResult = fn(19).memo(module_6945.createBottomSheetScrollableComponent(fn(6733).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
