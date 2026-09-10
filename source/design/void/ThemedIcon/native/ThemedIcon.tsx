// Module ID: 14124
// Function ID: 14125
// Name: ThemedIcon
// Dependencies: [19, 21, 4275, 4991, 2]
// Exports: default

// Module 14124 (ThemedIcon)
import useToken from "useToken" /* 4275 */;
import IconDefault from "Icon" /* 4991 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  const merged = Object.assign(themedColor, Object.assign({ themedColor: 0 }));
  const token = useToken.useToken(themedColor.themedColor);
  const obj2 = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(IconDefault, { color: token });
};
