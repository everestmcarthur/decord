// Module ID: 6896
// Function ID: 6897
// Dependencies: [19, 21, 6893]
// Exports: default

// Module 6896
import _modDef6893 from "module_6893" /* 6893 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;

export default function _default(delayLongPress) {
  let num = delayLongPress.delayLongPress;
  if (num === undefined) {
    num = 600;
  }
  let extraButtonProps = delayLongPress.extraButtonProps;
  if (extraButtonProps === undefined) {
    extraButtonProps = { rippleColor: "transparent", exclusive: true };
  }
  const merged = Object.assign(delayLongPress, Object.assign({ delayLongPress: 0, extraButtonProps: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(_modDef6893, { delayLongPress: num, extraButtonProps });
};
