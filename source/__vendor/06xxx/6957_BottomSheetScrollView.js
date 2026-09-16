// Module ID: 6957
// Function ID: 6958
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1637, 6948, 6736]

// Module 6957 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6948 = fn(6948);
const memoResult = fn(19).memo(module_6948.createBottomSheetScrollableComponent(fn(6736).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
