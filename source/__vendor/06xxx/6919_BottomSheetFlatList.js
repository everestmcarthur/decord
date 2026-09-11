// Module ID: 6919
// Function ID: 6920
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1636, 6911, 6699]

// Module 6919 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6911 = fn(6911);
const memoResult = fn(19).memo(module_6911.createBottomSheetScrollableComponent(fn(6699).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
