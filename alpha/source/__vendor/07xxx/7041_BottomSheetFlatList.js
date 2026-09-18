// Module ID: 7041
// Function ID: 7042
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1637, 7033, 6821]

// Module 7041 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7033 = fn(7033);
const memoResult = fn(19).memo(module_7033.createBottomSheetScrollableComponent(fn(6821).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
