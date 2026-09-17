// Module ID: 8434
// Function ID: 8435
// Name: SliderTrackMark
// Dependencies: [8428, 19, 17, 21, 8432]
// Exports: SliderTrackMark

// Module 8434 (SliderTrackMark)
import _mod19 from "module_19" /* 19 */;
import _mod8432 from "module_8432" /* 8432 */;
import module_8428 from "module_8428" /* 8428 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8428(_mod19);

export const SliderTrackMark = function SliderTrackMark(arg0) {
  ({ isTrue, thumbImage, StepMarker } = arg0);
  const obj2 = { style: _mod8432.styles.trackMarkContainer, children: null };
  ({ index, currentValue, min, max } = arg0);
  let jsxResult = null;
  if (StepMarker) {
    const range = { stepMarked: isTrue, index, currentValue, min, max };
    jsxResult = <StepMarker stepMarked={isTrue} index={index} currentValue={currentValue} min={min} max={max} />;
  }
  const items = [jsxResult, ];
  let jsxResult1 = null;
  if (thumbImage) {
    jsxResult1 = null;
    if (isTrue) {
      const obj3 = { style: tmp2(8432).styles.thumbImageContainer, testID: "sliderTrackMark-thumbImage", children: null };
      const obj4 = { source: thumbImage, style: tmp2(8432).styles.thumbImage };
      obj3.children = <tmp.Image source={thumbImage} style={tmp2(8432).styles.thumbImage} />;
      jsxResult1 = <tmp.View style={tmp2(8432).styles.thumbImageContainer} testID="sliderTrackMark-thumbImage">{null}</tmp.View>;
    }
  }
  items[1] = jsxResult1;
  obj2.children = items;
  return <get ActivityIndicator.View style={_mod8432.styles.trackMarkContainer}>{null}</get ActivityIndicator.View>;
};
