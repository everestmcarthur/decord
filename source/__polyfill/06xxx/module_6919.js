// Module ID: 6919
// Function ID: 6920
// Dependencies: [19, 17, 1636, 6912, 6700]

// Module 6919
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).SectionList);
const module_6912 = fn(6912);
const memoResult = fn(19).memo(module_6912.createBottomSheetScrollableComponent(fn(6700).SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
