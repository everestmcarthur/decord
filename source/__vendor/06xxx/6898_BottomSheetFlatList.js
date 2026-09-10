// Module ID: 6898
// Function ID: 6899
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1636, 6890, 6678]

// Module 6898 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6890 = fn(6890);
const memoResult = fn(19).memo(module_6890.createBottomSheetScrollableComponent(fn(6678).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
