// Module ID: 10828
// Function ID: 10829
// Dependencies: [19, 21, 10829, 10832, 10836, 10837, 10838]

// Module 10828
import _mod10829 from "module_10829" /* 10829 */;
import _mod10832 from "module_10832" /* 10832 */;
import _mod10836 from "module_10836" /* 10836 */;
import _mod10837 from "module_10837" /* 10837 */;
import CarouselLayout from "CarouselLayout" /* 10838 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10829.useInitProps(defaultIndex);
  const commonVariables = _mod10832.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10836.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10837.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});
