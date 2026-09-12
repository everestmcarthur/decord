// Module ID: 14172
// Function ID: 14173
// Name: Checkbox/Checkbox
// Dependencies: [19, 17, 21, 14173, 14174, 2]
// Exports: default

// Module 14172 (Checkbox/Checkbox)
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Checkbox/native/Checkbox.tsx");

export default function Checkbox(style) {
  const obj = { style: style.style, source: null };
  if (style.selected) {
    obj.source = tmp3(14173);
    let tmp5 = obj;
  } else {
    obj.source = tmp3(14174);
    tmp5 = obj;
  }
  return <Image {...tmp5} />;
};
