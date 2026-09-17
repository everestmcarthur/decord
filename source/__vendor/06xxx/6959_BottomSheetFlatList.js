// Module ID: 6959
// Function ID: 6960
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1637, 6951, 6739]

// Module 6959 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6951 = fn(6951);
const memoResult = fn(19).memo(module_6951.createBottomSheetScrollableComponent(fn(6739).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
