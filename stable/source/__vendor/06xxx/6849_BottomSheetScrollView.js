// Module ID: 6849
// Function ID: 6850
// Name: BottomSheetScrollView
// Dependencies: [19, 17, 1636, 6840, 6628]

// Module 6849 (BottomSheetScrollView)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).ScrollView);
const module_6840 = fn(6840);
const memoResult = fn(19).memo(module_6840.createBottomSheetScrollableComponent(fn(6628).SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;
