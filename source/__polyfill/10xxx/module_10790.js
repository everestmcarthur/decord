// Module ID: 10790
// Function ID: 10791
// Dependencies: [19, 21, 10791, 10794, 10798, 10799, 10800]

// Module 10790
import _mod10791 from "module_10791" /* 10791 */;
import _mod10794 from "module_10794" /* 10794 */;
import _mod10798 from "module_10798" /* 10798 */;
import _mod10799 from "module_10799" /* 10799 */;
import CarouselLayout from "CarouselLayout" /* 10800 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10791.useInitProps(defaultIndex);
  const commonVariables = _mod10794.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10798.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10799.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});
