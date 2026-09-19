// Module ID: 7086
// Function ID: 7087
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1637, 7077, 6865]

// Module 7086 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_7077 = fn(7077);
const memoResult = fn(19).memo(module_7077.createBottomSheetScrollableComponent(fn(6865).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
