// Module ID: 14089
// Function ID: 14090
// Name: Checkbox
// Dependencies: [19, 17, 21, 14090, 14091, 2]
// Exports: default

// Module 14089 (Checkbox)
import noopAll from "noop" /* 19 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const result = require("set").fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj[1] = tmp3(14090);
    let tmp5 = obj;
  } else {
    obj[1] = tmp3(14091);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
