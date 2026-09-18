// Module ID: 7042
// Function ID: 7043
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1637, 7033, 6821]

// Module 7042 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_7033 = fn(7033);
const memoResult = fn(19).memo(module_7033.createBottomSheetScrollableComponent(fn(6821).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
