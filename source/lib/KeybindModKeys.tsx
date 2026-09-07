// Module ID: 14071
// Function ID: 14072
// Name: modKey
// Dependencies: [1115, 2]

// Module 14071 (modKey)
import set from "set" /* 1115 */;

if (set.isMac()) {
  let str = "cmd";
} else {
  const _module1 = set;
  str = "ctrl";
}
if (set.isMac()) {
  let str2 = "opt";
} else {
  const _module3 = set;
  str2 = "alt";
}
if (set.isMac()) {
  let str3 = "return";
} else {
  const _module5 = set;
  str3 = "enter";
}
const result = set.fileFinishedImporting("lib/KeybindModKeys.tsx");

export const modKey = str;
export const altKey = str2;
export const returnKey = str3;
