// Module ID: 11826
// Function ID: 11827
// Name: AcceptGuildTemplate
// Dependencies: [19, 17, 1961, 2016, 1074, 7340, 21, 4574, 576, 5538, 5591, 1178, 11827, 1114, 38, 1611, 2017, 4570, 11829, 6619, 4989, 8632, 12, 9745, 11834, 11835, 10979, 1091, 2]
// Exports: default

// Module 11826 (AcceptGuildTemplate)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import GuildRoleRecordUtilsAll from "GuildRoleRecordUtils" /* 2017 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5591 */;
import FreeFormInputGroupDefault from "FreeFormInputGroup" /* 6619 */;
import FormDividerDefault from "FormDivider" /* 8632 */;
import RolePillDefault from "RolePill" /* 10979 */;
import InvalidLink from "InvalidLink" /* 11827 */;
import GuildIconUploaderDefault from "GuildIconUploader" /* 11829 */;
import noop from "module_19" /* 19 */;
import TextStyles_mod from "TextStyles" /* 5538 */;

require = fn;
function GuildTemplateResolving() {
  return closure_1_11(React4, { style: closure_14().resolvingContainer, children: closure_1_11(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) });
}
function GuildTemplateResolved(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  const errors = guildTemplate.errors;
  ({ createServer, name, setName, icon, chooseIcon } = guildTemplate);
  const tmp = closure_14();
  _modDef38(null != guildTemplate, "guild template cannot be null");
  _modDef38(guildTemplate.state !== GuildTemplateStates.RESOLVING, "guild must be resolved");
  const roles = guildTemplate.serializedSourceGuild.roles;
  const mapped = roles.map((item) => GuildRoleRecordUtilsAll.fromServer(guildTemplate.serializedSourceGuild.id, item));
  const found = mapped.filter((item) => !isEveryoneRole(item));
  const obj = { contentContainerStyle: null, keyboardShouldPersistTaps: "handled", children: null };
  const items = [tmp.wrapper, { marginBottom: useSafeAreaInsetsDefault().bottom }];
  obj.contentContainerStyle = items;
  const obj2 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = guildTemplate(1114).intl;
  obj2.children = intl.string(guildTemplate(1114).t.QzUORX);
  const items1 = [closure_11(guildTemplate(4570).Text, obj2), closure_11(guildTemplate(4570).Text, { style: tmp.description, variant: "text-lg/medium", color: "text-default", children: guildTemplate.name }), closure_11(GuildIconUploaderDefault, { iconBackgroundColor: tmp.wrapper.backgroundColor, style: tmp.iconUploader, onPress: chooseIcon, icon }), , , , , , , , ];
  const obj5 = { label: null, error: null, hint: null, value: null, onChangeText: null, autoFocus: true, autoCorrect: false, returnKeyType: "done" };
  const intl2 = guildTemplate(1114).intl;
  obj5.label = intl2.string(guildTemplate(1114).t.dBih7e);
  let name1;
  if (errors != null) {
    name1 = errors.name;
  }
  obj5.error = name1;
  const intl3 = tmp10(1114).intl;
  obj5.hint = intl3.format(guildTemplate(1114).t["2bprXx"], { guidelinesURL: constants.GUIDELINES });
  obj5.value = name;
  obj5.onChangeText = setName;
  items1[3] = closure_11(FreeFormInputGroupDefault, obj5);
  const obj7 = { style: tmp.createButtonWrapper, children: null };
  const obj8 = { size: "md", text: null, onPress: null, loading: null, disabled: null, grow: true };
  const intl4 = tmp10(1114).intl;
  obj8.text = intl4.string(guildTemplate(1114).t["O0p/lS"]);
  obj8.onPress = createServer;
  obj8.loading = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj8.disabled = guildTemplate.state === GuildTemplateStates.ACCEPTING;
  obj7.children = closure_11(guildTemplate(4989).Button, obj8);
  items1[4] = closure_11(closure_4, obj7);
  items1[5] = closure_11(FormDividerDefault, { style: tmp.divider, outer: true });
  const obj10 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl5 = tmp10(1114).intl;
  obj10.children = intl5.string(guildTemplate(1114).t.OGiMXJ);
  items1[6] = closure_11(guildTemplate(4570).Text, obj10);
  const obj11 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl6 = tmp10(1114).intl;
  obj11.children = intl6.string(guildTemplate(1114).t.Ztwyoz);
  items1[7] = closure_11(guildTemplate(4570).Text, obj11);
  items1[8] = closure_11(Channels, { channels: guildTemplate.serializedSourceGuild.channels });
  const obj13 = { style: tmp.sectionTip, variant: "text-xs/medium", color: "interactive-text-default", children: null };
  const obj14 = { style: tmp.protip, children: null };
  const intl7 = tmp10(1114).intl;
  const items2 = [intl7.string(guildTemplate(1114).t["8tvIiN"]), ": "];
  obj14.children = items2;
  const items3 = [closure_12(guildTemplate(1178).LegacyText, obj14), ];
  const intl8 = tmp10(1114).intl;
  items3[1] = intl8.string(guildTemplate(1114).t.de7DpI);
  obj13.children = items3;
  items1[9] = closure_12(guildTemplate(4570).Text, obj13);
  let tmp7Result = null;
  if (found.length > 0) {
    const obj15 = { children: null };
    const obj16 = { style: tmp.sectionHeader, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl9 = tmp10(1114).intl;
    obj16.children = intl9.string(tmp10(1114).t.mQ0H1p);
    const items4 = [tmp9(tmp10(4570).Text, obj16), , ];
    const obj17 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl10 = tmp10(1114).intl;
    obj17.children = intl10.string(tmp10(1114).t.jOPEYC);
    items4[1] = tmp9(tmp10(4570).Text, obj17);
    const obj18 = { roles: found };
    items4[2] = tmp9(Roles, obj18);
    obj15.children = items4;
    tmp7Result = tmp7(closure_13, obj15);
  }
  items1[10] = tmp7Result;
  obj.children = items1;
  return closure_12(closure_5, obj);
}
function Channels(channels) {
  const tmp = closure_14();
  closure_0 = tmp;
  let obj = _modDef12(channels.channels);
  const sortByResult = _modDef12(channels.channels).sortBy((parent_id) => {
    if (null == parent_id.parent_id) {
      const _Number2 = Number;
      let result = 10000 * Number(parent_id.id);
    } else {
      const _Number = Number;
      result = 10000 * Number(parent_id.parent_id) + parent_id.id;
    }
    return result;
  });
  let obj2 = {
    style: null,
    children: _modDef12(channels.channels).sortBy((parent_id) => {
      if (null == parent_id.parent_id) {
        const _Number2 = Number;
        let result = 10000 * Number(parent_id.id);
      } else {
        const _Number = Number;
        result = 10000 * Number(parent_id.parent_id) + parent_id.id;
      }
      return result;
    }).map((children) => {
      const obj = { style: closure_0.channelRow, children: null };
      const items = [closure_0.channelIcon, ];
      let channelCategoryIcon = null;
      if (children.type === constants2.GUILD_CATEGORY) {
        channelCategoryIcon = tmp5.channelCategoryIcon;
      }
      const obj2 = { style: items, color: nativeDefault.unsafe_rawColors.PRIMARY_400, size: native.Icon.Sizes.CUSTOM, source: null };
      items[1] = channelCategoryIcon;
      const type = children.type;
      if (isGuildVocalChannelType(type)) {
        let tmp10Result = tmp10(9745);
      } else if (type === constants2.GUILD_CATEGORY) {
        tmp10Result = tmp10(11834);
      } else {
        tmp10Result = tmp10(11835);
      }
      obj2.source = tmp10Result;
      const items1 = [closure_2_11(native.Icon, obj2), ];
      const items2 = [closure_0.channelName, ];
      let channelCategoryName = null;
      if (children.type === constants2.GUILD_CATEGORY) {
        channelCategoryName = tmp5.channelCategoryName;
      }
      items2[1] = channelCategoryName;
      items1[1] = closure_2_11(native.LegacyText, { numberOfLines: 1, style: items2, children: children.name });
      obj.children = items1;
      return closure_2_12(React4, obj, children.id);
    }).value()
  };
  let items = [, ];
  ({ rolesChannelsWrapper: arr2[0], channelsWrapper: arr2[1] } = tmp);
  obj2.style = items;
  return closure_11(closure_4, obj2);
}
function Roles(roles) {
  roles = roles.roles;
  const substr = roles.slice();
  const reversed = substr.reverse();
  let obj = {
    style: null,
    children: reversed.map((role) => {
      const obj = { disableInteraction: true, role, color: null };
      let int2hexResult;
      if (0 !== role.color) {
        int2hexResult = utils_ColorUtils.int2hex(role.color);
      }
      obj.color = int2hexResult;
      return closure_1_11(RolePillDefault, obj, role.id);
    })
  };
  const items = [, ];
  ({ rolesChannelsWrapper: arr3[0], rolesWrapper: arr3[1] } = closure_14());
  obj.style = items;
  return closure_1_11(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const isGuildVocalChannelType = fn(1961).isGuildVocalChannelType;
const isEveryoneRole = fn(2016).isEveryoneRole;
const Constants = fn(1074);
({ MarketingURLs: closure_8, Fonts, ChannelTypes: closure_9 } = Constants);
const GuildTemplateStates = fn(7340).GuildTemplateStates;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4574);
let obj = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 }, header: null, description: null, iconUploader: null, createButtonWrapper: null, resolvingContainer: null, divider: null, sectionHeader: null, rolesChannelsWrapper: null, channelsWrapper: null, rolesWrapper: null, channelRow: null, channelIcon: null, channelCategoryIcon: null, channelName: null, channelCategoryName: null, sectionTip: null, protip: null };
let TextStyles = TextStyles_mod;
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.header = { textAlign: "center" };
obj.description = { textAlign: "center", marginTop: 8, marginBottom: 32 };
obj.iconUploader = { alignSelf: "center", marginBottom: 12 };
obj.createButtonWrapper = { marginTop: 8 };
obj.resolvingContainer = { alignItems: "center", flex: 1, justifyContent: "center" };
obj.divider = { marginTop: 8 };
let obj5 = {};
let TextStyles = TextStyles_mod;
let merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj5.marginTop = 24;
obj.sectionHeader = obj5;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
const obj4 = { textAlign: "center" };
obj.rolesChannelsWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 8 };
obj.channelsWrapper = { flexDirection: "column", paddingVertical: 0 };
obj.rolesWrapper = { flexDirection: "row", flexWrap: "wrap" };
obj.channelRow = { alignItems: "center", flexDirection: "row", height: 40 };
obj.channelIcon = { marginLeft: 12, marginRight: 8, height: 20, width: 20 };
obj.channelCategoryIcon = { marginLeft: 0, marginRight: 2, height: 12, width: 12 };
const obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 8, padding: 8 };
obj.channelName = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let merged2 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, undefined, 12, { uppercase: true }));
obj.channelCategoryName = {};
obj.sectionTip = { marginTop: 8 };
let obj7 = { color: nativeDefault.colors.CHANNELS_DEFAULT, fontSize: 16, flex: 1 };
let obj8 = {};
obj.protip = { color: nativeDefault.unsafe_rawColors.GREEN_360, fontFamily: Fonts.PRIMARY_BOLD, textTransform: "uppercase" };
let closure_14 = createStyles.createStyles(obj);
let closure_16 = noop.memo(() => {
  const obj = { Illustration: InvalidLink.InvalidLink, title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.C7ZRNw);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.A6MwXE);
  return closure_1_11(native.EmptyState, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/AcceptGuildTemplate.tsx");

export default function AcceptGuildTemplate(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  if (null != guildTemplate) {
    const state = guildTemplate.state;
    if (GuildTemplateStates.RESOLVED !== state) {
      if (tmp.ACCEPTING !== state) {
        if (tmp.ACCEPTED !== state) {
          if (tmp.RESOLVING === state) {
            const obj2 = {};
            const merged = Object.assign(guildTemplate);
            return closure_1_11(GuildTemplateResolving, obj2);
          } else if (tmp.EXPIRED === state) {
            return closure_1_11(closure_16, {});
          }
        }
      }
    }
    const obj3 = {};
    const merged1 = Object.assign(guildTemplate);
    return closure_1_11(GuildTemplateResolved, obj3);
  }
  const merged2 = Object.assign(guildTemplate);
  return closure_1_11(GuildTemplateResolving, {});
};
