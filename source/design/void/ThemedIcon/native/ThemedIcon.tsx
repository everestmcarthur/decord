// Module ID: 14149
// Function ID: 14150
// Name: ThemedIcon
// Dependencies: [19, 21, 4308, 5028, 2]
// Exports: default

// Module 14149 (ThemedIcon)
import useToken from "useToken" /* 4308 */;
import IconDefault from "Icon" /* 5028 */;
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
