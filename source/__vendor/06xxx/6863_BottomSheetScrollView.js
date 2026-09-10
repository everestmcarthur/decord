// Module ID: 6863
// Function ID: 6864
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1636, 6854, 6642]

// Module 6863 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6854 = fn(6854);
const memoResult = fn(19).memo(module_6854.createBottomSheetScrollableComponent(fn(6642).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
