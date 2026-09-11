// Module ID: 6921
// Function ID: 6922
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1636, 6912, 6700]

// Module 6921 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6912 = fn(6912);
const memoResult = fn(19).memo(module_6912.createBottomSheetScrollableComponent(fn(6700).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
