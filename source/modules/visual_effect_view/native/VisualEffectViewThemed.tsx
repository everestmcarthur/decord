// Module ID: 8329
// Function ID: 8330
// Name: VisualEffectViewThemed
// Dependencies: [19, 21, 4541, 4458, 5016, 2]

// Module 8329 (VisualEffectViewThemed)
import shared from "shared" /* 4458 */;
import useThemeDefault from "useTheme" /* 4541 */;
import noop from "module_19" /* 19 */;

const VisualEffectViewDefault = tmp(5016);
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
