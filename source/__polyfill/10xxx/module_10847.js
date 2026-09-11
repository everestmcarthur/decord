// Module ID: 10847
// Function ID: 10848
// Dependencies: [19, 21, 10848, 10851, 10855, 10856, 10857]

// Module 10847
import _mod10848 from "module_10848" /* 10848 */;
import _mod10851 from "module_10851" /* 10851 */;
import _mod10855 from "module_10855" /* 10855 */;
import _mod10856 from "module_10856" /* 10856 */;
import CarouselLayout from "CarouselLayout" /* 10857 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10848.useInitProps(defaultIndex);
  const commonVariables = _mod10851.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10855.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10856.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});
