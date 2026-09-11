// Module ID: 17717
// Function ID: 17718
// Name: InRolePromptNotice
// Dependencies: [19, 17, 1074, 21, 4607, 576, 1384, 17718, 1178, 9718, 4603, 1114, 2]
// Exports: default

// Module 17717 (InRolePromptNotice)
import nativeDefault from "native" /* 576 */;
import _modDef9718 from "module_9718" /* 9718 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const RoleFlags = fn(1074).RoleFlags;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4607);
let obj2 = { promptRow: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" }, promptText: null, icon: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
obj2.promptText = { marginLeft: nativeDefault.space.PX_4 };
obj2.icon = { height: 16, width: 16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/InRolePromptNotice.tsx");

export default function InRolePromptNotice(role) {
  role = role.role;
  let string = closure_7();
  let stringResult = dependencyMap;
  if (!obj.hasFlag(role.flags, RoleFlags.IN_PROMPT)) {
    return null;
  } else {
    const obj2 = { style: string.promptRow, children: null };
    const tmpResult = tmp(17718);
    let Icon = tmp(1178).Icon;
    if (isRolePowerfulResult) {
      const obj3 = { style: string.icon, source: _modDef9718, color: nativeDefault.unsafe_rawColors.YELLOW_300 };
      const items = [tmp6(Icon, obj3), ];
      const obj4 = { style: string.promptText, variant: "text-sm/medium", children: null };
      const intl2 = tmp(1114).intl;
      string = intl2.string;
      stringResult = string(tmp(1114).t.YRbgXz);
      obj4.children = stringResult;
      Icon = tmp6(tmp(4603).Text, obj4);
      items[1] = Icon;
      obj2.children = items;
      let tmp4Result = tmp4(tmp5, obj2);
    } else {
      const obj5 = { style: string.icon, source: _modDef9718 };
      const items1 = [tmp6(Icon, obj5), ];
      const obj6 = { style: string.promptText, variant: "text-sm/medium", children: null };
      const intl = tmp(1114).intl;
      obj6.children = intl.string(tmp(1114).t.mqeO2v);
      items1[1] = tmp6(tmp(4603).Text, obj6);
      obj2.children = items1;
      tmp4Result = tmp4(tmp5, obj2);
    }
    isRolePowerfulResult = tmp(17718).isRolePowerful(role);
  }
};
