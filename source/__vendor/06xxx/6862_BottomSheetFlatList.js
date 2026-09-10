// Module ID: 6862
// Function ID: 6863
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1636, 6854, 6642]

// Module 6862 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6854 = fn(6854);
const memoResult = fn(19).memo(module_6854.createBottomSheetScrollableComponent(fn(6642).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
