// Module ID: 6850
// Function ID: 6851
// Name: BottomSheetVirtualizedList
// Dependencies: [19, 17, 1636, 6840, 6628]

// Module 6850 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6840 = fn(6840);
const memoResult = fn(19).memo(module_6840.createBottomSheetScrollableComponent(fn(6628).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
