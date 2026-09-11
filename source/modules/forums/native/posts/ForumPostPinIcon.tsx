// Module ID: 12098
// Function ID: 12099
// Name: ForumPostPinIcon
// Dependencies: [19, 17, 21, 4607, 576, 1178, 12099, 2]
// Exports: default

// Module 12098 (ForumPostPinIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import _modDef12099 from "module_12099" /* 12099 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
const obj2 = { pin: null, pinIcon: null };
let size = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, width: 23, height: 23, marginEnd: 4, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.pin = size;
const size1 = { height: 14, width: 14, tintColor: nativeDefault.colors.WHITE };
obj2.pinIcon = size1;
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostPinIcon.tsx");

export default function ForumPostPinIcon(containerStyle) {
  const tmp = closure_5();
  const obj = { style: null, children: jsx(native.Icon, { source: _modDef12099, style: tmp.pinIcon }) };
  const items = [tmp.pin, containerStyle.containerStyle];
  obj.style = items;
  return <View style={null}>{jsx(native.Icon, { source: _modDef12099, style: tmp.pinIcon })}</View>;
};
