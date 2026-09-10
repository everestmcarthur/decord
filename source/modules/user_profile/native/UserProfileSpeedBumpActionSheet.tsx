// Module ID: 8208
// Function ID: 8209
// Name: UserProfileSpeedBumpActionSheet
// Dependencies: [32, 19, 17, 1957, 2021, 1371, 8209, 1074, 21, 4574, 576, 8211, 1114, 5701, 5619, 1178, 4425, 4509, 504, 8212, 7176, 7196, 8216, 8225, 1242, 8207, 8205, 7164, 6641, 7944, 6983, 4570, 4726, 4989, 5137, 1935, 2]

// Module 8208 (UserProfileSpeedBumpActionSheet)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UserSettings from "UserSettings" /* 1935 */;
import TableRow from "TableRow" /* 5619 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8205 */;
import UserActionCreators from "UserActionCreators" /* 8207 */;
import _modDef8211 from "module_8211" /* 8211 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function InformationTable(speedBumpType) {
  let items;
  let obj = { icon: _modDef8211, text: null };
  const intl = items(1114).intl;
  obj.text = intl.string(items(1114).t.kcuWva);
  items = [obj, ];
  const obj2 = { icon: _modDef8211, text: null };
  if ("block" === speedBumpType.speedBumpType) {
    const intl3 = tmp2(1114).intl;
    let stringResult = intl3.string(tmp2(1114).t.QxrDY1);
  } else {
    const intl2 = tmp2(1114).intl;
    stringResult = intl2.string(tmp2(1114).t.W6fjkS);
  }
  obj2.text = stringResult;
  items[1] = obj2;
  return closure_12(items(5701).TableRowGroup, {
    hasIcons: true,
    children: items.map((icon, index) => {
      const obj = { start: 0 === index, end: items.length === index, icon: closure_2_12(native.Icon, { size: native.Icon.Sizes.MEDIUM, source: icon.icon }), label: icon.text };
      return closure_2_12(TableRow.TableRow, obj, index);
    })
  });
}
const View = fn(17).View;
const UserProfileAnalyticsTypes = fn(8209).UserProfileAnalyticsTypes;
const Constants = fn(1074);
({ AnalyticEvents: c10, EMPTY_STRING_SNOWFLAKE_ID: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4574);
let obj = { button: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: 56 }, tableContainer: null, header: null, bodyText: null, headerText: null, avatar: null, avatarContainer: null, avatarIconContainer: null, suppress: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: 56 };
obj.tableContainer = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj.header = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj.bodyText = { textAlign: "center" };
obj.headerText = { textAlign: "center" };
obj.avatar = { alignSelf: "center" };
let obj5 = { marginBottom: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj.avatarContainer = { position: "relative", alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
const rect = { position: "absolute", bottom: -8, right: -8, padding: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj.avatarIconContainer = rect;
let obj6 = { position: "relative", alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
obj.suppress = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj);
let obj7 = { alignSelf: "center", marginTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileSpeedBumpActionSheet.tsx");

export default noop.memo(function UserProfileSpeedBumpActionSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  const onClose = userId.onClose;
  ({ location: _slicedToArray, sourceAnalyticsLocations } = userId);
  ({ messageId, roleId, sessionId, openedAt } = userId);
  if (sourceAnalyticsLocations === undefined) {
    sourceAnalyticsLocations = [];
  }
  const speedBumpType = userId.speedBumpType;
  let stateFromStores2;
  closure_7 = undefined;
  first = undefined;
  UserProfileAnalyticsTypes = undefined;
  let analyticsLocations;
  let createUserProfileAnalyticsContext;
  closure_12 = undefined;
  let tmp = closure_14();
  let obj = userId(onClose[16]);
  const isThemeLightResult = userId(onClose[16]).isThemeLight(channelId(onClose[17])());
  const items = [first];
  const stateFromStores = userId(onClose[18]).useStateFromStores(items, () => UserStore.getUser(userId));
  const obj2 = userId(onClose[18]);
  const items1 = [stateFromStores2];
  const items2 = [channelId];
  const stateFromStores1 = userId(onClose[18]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  let guild_id;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  const obj3 = userId(onClose[18]);
  const items3 = [closure_7];
  stateFromStores2 = userId(onClose[18]).useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = GuildMemberStore.getMember(tmp, userId);
    }
    return member;
  });
  let id;
  const tmp2Result = userId(onClose[18]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (id == null) {
    id = createUserProfileAnalyticsContext;
  }
  const tmp4ResultResult = channelId(onClose[19])(id, guild_id);
  closure_7 = tmp4ResultResult;
  [first, UserProfileAnalyticsTypes] = stateFromStores.useState(false);
  const items4 = [];
  const tmp4Result = channelId(onClose[19]);
  const tmp4Result3 = channelId(onClose[20]);
  items4[HermesBuiltin.arraySpread(sourceAnalyticsLocations, 0)] = channelId(onClose[21]).IGNORED_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp4Result3(items4).analyticsLocations;
  const arraySpreadResult = HermesBuiltin.arraySpread(sourceAnalyticsLocations, 0);
  createUserProfileAnalyticsContext = userId(onClose[22]).useCreateUserProfileAnalyticsContext({ layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, channelId, messageId, roleId });
  const tmp18 = channelId(onClose[23])({ userId, user: stateFromStores, channelId, guildId: guild_id, displayProfile: tmp4ResultResult, guildMember: stateFromStores2, type: UserProfileAnalyticsTypes.IGNORED_USER_SHEET });
  closure_12 = tmp18;
  const items5 = [tmp18, tmp4ResultResult, guild_id, first, stateFromStores2];
  const effect = stateFromStores.useEffect(() => {
    let tmp = first;
    if (!first) {
      tmp = null == closure_7;
    }
    if (!tmp) {
      let tmp6 = null == guild_id;
      if (!tmp6) {
        let prop;
        if (stateFromStores2 != null) {
          prop = stateFromStores2.fullProfileLoadedTimestamp;
        }
        tmp6 = null != prop;
      }
      if (tmp6) {
        AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, closure_12);
        closure_9(true);
      }
    }
  }, items5);
  const items6 = [onClose];
  const effect1 = stateFromStores.useEffect(() => () => {
    if (onClose != null) {
      tmp();
    }
  }, items6);
  const items7 = [stateFromStores, userId];
  const effect2 = stateFromStores.useEffect(() => {
    if (null == stateFromStores) {
      const user = UserActionCreators.getUser(userId);
    }
  }, items7);
  if (null == stateFromStores) {
    return null;
  } else {
    const obj4 = { value: analyticsLocations, children: null };
    const obj5 = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
    let fetchStartedAt;
    if (tmp4ResultResult != null) {
      fetchStartedAt = tmp4ResultResult.fetchStartedAt;
    }
    obj5.fetchStartedAt = fetchStartedAt;
    let fetchEndedAt;
    if (tmp4ResultResult != null) {
      fetchEndedAt = tmp4ResultResult.fetchEndedAt;
    }
    obj5.fetchEndedAt = fetchEndedAt;
    let isLoaded;
    if (tmp4ResultResult != null) {
      isLoaded = tmp4ResultResult.isLoaded;
    }
    obj5.isLoaded = isLoaded;
    const obj6 = { style: tmp.header, children: null };
    const obj7 = { style: tmp.avatarContainer, children: null };
    const obj8 = { user: stateFromStores, guildId: guild_id, animate: false, size: tmp2(tmp3[15]).AvatarSizes.XLARGE, style: tmp.avatar };
    const items8 = [closure_12(tmp2(tmp3[15]).Avatar, obj8), ];
    const obj9 = { style: tmp.avatarIconContainer, children: null };
    const obj10 = { size: tmp2(tmp3[15]).Icon.Sizes.MEDIUM, source: null };
    if ("block" === speedBumpType) {
      obj10.source = tmp4(tmp3[29]);
      let tmp28 = obj10;
    } else {
      obj10.source = tmp4(tmp3[30]);
      tmp28 = obj10;
    }
    obj9.children = closure_12(tmp2(tmp3[15]).Icon, tmp28);
    items8[1] = closure_12(guild_id, obj9);
    obj7.children = items8;
    const items9 = [closure_13(guild_id, obj7), , ];
    const obj11 = { style: tmp.headerText, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    const intl = tmp2(tmp3[12]).intl;
    obj11.children = intl.string(tmp2(tmp3[12]).t.b33pLD);
    items9[1] = closure_12(tmp2(tmp3[31]).Text, obj11);
    const obj12 = { style: tmp.bodyText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp2(tmp3[12]).intl;
    const t = tmp2(tmp3[12]).t;
    const obj13 = { username: tmp4(tmp3[32]).getName(guild_id, channelId, stateFromStores) };
    obj12.children = intl2.format("block" === speedBumpType ? t["8F+WNz"] : t["/cZp5s"], obj13);
    items9[2] = closure_12(tmp2(tmp3[31]).Text, obj12);
    obj6.children = items9;
    const items10 = [closure_13(guild_id, obj6), , ];
    const obj14 = { style: tmp.tableContainer, children: null };
    const obj15 = { speedBumpType };
    obj14.children = closure_12(InformationTable, obj15);
    items10[1] = closure_12(guild_id, obj14);
    const obj16 = { style: tmp.button, children: null };
    let str2 = "secondary";
    if (isThemeLightResult) {
      str2 = "tertiary";
    }
    const obj17 = { variant: str2, size: "lg", text: null, onPress: null };
    function handleShowProfileActionSheet() {
      const merged = Object.assign(createUserProfileAnalyticsContext);
      showUserProfileActionSheetDefault({ sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true, location: _location });
    }
    const intl3 = tmp2(tmp3[12]).intl;
    obj17.text = intl3.string(tmp2(tmp3[12]).t["UJKH/l"]);
    obj17.onPress = handleShowProfileActionSheet;
    const items11 = [closure_12(tmp2(tmp3[33]).Button, obj17), ];
    let tmp32Result = null;
    if ("ignore" === speedBumpType) {
      const obj18 = {
        style: tmp.suppress,
        accessibilityRole: "button",
        onPress() {
              const IgnoreProfileSpeedbumpDisabled = UserSettings.IgnoreProfileSpeedbumpDisabled;
              IgnoreProfileSpeedbumpDisabled.updateSetting(true);
              const merged = Object.assign(createUserProfileAnalyticsContext);
              showUserProfileActionSheetDefault({ sourceAnalyticsLocations: analyticsLocations, ignoreBlockedSpeedBump: true, location: _location });
            },
        children: null
      };
      const obj19 = { variant: "text-sm/normal", color: "text-link", children: null };
      const intl4 = tmp2(tmp3[12]).intl;
      obj19.children = intl4.string(tmp2(tmp3[12]).t.QbcRCJ);
      obj18.children = tmp32(tmp2(tmp3[31]).Text, obj19);
      tmp32Result = tmp32(tmp2(tmp3[34]).PressableOpacity, obj18);
    }
    const obj20 = { startExpanded: true, children: null };
    const obj21 = { children: null };
    items11[1] = tmp32Result;
    obj16.children = items11;
    items10[2] = closure_13(guild_id, obj16);
    obj21.children = items10;
    obj20.children = closure_13(tmp2(tmp3[28]).BottomSheetView, obj21);
    obj5.children = closure_12(tmp2(tmp3[27]).BottomSheet, obj20);
    obj4.children = closure_12(tmp2(tmp3[22]).UserProfileAnalyticsProvider, obj5);
    return closure_12(tmp2(tmp3[20]).AnalyticsLocationProvider, obj4);
  }
  const tmp2Result2 = userId(onClose[22]);
});
