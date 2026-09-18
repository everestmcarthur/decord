// Module ID: 10629
// Function ID: 10630
// Name: HorizontalAutocomplete
// Dependencies: [19, 17, 4552, 2015, 1979, 4209, 1371, 1074, 21, 4560, 5524, 576, 4296, 4992, 4561, 504, 1178, 4556, 4404, 7187, 7188, 8125, 5028, 4713, 5587, 2]

// Module 10629 (HorizontalAutocomplete)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import Text_Text from "Text/Text" /* 4556 */;
import timing from "timing" /* 4561 */;
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import FastImageDefault from "FastImage" /* 5587 */;
import RoleIconDefault from "RoleIcon" /* 7188 */;
import _modDef8125 from "module_8125" /* 8125 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
function HorizontalAutocompleteOption(arg0) {
  let sharedValue;
  ({ children, onPress } = arg0);
  const tmp = closure_13();
  sharedValue = sharedValue(4296).useSharedValue(0);
  useMountEffectDefault(() => {
    const result = sharedValue.set(timing.withTiming(1));
  });
  const obj = sharedValue(4296);
  const fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 14159604656069;
  fn.__initData = __initData;
  const obj3 = { onPress, children: null };
  const animatedStyle = sharedValue(4296).useAnimatedStyle(fn);
  const obj4 = { style: null, children };
  const items = [tmp.horizontalAutocompleteOption, animatedStyle];
  obj4.style = items;
  obj3.children = closure_11(ReanimatedRexportDefault.View, obj4);
  return closure_11(closure_3, obj3);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ ChannelTypes: c10, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
let obj2 = { emoji: { width: 32, height: 32 }, emojiImage: { resizeMode: "contain" }, emojiText: { lineHeight: 32, fontSize: 27, textAlign: "center" }, emojiName: { marginLeft: 8 }, nickname: null, status: null, horizontalAutocompleteOption: null, roleIcon: null, channelName: null };
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_DEFAULT, 14));
obj2.nickname = {};
obj2.status = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj3 = {};
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.horizontalAutocompleteOption = { paddingHorizontal: 8, flex: 1, flexDirection: "row", height: 56, alignItems: "center", borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.roleIcon = { marginRight: 4 };
obj2.channelName = { marginLeft: 8 };
let closure_13 = createStyles.createStyles(obj2);
const __initData = { code: "function HorizontalAutocompleteTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx");

export default {
  User(arg0) {
    ({ user, nick } = arg0);
    ({ status, guildId, onPress } = arg0);
    const tmp = closure_13();
    const items = [AccessibilityStore];
    const obj2 = { onPress, children: null };
    const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    const tmp6 = HorizontalAutocompleteOption;
    const tmp7 = closure_1_11;
    const items1 = [closure_1_11(native.Avatar, { status, statusStyle: tmp.status, user, size: native.AvatarSizes.SMALL, guildId, animate: !stateFromStores }), ];
    const obj4 = { style: { marginLeft: 8, height: 56, flex: 1, flexDirection: "column", justifyContent: "center" }, children: null };
    const obj5 = { style: null, variant: "text-sm/semibold", children: null };
    const items2 = [tmp.nickname];
    obj5.style = items2;
    if (nick == null) {
      nick = UserUtilsDefault.getName(user);
    }
    obj5.children = nick;
    const items3 = [tmp7(Text_Text.Text, obj5), ];
    const obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const obj3 = { status, statusStyle: tmp.status, user, size: native.AvatarSizes.SMALL, guildId, animate: !stateFromStores };
    const tmp8 = React4;
    const items4 = ["@", UserUtilsDefault.getUserTag(user, { decoration: "never" })];
    obj7.children = items4;
    items3[1] = closure_1_12(Text_Text.Text, obj7);
    obj4.children = items3;
    items1[1] = closure_1_12(tmp8, obj4);
    obj2.children = items1;
    return closure_1_12(tmp6, obj2);
  },
  Role(onPress) {
    ({ guildId: require, name, id: importDefault, colorString } = onPress);
    const tmp = closure_13();
    const items = [GuildRoleStore];
    const stateFromStores = initialize.useStateFromStores(items, () => GuildRoleStore.getRole(require, importDefault));
    let roleIconData = null;
    if (null != stateFromStores) {
      roleIconData = tmp2(7187).getRoleIconData(stateFromStores, 30);
      const tmp2Result = tmp2(7187);
    }
    const obj2 = { onPress: onPress.onPress, children: null };
    let tmp9Result = null;
    if (null != roleIconData) {
      const obj3 = { style: tmp.roleIcon, children: null };
      const obj4 = { name, source: null, unicodeEmoji: null, size: 24 };
      let tmp13;
      if (null != roleIconData.customIconSrc) {
        const obj5 = { uri: roleIconData.customIconSrc };
        tmp13 = obj5;
      }
      obj4.source = tmp13;
      obj4.unicodeEmoji = roleIconData.unicodeEmoji;
      obj3.children = closure_11(RoleIconDefault, obj4);
      tmp9Result = tmp9(closure_4, obj3);
    }
    const items1 = [tmp9Result, ];
    const items2 = [tmp.nickname, ];
    let tmp15;
    if (null != colorString) {
      const obj6 = { color: colorString };
      tmp15 = obj6;
    }
    const tmp14 = closure_11;
    const tmp6 = closure_12;
    const tmp7 = HorizontalAutocompleteOption;
    items2[1] = tmp15;
    items1[1] = tmp14(native.LegacyText, { style: items2, children: "@" + name });
    obj2.children = items1;
    return tmp6(tmp7, obj2);
  },
  Channel(channel) {
    channel = channel.channel;
    channel(504);
    [][0] = channel;
    if (channel.type === constants.GUILD_CATEGORY) {
      let channelIconWithGuild = _modDef8125;
    } else {
      channelIconWithGuild = tmp2(5028).getChannelIconWithGuild(channel, tmp5);
      const tmp2Result = tmp2(5028);
    }
    const tmp = closure_13();
    const tmp8 = closure_11(channel(1178).Icon, { source: channelIconWithGuild });
    const obj = { onPress: channel.onPress, children: null };
    const items = [tmp8, ];
    const channelName = channel(4713).computeChannelName(channel, UserStore, RelationshipStore);
    items[1] = closure_11(channel(4556).Text, { style: tmp.channelName, variant: "text-sm/semibold", children: channelName });
    obj.children = items;
    return closure_12(HorizontalAutocompleteOption, obj);
  },
  Emoji(url) {
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = closure_13();
    if ("" !== url) {
      const obj2 = { style: null, source: null };
      const items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj2.style = items;
      const obj3 = { uri: url };
      obj2.source = obj3;
      let tmp5 = closure_1_11(FastImageDefault, obj2);
      let tmp6 = closure_1_11;
    } else {
      const obj = { style: null, allowFontScaling: false, children: null };
      const items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj.style = items1;
      obj.children = surrogates;
      tmp5 = closure_1_11(native.LegacyText, obj);
      tmp6 = closure_1_11;
    }
    const obj4 = { onPress, children: null };
    const items2 = [tmp6(React4, { children: tmp5 }), tmp6(Text_Text.Text, { style: tmp.emojiName, variant: "text-sm/semibold", children: ":" + name + ":" })];
    obj4.children = items2;
    return closure_1_12(HorizontalAutocompleteOption, obj4);
  }
};
