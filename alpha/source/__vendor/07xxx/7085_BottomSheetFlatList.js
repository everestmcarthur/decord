// Module ID: 7085
// Function ID: 7086
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1637, 7077, 6865]

// Module 7085 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7077 = fn(7077);
const memoResult = fn(19).memo(module_7077.createBottomSheetScrollableComponent(fn(6865).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
