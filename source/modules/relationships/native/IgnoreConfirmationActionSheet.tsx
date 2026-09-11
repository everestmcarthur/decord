// Module ID: 11478
// Function ID: 11479
// Name: IgnoreConfirmationActionSheet
// Dependencies: [32, 19, 17, 1957, 1371, 9133, 11476, 1074, 21, 4606, 576, 8270, 1114, 4563, 5738, 5656, 1178, 1611, 7235, 7255, 504, 1242, 8266, 7223, 6698, 7040, 4602, 4758, 8004, 4573, 11477, 1896, 1250, 5026, 9132, 2024, 4301, 2]

// Module 11478 (IgnoreConfirmationActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4563 from "module_4563" /* 4563 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import TableRow from "TableRow" /* 5656 */;
import TableRowGroup from "TableRowGroup" /* 5738 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7255 */;
import UserActionCreators from "UserActionCreators" /* 8266 */;
import _modDef8270 from "module_8270" /* 8270 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9132 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function IgnoredInformationTable() {
  return map1(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: items.map((icon, index) => {
      const obj = { start: 0 === index, end: length.length - 1 === index, icon: closure_1_13(native.Icon, { size: native.Icon.Sizes.MEDIUM, source: icon.icon }), label: icon.text(), subLabel: icon.subtext(), accessible: true, accessibilityLabel: icon.a11yLabel() };
      return closure_1_13(TableRow.TableRow, obj, index);
    })
  });
}
const View = fn(17).View;
const UserRemediationAction = fn(9133).UserRemediationAction;
const RestrictionConfirmationConstants = fn(11476);
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_9, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: c10 } = RestrictionConfirmationConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_11, HelpdeskArticles: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4606);
let obj = { button: { alignContent: "center", textAlign: "center" }, tableContainer: { marginBottom: nativeDefault.space.PX_16 }, otherOptions: null, subTitle: null, title: null, container: null, header: null, avatarContainer: null, avatarIconContainer: null, avatar: null, destructiveIcon: null };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj.otherOptions = { marginBottom: nativeDefault.space.PX_24 };
obj.subTitle = { textAlign: "center" };
let obj4 = { marginBottom: nativeDefault.space.PX_24 };
obj.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_4 };
let obj5 = { textAlign: "center", marginBottom: nativeDefault.space.PX_4 };
obj.container = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let obj6 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj.header = { marginBottom: nativeDefault.space.PX_16 };
let obj7 = { marginBottom: nativeDefault.space.PX_16 };
obj.avatarContainer = { position: "relative", alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
const rect = { position: "absolute", bottom: -8, right: -8, padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj.avatarIconContainer = rect;
obj.avatar = { alignSelf: "center" };
let obj8 = { position: "relative", alignSelf: "center", marginBottom: nativeDefault.space.PX_16 };
obj.destructiveIcon = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_15 = createStyles.createStyles(obj);
let obj9 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let items = [
  {
    icon: _modDef8270,
    text() {
      const intl = util.intl;
      return intl.string(util.t.ruhGkg);
    },
    subtext() {
      const intl = util.intl;
      return intl.string(util.t["/FWKKC"]);
    },
    a11yLabel() {
      const intl = util.intl;
      return intl.string(util.t.QAzPrp);
    }
  },
,

];
let obj10 = {
  icon: _modDef8270,
  text() {
    const intl = util.intl;
    return intl.string(util.t.ruhGkg);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t["/FWKKC"]);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t.QAzPrp);
  }
};
items[1] = {
  icon: _modDef8270,
  text() {
    const intl = util.intl;
    return intl.string(util.t.N9v3eq);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t.ddpuJg);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t.PYR8jT);
  }
};
let obj11 = {
  icon: _modDef8270,
  text() {
    const intl = util.intl;
    return intl.string(util.t.N9v3eq);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t.ddpuJg);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t.PYR8jT);
  }
};
items[2] = {
  icon: _modDef4563,
  text() {
    const intl = util.intl;
    return intl.string(util.t["4ycGE0"]);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t["5yfN+o"]);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t["/XoqE6"]);
  }
};
let obj12 = {
  icon: _modDef4563,
  text() {
    const intl = util.intl;
    return intl.string(util.t["4ycGE0"]);
  },
  subtext() {
    const intl = util.intl;
    return intl.string(util.t["5yfN+o"]);
  },
  a11yLabel() {
    const intl = util.intl;
    return intl.string(util.t["/XoqE6"]);
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/relationships/native/IgnoreConfirmationActionSheet.tsx");

export default noop.memo(function IgnoreConfirmationActionSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  ({ onIgnore: dependencyMap, onSuccess: _slicedToArray } = userId);
  noop = undefined;
  const tmp = closure_15();
  [tmp3, c4] = noop.useState(false);
  const bottom = channelId(1611)().bottom;
  let tmp2 = _slicedToArray(noop.useState(false), 2);
  items = [channelId(7255).IGNORE_CONFIRMATION_ACTION_SHEET];
  const tmp6 = channelId(7235);
  const items1 = [UserStore];
  const items2 = [userId];
  const stateFromStores = userId(504).useStateFromStores(items1, () => UserStore.getUser(userId), items2);
  let obj = userId(504);
  const items3 = [ChannelStore];
  const items4 = [channelId];
  const stateFromStores1 = userId(504).useStateFromStores(items3, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  }, items4);
  const items5 = [stateFromStores, userId];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      const user = UserActionCreators.getUser(userId);
    }
  }, items5);
  let tmp12Result = null;
  if (null != stateFromStores) {
    function handleClose() {
      channelId(1242).track(constants2.USER_REMEDIATION_ACTION, { action: constants.DISMISS_IGNORE, location: "user-profile-context-menu" });
    }
    let obj3 = { value: tmp6(items).analyticsLocations, children: null };
    const obj4 = { onDismiss: handleClose, scrollable: true, startHeight: null, bodyStyles: null, children: null };
    const sum = closure_10 + bottom;
    const sum1 = sum + tmp4(576).space.PX_24;
    obj4.startHeight = sum1 + tmp4(576).space.PX_24;
    const obj5 = { paddingBottom: tmp4(576).space.PX_16 + bottom };
    const merged = Object.assign(tmp.container);
    obj4.bodyStyles = obj5;
    const obj6 = { style: tmp.header, children: null };
    const obj7 = { style: tmp.avatarContainer, children: null };
    const obj8 = { children: null };
    const obj9 = { guildId: stateFromStores1, user: stateFromStores, animate: false, size: tmp7(1178).AvatarSizes.XLARGE, style: tmp.avatar };
    const items6 = [closure_13(tmp7(1178).Avatar, obj9), ];
    const obj10 = { style: tmp.avatarIconContainer, children: null };
    const obj11 = { size: tmp7(1178).Icon.Sizes.MEDIUM, source: tmp4(7040) };
    obj10.children = closure_13(tmp7(1178).Icon, obj11);
    items6[1] = closure_13(stateFromStores, obj10);
    obj7.children = items6;
    const items7 = [closure_14(stateFromStores, obj7), , ];
    const obj12 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    const intl = tmp7(1114).intl;
    const obj13 = { username: tmp4(4758).getName(stateFromStores1, channelId, stateFromStores) };
    obj12.children = intl.format(tmp7(1114).t["WrQD/Y"], obj13);
    items7[1] = closure_13(tmp7(4602).Text, obj12);
    const obj14 = { style: tmp.subTitle, variant: "heading-md/medium", color: "text-default", accessibilityRole: "header", children: null };
    const intl2 = tmp7(1114).intl;
    obj14.children = intl2.string(tmp7(1114).t.JKL1u1);
    items7[2] = closure_13(tmp7(4602).Text, obj14);
    obj6.children = items7;
    const items8 = [closure_14(stateFromStores, obj6), , , ];
    const obj15 = { style: tmp.tableContainer, children: closure_13(IgnoredInformationTable, {}) };
    items8[1] = closure_13(stateFromStores, obj15);
    const obj16 = { style: tmp.otherOptions, children: null };
    const obj17 = { title: null, hasIcons: true, children: null };
    const intl3 = tmp7(1114).intl;
    obj17.title = intl3.string(tmp7(1114).t["1v01gh"]);
    const obj18 = { icon: null, label: null, variant: "danger", subLabel: null, accessibilityLabel: null, onPress: null, arrow: true };
    const obj19 = { size: tmp7(1178).Icon.Sizes.MEDIUM, source: tmp4(8004), color: tmp.destructiveIcon.color };
    obj18.icon = closure_13(tmp7(1178).Icon, obj19);
    const intl4 = tmp7(1114).intl;
    obj18.label = intl4.string(tmp7(1114).t.bwxY30);
    const obj20 = { variant: "text-xs/medium", color: "text-feedback-critical", children: null };
    const intl5 = tmp7(1114).intl;
    obj20.children = intl5.string(tmp7(1114).t.NTnf1T);
    obj18.subLabel = closure_13(tmp7(4602).Text, obj20);
    const intl6 = tmp7(1114).intl;
    obj18.accessibilityLabel = intl6.string(tmp7(1114).t["fZ+p9C"]);
    obj18.onPress = function onPress() {
      AnalyticsUtilsDefault.track(constants.USER_REMEDIATION_ACTION, { action: UserRemediationAction.GOTO_BLOCK, location: "user-profile-context-menu" });
      const obj2 = { action: UserRemediationAction.GOTO_BLOCK, location: "user-profile-context-menu" };
      const obj3 = ActionSheetActionCreatorsDefault;
      const tmp2 = asyncRequireImpl(11477, dependencyMap.paths);
      obj3.openLazy(tmp2, React7, { userId, channelId, onSuccess, impressionName: discord_common_AnalyticsUtils.ImpressionNames.BLOCK_USER_CONFIRMATION }, "replaceTopSheet");
    };
    obj17.children = closure_13(tmp7(5656).TableRow, obj18);
    obj16.children = closure_13(tmp7(5738).TableRowGroup, obj17);
    items8[2] = closure_13(stateFromStores, obj16);
    const obj21 = { style: tmp.button, children: null };
    const obj22 = { size: "lg", text: null, onPress: null, disabled: null, loading: null };
    const intl7 = tmp7(1114).intl;
    obj22.text = intl7.string(tmp7(1114).t.ytCpKs);
    obj22.onPress = function onPress() {
      _undefined(true);
      RelationshipActionCreatorsDefault.ignoreUser(userId, AnalyticsLocationDefault.IGNORE_CONFIRMATION_ACTION_SHEET, channelId).then(() => {
        if (onSuccess != null) {
          tmp();
        }
        channelId(4573).hideActionSheet();
      });
      if (dependencyMap != null) {
        dependencyMap();
      }
      const ignoreUserResult = RelationshipActionCreatorsDefault.ignoreUser(userId, AnalyticsLocationDefault.IGNORE_CONFIRMATION_ACTION_SHEET, channelId);
      AnalyticsUtilsDefault.track(constants.IGNORE_USER_CONFIRMED);
    };
    obj22.disabled = tmp3;
    obj22.loading = tmp3;
    const items9 = [closure_13(tmp7(5026).Button, obj22), ];
    const obj23 = { onPress: handleClose, style: null, variant: "text-sm/normal", color: "text-default", children: null };
    const obj24 = { textAlign: "center", marginTop: tmp4(576).space.PX_12, paddingBottom: tmp4(576).space.PX_4 };
    obj23.style = obj24;
    const intl8 = tmp7(1114).intl;
    const obj25 = {
      articleLink() {
          channelId(4573).hideActionSheet();
          const obj = channelId(4573);
          const articleURL = channelId(2024).getArticleURL(constants3.STEALTH_REMEDIATION_FEATURE_GUIDE);
          const obj2 = channelId(2024);
          channelId(4301).openURL(articleURL);
        }
    };
    obj23.children = intl8.format(tmp7(1114).t.iX9qtL, obj25);
    items9[1] = closure_13(tmp7(4602).Text, obj23);
    obj21.children = items9;
    items8[3] = closure_14(stateFromStores, obj21);
    obj8.children = items8;
    obj4.children = closure_14(tmp7(6698).BottomSheetScrollView, obj8);
    obj3.children = closure_13(tmp7(7223).BottomSheet, obj4);
    tmp12Result = tmp12(tmp7(7235).AnalyticsLocationProvider, obj3);
    const tmp4Result = tmp4(4758);
  }
  return tmp12Result;
});
