// Module ID: 17628
// Function ID: 17629
// Name: GuildSettingsRoleEditDisplay
// Dependencies: [19, 17, 2016, 17613, 17612, 1074, 17615, 21, 4560, 576, 5004, 504, 7187, 7186, 1178, 17629, 4527, 16294, 1896, 17627, 17630, 17631, 6606, 1114, 17633, 5687, 5605, 4987, 1369, 1091, 14600, 4515, 4556, 2428, 7201, 2]
// Exports: default

// Module 17628 (GuildSettingsRoleEditDisplay)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import noop from "module_19" /* 19 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17613 */;

require = fn;
const View = fn(17).View;
const isEveryoneRole = fn(2016).isEveryoneRole;
const RoleColorsStyle = fn(17613).RoleColorsStyle;
const STYLE_CONFIGS = fn(17612).STYLE_CONFIGS;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR: closure_9, MAX_ROLE_LENGTH: c10 } = Constants);
let closure_11 = fn(17615).DEFAULT_GRADIENT_ROLE_COLORS;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4560);
let obj2 = { roleIcon: { paddingTop: 2, opacity: 0.5 }, trailingColorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, colorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 }, holographicInfo: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, padding: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_12, marginTop: -1 * nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_12, display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO } };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx");

export default function GuildSettingsRoleEditDisplay(guild) {
  guild = guild.guild;
  const role = guild.role;
  let id;
  let SOLID;
  let primary_color;
  let concat;
  ({ name, formErrors, mentionable, hoist, onNameChanged, onMentionableChanged, onHoistChanged, locked, autoFocusInput } = guild);
  const tmp = closure_15();
  const tmp2 = concat(role);
  let tmp3 = tmp2;
  if (!tmp2) {
    tmp3 = locked;
  }
  id = role.id;
  const hasEnhancedRoleColorsForRole = guild(id[10]).useHasEnhancedRoleColorsForRole(guild.id, role);
  let obj = guild(id[10]);
  const items = [GuildSettingsRolesStore];
  const stateFromStores = guild(id[11]).useStateFromStores(items, () => GuildSettingsRolesStore.getRoleStyleData(role.id));
  if (null != stateFromStores) {
    if (hasEnhancedRoleColorsForRole) {
      SOLID = stateFromStores.currentStyle;
    }
    const found = STYLE_CONFIGS.find((id) => id.id === SOLID);
    concat = undefined;
    if (stateFromStores != null) {
      const styleColors = stateFromStores.styleColors;
      if (styleColors != null) {
        concat = styleColors[SOLID];
      }
    }
    primary_color = undefined;
    if (concat != null) {
      primary_color = concat.primary_color;
    }
    if (null == primary_color) {
      primary_color = closure_9;
    }
    if (null == concat) {
      concat = closure_11;
    } else {
      let secondary_color;
      if (concat != null) {
        secondary_color = concat.secondary_color;
      }
    }
    const tmp4Result = tmp4(tmp5[12]);
    const canGuildUseRoleIconsResult = tmp4(tmp5[12]).canGuildUseRoleIcons(guild, role);
    let obj3 = { guildId: guild.id, roleId: role.id, size: 26 };
    let roleIcon = tmp4(tmp5[13]).useRoleIcon(obj3);
    if (roleIcon == null) {
      let obj4 = { source: role(tmp5[15]), size: tmp4(tmp5[14]).IconSizes.MEDIUM };
      roleIcon = closure_12(tmp4(tmp5[14]).Icon, obj4);
    }
    const items1 = [role, id, concat, primary_color, SOLID];
    const items2 = [guild.id, role, id, SOLID];
    const callback = SOLID.useCallback(() => {
      if (SOLID === RoleColorsStyle.SOLID) {
        const obj2 = {
          color: primary_color,
          onSelect(arg0) {
              guild(id[19]).updateRoleColor(role, arg0);
            }
        };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16294, dependencyMap.paths), "RoleColorPicker", obj2);
      } else if (tmp === tmp2.GRADIENT) {
        const obj4 = {
          colors: concat,
          onSelect(colors) {
              guild(id[19]).updateRoleColors(closure_1_2, colors, constants.GRADIENT);
            }
        };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17630, dependencyMap.paths), "RoleColorPicker", obj4);
      }
    }, items1);
    const callback1 = SOLID.useCallback(() => {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17631, dependencyMap.paths), "EnhancedRoleColorsSelectStyleModal", {
        guildId: guild.id,
        role,
        roleStyle: SOLID,
        onStyleChanged(currentStyle) {
          guild(id[19]).updateRoleStyles(closure_1_2, currentStyle);
        }
      });
    }, items2);
    const obj5 = { label: null, value: null, isDisabled: null, onChange: null, maxLength: null, autoFocus: null, errorMessage: null };
    const intl = tmp4(tmp5[23]).intl;
    obj5.label = intl.string(tmp4(tmp5[23]).t.dLbkBk);
    obj5.value = name;
    obj5.isDisabled = tmp3;
    obj5.onChange = onNameChanged;
    obj5.maxLength = maxLength;
    obj5.autoFocus = autoFocusInput;
    const name2 = formErrors.name;
    let first;
    if (name2 != null) {
      first = name2[0];
    }
    obj5.errorMessage = first;
    const items3 = [closure_12(tmp4(tmp5[22]).TextInput, obj5), , , , , ];
    const obj6 = { role };
    items3[1] = closure_12(role(tmp5[24]), obj6);
    const obj7 = { label: null, onPress: null, arrow: true, subLabel: null, disabled: null };
    const intl2 = tmp4(tmp5[23]).intl;
    obj7.label = intl2.string(tmp4(tmp5[23]).t["9wVJRB"]);
    obj7.onPress = callback1;
    let labelString;
    if (found != null) {
      labelString = found.labelString;
    }
    let str = "";
    if (null != labelString) {
      const intl3 = tmp4(tmp5[23]).intl;
      str = intl3.string(found.labelString);
    }
    obj7.subLabel = str;
    obj7.disabled = tmp3;
    const items4 = [closure_12(tmp4(tmp5[26]).TableRow, obj7), ];
    if (SOLID === RoleColorsStyle.HOLOGRAPHIC) {
      const obj8 = { hasIcons: false, children: null };
      items4[1] = tmp28;
      obj8.children = items4;
      items3[2] = tmp20(tmp4(tmp5[25]).TableRowGroup, obj8);
      let tmp20Result = SOLID === tmp27.HOLOGRAPHIC;
      if (tmp20Result) {
        const obj9 = { style: tmp.holographicInfo, children: null };
        const obj10 = { size: "sm", color: tmp25(tmp5[9]).colors.ICON_FEEDBACK_INFO };
        const items5 = [tmp22(tmp4(tmp5[31]).CircleInformationIcon, obj10), ];
        const obj11 = { variant: "text-sm/normal", children: null };
        const intl5 = tmp4(tmp5[23]).intl;
        obj11.children = intl5.string(tmp25(tmp5[33]).tBhCyr);
        items5[1] = tmp22(tmp4(tmp5[32]).Text, obj11);
        obj9.children = items5;
        tmp20Result = tmp20(primary_color, obj9);
      }
      items3[3] = tmp20Result;
      let tmp22Result = null;
      if (canGuildUseRoleIconsResult) {
        const obj12 = { hasIcons: false, children: null };
        const obj13 = { disabled: tmp3, label: null, trailing: null, subLabel: null };
        const intl6 = tmp4(tmp5[23]).intl;
        obj13.label = intl6.string(tmp4(tmp5[23]).t.B9grJw);
        const obj14 = { style: tmp.roleIcon, children: roleIcon };
        obj13.trailing = tmp22(primary_color, obj14);
        const intl7 = tmp4(tmp5[23]).intl;
        obj13.subLabel = intl7.string(tmp4(tmp5[23]).t.ZTpgyG);
        obj12.children = tmp22(tmp4(tmp5[26]).TableRow, obj13);
        tmp22Result = tmp22(tmp4(tmp5[25]).TableRowGroup, obj12);
      }
      items3[4] = tmp22Result;
      let tmp44 = tmp3;
      if (!tmp3) {
        tmp44 = tmp2;
      }
      const obj15 = { disabled: tmp44, label: null, value: null, onValueChange: null, subLabel: null };
      const intl8 = tmp4(tmp5[23]).intl;
      obj15.label = intl8.string(tmp4(tmp5[23]).t.iVW5w4);
      obj15.value = hoist;
      obj15.onValueChange = onHoistChanged;
      const intl9 = tmp4(tmp5[23]).intl;
      obj15.subLabel = intl9.string(tmp4(tmp5[23]).t.vceJPk);
      const items6 = [tmp22(tmp4(tmp5[34]).TableSwitchRow, obj15), ];
      if (!tmp3) {
        tmp3 = tmp2;
      }
      const obj16 = { children: null };
      const obj17 = { hasIcons: false, children: null };
      const obj18 = { disabled: tmp3, label: null, value: null, onValueChange: null };
      const intl10 = tmp4(tmp5[23]).intl;
      obj18.label = intl10.format(tmp4(tmp5[23]).t.DTXoJQ, {});
      obj18.value = mentionable;
      obj18.onValueChange = onMentionableChanged;
      items6[1] = tmp22(tmp4(tmp5[34]).TableSwitchRow, obj18);
      obj17.children = items6;
      items3[5] = tmp20(tmp4(tmp5[25]).TableRowGroup, obj17);
      obj16.children = items3;
      return tmp20(tmp21, obj16);
    } else {
      const obj19 = { label: null, onPress: null, arrow: true, trailing: null, subLabel: null, disabled: null };
      const intl4 = tmp4(tmp5[23]).intl;
      obj19.label = intl4.string(tmp4(tmp5[23]).t["5NC5YW"]);
      obj19.onPress = callback;
      const obj20 = { style: tmp.trailingColorContainer, children: null };
      if (SOLID === tmp27.GRADIENT) {
        let primary_color1;
        if (concat != null) {
          primary_color1 = concat.primary_color;
        }
        const items7 = [primary_color1, , ];
        let secondary_color1;
        if (concat != null) {
          secondary_color1 = concat.secondary_color;
        }
        items7[1] = secondary_color1;
        let tertiary_color;
        if (concat != null) {
          tertiary_color = concat.tertiary_color;
        }
        const obj21 = { colors: null, start: null, end: null, style: null };
        items7[2] = tertiary_color;
        const found1 = items7.filter(tmp4(tmp5[28]).isNotNullish);
        obj21.colors = found1.map((item) => guild(id[29]).int2hex(item));
        obj21.start = { x: 0, y: 0 };
        obj21.end = { x: 1, y: 0 };
        obj21.style = tmp.colorBlock;
        let tmp22Result3 = tmp22(tmp25(tmp5[27]), obj21);
        const tmp25Result = tmp25(tmp5[27]);
      } else {
        const obj22 = { color: primary_color, style: tmp.colorBlock };
        tmp22Result3 = tmp22(tmp25(tmp5[30]), obj22);
      }
      obj20.children = tmp22Result3;
      obj19.trailing = tmp22(primary_color, obj20);
      if (SOLID === tmp27.GRADIENT) {
        let num2;
        if (concat != null) {
          num2 = concat.primary_color;
        }
        if (num2 == null) {
          num2 = 0;
        }
        const int2hexResult = tmp4(tmp5[29]).int2hex(num2);
        const tmp4Result6 = tmp4(tmp5[29]);
        let num3;
        if (concat != null) {
          num3 = concat.secondary_color;
        }
        if (num3 == null) {
          num3 = 0;
        }
        const _HermesInternal = HermesInternal;
        concat = HermesInternal.concat;
        let combined = concat(int2hexResult, ", ", tmp4(tmp5[29]).int2hex(num3), "]");
        const tmp4Result7 = tmp4(tmp5[29]);
      } else {
        combined = tmp4(tmp5[29]).int2hex(primary_color);
        const tmp4Result8 = tmp4(tmp5[29]);
      }
      obj19.subLabel = combined;
      obj19.disabled = tmp3;
      tmp22(tmp4(tmp5[26]).TableRow, obj19);
    }
    tmp21 = closure_14;
    const tmp4Result5 = tmp4(tmp5[13]);
  }
  SOLID = RoleColorsStyle.SOLID;
};
