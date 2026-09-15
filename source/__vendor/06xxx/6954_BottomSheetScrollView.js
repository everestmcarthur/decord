// Module ID: 6954
// Function ID: 6955
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1637, 6945, 6733]

// Module 6954 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6945 = fn(6945);
const memoResult = fn(19).memo(module_6945.createBottomSheetScrollableComponent(fn(6733).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
