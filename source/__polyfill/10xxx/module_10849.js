// Module ID: 10849
// Function ID: 10850
// Dependencies: [19, 21, 10850, 10853, 10857, 10858, 10859]

// Module 10849
import _mod10850 from "module_10850" /* 10850 */;
import _mod10853 from "module_10853" /* 10853 */;
import _mod10857 from "module_10857" /* 10857 */;
import _mod10858 from "module_10858" /* 10858 */;
import CarouselLayout from "CarouselLayout" /* 10859 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10850.useInitProps(defaultIndex);
  const commonVariables = _mod10853.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10857.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10858.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});
