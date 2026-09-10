// Module ID: 6861
// Function ID: 6862
// Dependencies: [19, 17, 1636, 6854, 6642]

// Module 6861
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).SectionList);
const module_6854 = fn(6854);
const memoResult = fn(19).memo(module_6854.createBottomSheetScrollableComponent(fn(6642).SCROLLABLE_TYPE.SECTIONLIST, animatedComponent));
memoResult.displayName = "BottomSheetSectionList";

export default memoResult;
