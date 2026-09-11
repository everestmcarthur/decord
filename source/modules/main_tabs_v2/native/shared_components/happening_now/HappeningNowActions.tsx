// Module ID: 16162
// Function ID: 16163
// Name: HappeningNowActions
// Dependencies: [19, 17, 2012, 1979, 2011, 15357, 1074, 21, 4607, 576, 1242, 9830, 16163, 1114, 9155, 16164, 9913, 16165, 12403, 12868, 15358, 4603, 2]
// Exports: HappeningNowCardCreateChannel, HappeningNowCardCustomizeGuild, HappeningNowCardInvite, HappeningNowStudentHubAddServer

// Module 16162 (HappeningNowActions)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import Text_Text from "Text/Text" /* 4603 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9155 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9830 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9913 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 12403 */;
import _modDef12868 from "module_12868" /* 12868 */;
import HappeningNowCardDefault from "HappeningNowCard" /* 15358 */;
import _modDef16163 from "module_16163" /* 16163 */;
import _modDef16164 from "module_16164" /* 16164 */;
import _modDef16165 from "module_16165" /* 16165 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const HappeningNowConstants = fn(15357);
({ HappeningNowCardTrackingType: closure_9, HAPPENING_NOW_CARD_HEIGHT } = HappeningNowConstants);
const Constants = fn(1074);
({ AnalyticEvents: c10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4607);
let obj = { actionCard: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8, borderWidth: 1, borderRadius: nativeDefault.radii.lg, height: HAPPENING_NOW_CARD_HEIGHT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BORDER_SUBTLE }, actionCardImage: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: 44, width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 4, borderRadius: nativeDefault.radii.sm };
obj.actionCardImage = size;
let closure_14 = createStyles.createStyles(obj);
let closure_15 = noop.memo((panelVariant) => {
  let flag = panelVariant.panelVariant;
  ({ text, onPress, imageSource } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_14();
  const obj = { onPress, style: tmp.actionCard, width: "medium", panelVariant: flag, children: null };
  const obj2 = { style: tmp.actionCardImage, children: closure_1_12(hasOwnProperty, { source: imageSource }) };
  const items = [closure_1_12(React4, obj2), closure_1_12(Text_Text.Text, { variant: "text-sm/normal", maxFontSizeMultiplier: 2, children: text })];
  obj.children = items;
  return map1(HappeningNowCardDefault, obj);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx");

export const HappeningNowCardCreateChannel = function HappeningNowCardCreateChannel(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, { type: constants.GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId });
    const obj2 = { type: constants.GUILD_ACTION_CREATE_CHANNEL_CARD, order: 0, guild_id: guildId };
    CreateChannelModalActionCreatorsDefault.open(null, guildId, null, null);
  }, items);
  obj.imageSource = _modDef16163;
  obj.onPress = callback;
  const intl = guildId(1114).intl;
  obj.text = intl.string(guildId(1114).t["fUYU+j"]);
  obj.panelVariant = flag;
  return closure_12(closure_15, obj);
};
export const HappeningNowCardCustomizeGuild = function HappeningNowCardCustomizeGuild(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { text: "Customize", imageSource: null, onPress: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, { type: constants.GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId });
    const obj2 = { type: constants.GUILD_ACTION_CUSTOMIZE_CARD, order: 0, guild_id: guildId };
    GuildSettingsActionCreatorsDefault.open(guildId);
  }, items);
  obj.imageSource = _modDef16164;
  obj.onPress = callback;
  obj.panelVariant = flag;
  return closure_12(closure_15, obj);
};
export const HappeningNowCardInvite = function HappeningNowCardInvite(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    const guild = GuildStore.getGuild(guildId);
    const channels = GuildChannelStore.getChannels(guildId);
    const channelId = SelectedChannelStore.getChannelId(guildId);
    if (null != guild) {
      const obj2 = { type: constants.GUILD_ACTION_INVITE_CARD, order: 0, guild_id: guildId };
      AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
      const obj3 = instant_invite_InstantInviteUtils;
      const result = obj3.handleOpenInviteActionsheet(guild, channelId, channels, constants3.SERVER_PROFILE);
    }
  }, items);
  obj.imageSource = _modDef16165;
  obj.onPress = callback;
  const intl = guildId(1114).intl;
  obj.text = intl.string(guildId(1114).t.VINpSK);
  obj.panelVariant = flag;
  return closure_12(closure_15, obj);
};
export const HappeningNowStudentHubAddServer = function HappeningNowStudentHubAddServer(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const items = [guildId];
  let obj = { imageSource: null, onPress: null, text: null, panelVariant: null };
  const callback = noop.useCallback(() => {
    const guild = GuildStore.getGuild(guildId);
    const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
    if (tmp4) {
      const obj2 = { type: constants.GUILD_ACTION_STUDENT_HUB_ADD_SERVER, order: 0, guild_id: guildId };
      AnalyticsUtilsDefault.track(constants2.ACTIVITY_CARD_CLICKED, obj2);
      const obj6 = { directoryGuildId: null, directoryGuildName: null, directoryChannelId: null };
      ({ id: obj4.directoryGuildId, name: obj4.directoryGuildName } = guild);
      obj6.directoryChannelId = defaultChannel.id;
      GuildDirectoryAddModalActionCreatorsDefault.open(obj6);
    }
  }, items);
  obj.imageSource = _modDef12868;
  obj.onPress = callback;
  const intl = guildId(1114).intl;
  obj.text = intl.string(guildId(1114).t.emRpdS);
  obj.panelVariant = flag;
  return closure_12(closure_15, obj);
};
