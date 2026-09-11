// Module ID: 6921
// Function ID: 6922
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1636, 6911, 6699]

// Module 6921 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6911 = fn(6911);
const memoResult = fn(19).memo(module_6911.createBottomSheetScrollableComponent(fn(6699).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
