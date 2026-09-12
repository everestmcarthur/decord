// Module ID: 10886
// Function ID: 10887
// Dependencies: [19, 21, 10887, 10890, 10894, 10895, 10896]

// Module 10886
import _mod10887 from "module_10887" /* 10887 */;
import _mod10890 from "module_10890" /* 10890 */;
import _mod10894 from "module_10894" /* 10894 */;
import _mod10895 from "module_10895" /* 10895 */;
import CarouselLayout from "CarouselLayout" /* 10896 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10887.useInitProps(defaultIndex);
  const commonVariables = _mod10890.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10894.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10895.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});
