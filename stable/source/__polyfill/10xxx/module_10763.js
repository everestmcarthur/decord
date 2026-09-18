// Module ID: 10763
// Function ID: 10764
// Dependencies: [19, 21, 10764, 10767, 10771, 10772, 10773]

// Module 10763
import _mod10764 from "module_10764" /* 10764 */;
import _mod10767 from "module_10767" /* 10767 */;
import _mod10771 from "module_10771" /* 10771 */;
import _mod10772 from "module_10772" /* 10772 */;
import CarouselLayout from "CarouselLayout" /* 10773 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10764.useInitProps(defaultIndex);
  const commonVariables = _mod10767.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10771.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10772.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});
