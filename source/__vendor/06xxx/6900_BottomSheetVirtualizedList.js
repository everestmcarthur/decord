// Module ID: 6900
// Function ID: 6901
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1636, 6890, 6678]

// Module 6900 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6890 = fn(6890);
const memoResult = fn(19).memo(module_6890.createBottomSheetScrollableComponent(fn(6678).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
