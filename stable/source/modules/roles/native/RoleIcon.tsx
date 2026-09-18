// Module ID: 7188
// Function ID: 7189
// Name: RoleIcon
// Dependencies: [19, 17, 21, 1178, 2]
// Exports: default

// Module 7188 (RoleIcon)
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/roles/native/RoleIcon.tsx");

export default function RoleIcon(arg0) {
  ({ source, unicodeEmoji, size } = arg0);
  if (size === undefined) {
    size = 20;
  }
  const size1 = { height: size, width: size, resizeMode: "contain" };
  if (null != source) {
    const obj = { source, style: size1 };
    let tmp = <Image source={source} style={size1} />;
  } else {
    tmp = null;
    if (null != unicodeEmoji) {
      const obj2 = { adjustsFontSizeToFit: true, style: null, children: null };
      const items = [size1, { fontFamily: "System", fontSize: size, marginBottom: -2 }];
      obj2.style = items;
      obj2.children = unicodeEmoji.surrogates;
      tmp = jsx(native.LegacyText, { adjustsFontSizeToFit: true, style: null, children: null });
    }
  }
  return tmp;
};
