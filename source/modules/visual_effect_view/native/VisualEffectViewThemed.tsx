// Module ID: 8392
// Function ID: 8393
// Name: VisualEffectViewThemed
// Dependencies: [19, 21, 4574, 4491, 5050, 2]

// Module 8392 (VisualEffectViewThemed)
import shared from "shared" /* 4491 */;
import useThemeDefault from "useTheme" /* 4574 */;
import noop from "module_19" /* 19 */;

const VisualEffectViewDefault = tmp(5050);
require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default noop.forwardRef(function VisualEffectViewThemed(arg0, ref) {
  const tmp3 = useThemeDefault();
  let str = "dark";
  if (obj.isThemeLight(tmp3)) {
    str = "light";
  }
  obj = shared;
  const obj2 = { ref, blurTheme: str };
  const merged = Object.assign(arg0);
  return jsx(VisualEffectViewDefault, { ref, blurTheme: str });
});
