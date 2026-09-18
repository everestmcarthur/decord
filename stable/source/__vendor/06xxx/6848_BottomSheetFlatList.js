// Module ID: 6848
// Function ID: 6849
// Name: BottomSheetFlatList
// Dependencies: [19, 17, 1636, 6840, 6628]

// Module 6848 (BottomSheetFlatList)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6840 = fn(6840);
const memoResult = fn(19).memo(module_6840.createBottomSheetScrollableComponent(fn(6628).SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
