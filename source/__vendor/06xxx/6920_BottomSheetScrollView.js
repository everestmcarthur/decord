// Module ID: 6920
// Function ID: 6921
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1636, 6911, 6699]

// Module 6920 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6911 = fn(6911);
const memoResult = fn(19).memo(module_6911.createBottomSheetScrollableComponent(fn(6699).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
