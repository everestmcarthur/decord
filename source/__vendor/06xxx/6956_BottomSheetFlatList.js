// Module ID: 6956
// Function ID: 6957
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1637, 6948, 6736]

// Module 6956 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6948 = fn(6948);
const memoResult = fn(19).memo(module_6948.createBottomSheetScrollableComponent(fn(6736).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
