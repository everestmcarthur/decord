// Module ID: 6922
// Function ID: 6923
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1636, 6912, 6700]

// Module 6922 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6912 = fn(6912);
const memoResult = fn(19).memo(module_6912.createBottomSheetScrollableComponent(fn(6700).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
