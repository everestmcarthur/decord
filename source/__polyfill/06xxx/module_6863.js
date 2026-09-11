// Module ID: 6863
// Function ID: 6864
// Dependencies: [19, 21, 6860]
// Exports: default

// Module 6863
import _modDef6860 from "module_6860" /* 6860 */;
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
  return jsx(_modDef6860, { delayLongPress: num, extraButtonProps });
};
