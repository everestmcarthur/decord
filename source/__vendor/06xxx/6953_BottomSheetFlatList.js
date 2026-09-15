// Module ID: 6953
// Function ID: 6954
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1637, 6945, 6733]

// Module 6953 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6945 = fn(6945);
const memoResult = fn(19).memo(module_6945.createBottomSheetScrollableComponent(fn(6733).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
