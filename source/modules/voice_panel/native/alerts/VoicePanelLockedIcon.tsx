// Module ID: 17271
// Function ID: 17272
// Name: VoicePanelLockedIcon
// Dependencies: [19, 21, 4607, 576, 5641, 1178, 17272, 2]
// Exports: default

// Module 17271 (VoicePanelLockedIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import NativeViewDefault from "NativeView" /* 5641 */;
import _modDef17272 from "module_17272" /* 17272 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
const obj2 = { container: null, icon: null };
let size = { alignItems: "center", justifyContent: "center", alignSelf: "center", width: 64, height: 64, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj2.container = size;
obj2.icon = {};
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default function VoicePanelLockedIcon() {
  const tmp = closure_4();
  const obj = { style: tmp.container, children: null };
  obj.children = jsx(native.Icon, { style: tmp.icon, source: _modDef17272, size: native.IconSizes.LARGE });
  return <tmp2 style={tmp.container}>{null}</tmp2>;
};
