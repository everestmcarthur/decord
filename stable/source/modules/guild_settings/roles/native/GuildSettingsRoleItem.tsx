// Module ID: 17625
// Function ID: 17626
// Name: GuildSettingsRoleItem
// Dependencies: [5, 19, 17, 1074, 21, 4560, 576, 4556, 5004, 7186, 4905, 1114, 11578, 5520, 4994, 8098, 4518, 7204, 4987, 1369, 1091, 9758, 5605, 5089, 1178, 10307, 5095, 2]

// Module 17625 (GuildSettingsRoleItem)
import nativeDefault from "native" /* 576 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const DEFAULT_ROLE_COLOR_HEX = fn(1074).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = "text-md/semibold";
const createStyles = fn(4560);
let obj = { row: { flexDirection: "row", gap: 4, alignItems: "center" }, everyone: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, padding: 8 }, label: null, sparkleIcon: null, dragHandlePressable: null, container: null, gradient: null, image: null };
let prop = fn(4556).TextStyleSheet["text-md/semibold"];
let num;
if (prop != null) {
  num = prop.lineHeight;
}
if (num == null) {
  num = 20;
}
obj.label = { lineHeight: num + 1 };
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, padding: 8 };
let obj4 = { lineHeight: num + 1 };
obj.sparkleIcon = { tintColor: nativeDefault.colors.ICON_MUTED };
obj.dragHandlePressable = { alignSelf: "stretch", justifyContent: "center" };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" };
obj.container = size;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.gradient = {};
obj.image = { tintColor: "white" };
let closure_10 = createStyles.createStyles(obj);
let obj5 = { tintColor: nativeDefault.colors.ICON_MUTED };
let obj6 = {};
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx");

export default noop.memo(function GuildSettingsRoleItem(guildId) {
  const tmp4 = closure_10();
  const role = guildId.role;
  ({ sorting, locked, onPress: importDefault, onMoveUp } = guildId);
  const onMoveDown = guildId.onMoveDown;
  ({ sortHandlers, isEveryoneRole, guildId } = guildId);
  ({ onLongPress, numMembers, isLastRole, isFirstRole } = guildId);
  const tmp3 = require("useHasEnhancedRoleColors")(guildId.guildId, null);
  const roleIcon = role(onMoveUp[9]).useRoleIcon({ guildId, roleId: role.id, size: 32 });
  const tags = role.tags;
  let guild_connections;
  if (tags != null) {
    guild_connections = tags.guild_connections;
  }
  closure_5 = tmp8;
  const items = [];
  if (null != onMoveUp) {
    const obj3 = { name: "moveup", label: null };
    let intl = tmp5(tmp2[11]).intl;
    obj3.label = intl.string(tmp5(tmp2[11]).t.Yl8E4h);
    items.push(obj3);
  }
  if (null != onMoveDown) {
    let obj4 = { name: "movedown", label: null };
    let intl2 = tmp5(tmp2[11]).intl;
    obj4.label = intl2.string(tmp5(tmp2[11]).t["5PbXSy"]);
    items.push(obj4);
  }
  const items1 = [onMoveUp, onMoveDown];
  if (sorting) {
    if (!locked) {
      let obj5 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, delayLongPress: 100, activeOpacity: 0.8, hitSlop: null };
      let intl3 = tmp5(tmp2[11]).intl;
      let obj6 = { name: role.name };
      obj5.accessibilityLabel = intl3.formatToPlainString(tmp5(tmp2[11]).t.Zazao2, obj6);
      let intl4 = tmp5(tmp2[11]).intl;
      obj5.accessibilityHint = intl4.string(tmp5(tmp2[11]).t.BGMUFB);
      obj5.accessibilityActions = items;
      obj5.onAccessibilityAction = tmp11;
      obj5.hitSlop = tmp(tmp2[6]).space.PX_4;
      const merged = Object.assign(sortHandlers);
      const items2 = [tmp4.dragHandlePressable, ];
      let style;
      if (sortHandlers != null) {
        style = sortHandlers.style;
      }
      items2[1] = style;
      obj5.style = items2;
      let flag = false;
      let flag2 = true;
      let tmp17 = obj5;
      if (!tmp16) {
        const obj7 = { icon: null, accessibilityLabel: null, size: "sm", variant: "destructive", onPress: null };
        const obj8 = { size: "xs", color: tmp(tmp2[6]).colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT };
        obj7.icon = closure_7(tmp5(tmp2[16]).TrashIcon, obj8);
        const intl5 = tmp5(tmp2[11]).intl;
        const obj9 = { name: role.name };
        obj7.accessibilityLabel = intl5.formatToPlainString(tmp5(tmp2[11]).t.FiMFTZ, obj9);
        obj7.onPress = function handleDeleteRow() {
          const obj2 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
          const intl = role(onMoveUp[11]).intl;
          obj2.title = intl.formatToPlainString(role(onMoveUp[11]).t.FiMFTZ, { name: name.name });
          const intl2 = role(onMoveUp[11]).intl;
          obj2.body = intl2.string(role(onMoveUp[11]).t.qALKny);
          const intl3 = role(onMoveUp[11]).intl;
          obj2.cancelText = intl3.string(role(onMoveUp[11]).t.gm1Vej);
          const intl4 = role(onMoveUp[11]).intl;
          obj2.confirmText = intl4.string(role(onMoveUp[11]).t.p89ACt);
          name = onMoveDown(function*(arg0, value) {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj4 = { value, done: true };
                return obj4;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else if (closure_1_5) {
                    c1 = 1;
                    c2 = 1;
                    const obj6 = { value: tmp2(11578).putRoleConnectionsConfigurations(guildId, tmp2.id, []), done: false };
                    return obj6;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
                GuildActionCreatorsDefault.deleteRole(guildId, tmp2.id);
                c2 = 3;
                return { value: "HermesInternal", done: null };
              } catch (tmp16) {
                c2 = tmp;
                throw tmp16;
              }
            }
          });
          obj2.onConfirm = function() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          obj2.confirmColor = require("common/Alert").Colors.RED;
          require("actions/AlertActionCreators").show(obj2);
        };
        flag = false;
        flag2 = true;
        tmp17 = obj5;
        const tmp18 = closure_7(tmp5(tmp2[15]).IconButton, obj7);
      }
      tmp16 = role.managed && !tmp8;
    }
    if (null != roleIcon) {
      const obj10 = { onLongPress, onPress: null, disabled: null, draggable: null, dragHandlePressableProps: null, trailing: null, arrow: null, icon: null, label: null, subLabel: null, start: null, end: null };
      let fn;
      if (!sorting) {
        fn = () => {
          if (importDefault != null) {
            tmp(role);
          }
        };
      }
      obj10.onPress = fn;
      if (sorting) {
        sorting = !flag2;
      }
      obj10.disabled = sorting;
      obj10.draggable = flag2;
      obj10.dragHandlePressableProps = tmp17;
      obj10.trailing = tmp18;
      obj10.arrow = flag;
      if (isEveryoneRole) {
        const obj11 = { style: tmp4.everyone, children: tmp31(tmp5(tmp2[23]).GroupIcon, {}) };
        let obj12 = obj11;
      } else {
        obj12 = { children: roleIcon };
      }
      obj10.icon = closure_7(closure_5, obj12);
      const obj13 = { style: tmp4.row, children: null };
      const obj14 = { lineClamp: 1, style: tmp4.label, variant, color: "interactive-text-active", children: role.name };
      const items3 = [closure_7(tmp5(tmp2[7]).Text, obj14), , ];
      const tags2 = role.tags;
      let prop;
      if (tags2 != null) {
        prop = tags2.subscription_listing_id;
      }
      let tmp31Result = null;
      if (null != prop) {
        const obj15 = { size: tmp5(tmp2[24]).Icon.Sizes.REFRESH_SMALL_16, source: tmp(tmp2[25]), "aria-label": null, style: null };
        const intl6 = tmp5(tmp2[11]).intl;
        obj15["aria-label"] = intl6.string(tmp5(tmp2[11]).t.a2Ak8b);
        obj15.style = tmp4.sparkleIcon;
        tmp31Result = tmp31(tmp5(tmp2[24]).Icon, obj15);
      }
      items3[1] = tmp31Result;
      let tmp31Result2 = null;
      if (locked) {
        tmp31Result2 = tmp31(tmp5(tmp2[26]).LockIcon, { size: "xxs", color: "icon-subtle" });
      }
      items3[2] = tmp31Result2;
      obj13.children = items3;
      obj10.label = closure_8(closure_5, obj13);
      const intl7 = tmp5(tmp2[11]).intl;
      if (isEveryoneRole) {
        let stringResult = intl7.string(tmp5(tmp2[11]).t["72gF3G"]);
      } else {
        const obj16 = { count: null };
        const _HermesInternal = HermesInternal;
        obj16.count = "" + numMembers;
        stringResult = intl7.formatToPlainString(tmp5(tmp2[11]).t.AWmdd9, obj16);
      }
      obj10.subLabel = stringResult;
      obj10.start = isFirstRole;
      obj10.end = isLastRole;
      return closure_7(tmp5(tmp2[22]).TableRow, obj10);
    } else {
      const tags3 = role.tags;
      let guild_connections1;
      if (tags3 != null) {
        guild_connections1 = tags3.guild_connections;
      }
      if (null === guild_connections1) {
        const obj17 = { size: 32, guildId, role };
        let tmp22Result = closure_7(tmp(tmp2[17]), obj17);
      } else {
        if (tmp3) {
          if (null != role.colors) {
            if (null != role.colors.secondary_color) {
              const obj18 = { style: tmp4.container, children: null };
              const obj19 = { colors: null, start: null, end: null, style: null };
              const items4 = [role.colors.primary_color, role.colors.secondary_color, role.colors.tertiary_color];
              const found = items4.filter(tmp5(tmp2[19]).isNotNullish);
              obj19.colors = found.map((item) => role(onMoveUp[20]).int2hex(item));
              obj19.start = { x: 0, y: 0 };
              obj19.end = { x: 1, y: 0 };
              obj19.style = tmp4.gradient;
              const items5 = [closure_7(tmp(tmp2[18]), obj19), ];
              const obj20 = { size: "md", style: tmp4.image };
              items5[1] = closure_7(tmp5(tmp2[21]).ShieldUserIcon, obj20);
              obj18.children = items5;
              tmp22Result = closure_8(closure_5, obj18);
              const tmpResult = tmp(tmp2[18]);
            }
          }
        }
        const items6 = [tmp4.container, ];
        const obj21 = { style: null, children: null };
        const obj22 = { backgroundColor: null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX };
        items6[1] = obj22;
        obj21.style = items6;
        const obj23 = { size: "md", style: tmp4.image };
        obj21.children = closure_7(tmp5(tmp2[21]).ShieldUserIcon, obj23);
        tmp22Result = tmp22(closure_5, obj21);
      }
    }
  }
  flag = false;
  flag2 = false;
  if (!sorting) {
    flag = true;
    flag2 = false;
  }
});
