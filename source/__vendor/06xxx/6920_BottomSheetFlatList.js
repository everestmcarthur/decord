// Module ID: 6920
// Function ID: 6921
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1636, 6912, 6700]

// Module 6920 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6912 = fn(6912);
const memoResult = fn(19).memo(module_6912.createBottomSheetScrollableComponent(fn(6700).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
