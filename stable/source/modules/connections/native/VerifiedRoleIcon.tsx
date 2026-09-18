// Module ID: 7204
// Function ID: 7205
// Name: VerifiedRoleIcon
// Dependencies: [19, 17, 1074, 21, 576, 4560, 7205, 7186, 4503, 2]
// Exports: default

// Module 7204 (VerifiedRoleIcon)
import nativeDefault from "native" /* 576 */;
import RoleIconUtils from "RoleIconUtils" /* 7186 */;
import getHigherContrastColor from "getHigherContrastColor" /* 7205 */;
import noop from "module_19" /* 19 */;

const LinkIcon = tmp3(4503);
require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR_HEX: c3, EMPTY_STRING_SNOWFLAKE_ID: closure_4 } = Constants);
const jsx = fn(21).jsx;
const WHITE = nativeDefault.unsafe_rawColors.WHITE;
const PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
const createStyles = fn(4560);
let obj2 = { iconContainer: { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/VerifiedRoleIcon.tsx");

export default function VerifiedRoleIcon(arg0) {
  ({ role, roleId, roleColor, size } = arg0);
  ({ guildId, style, displayRoleIcon } = arg0);
  if (roleColor == null) {
    let colorString;
    if (role != null) {
      colorString = role.colorString;
    }
    roleColor = colorString;
  }
  if (roleColor == null) {
    roleColor = React3;
  }
  const tmp = closure_8();
  const obj2 = { backgroundColor: roleColor, colors: null };
  const items = [WHITE, PRIMARY_630];
  obj2.colors = items;
  const diff = size - size / 8 * 2;
  const higherContrastColor = getHigherContrastColor.getHigherContrastColor(obj2);
  const obj4 = { guildId, roleId: null, size: null };
  if (roleId == null) {
    let id;
    if (role != null) {
      id = role.id;
    }
    roleId = id;
  }
  if (roleId == null) {
    roleId = React4;
  }
  obj4.roleId = roleId;
  obj4.size = diff;
  let roleIcon = RoleIconUtils.useRoleIcon(obj4);
  const obj5 = { style: null, children: null };
  const items1 = [style, tmp.iconContainer, { width: size, height: size, backgroundColor: roleColor }];
  obj5.style = items1;
  if (false === displayRoleIcon) {
    const obj6 = { style: null, size: "custom", color: null };
    const size1 = { width: diff, height: diff };
    obj6.style = size1;
    obj6.color = higherContrastColor;
    roleIcon = tmp9(LinkIcon.LinkIcon, obj6);
  }
  obj5.children = roleIcon;
  return <View style={null}>{null}</View>;
};
