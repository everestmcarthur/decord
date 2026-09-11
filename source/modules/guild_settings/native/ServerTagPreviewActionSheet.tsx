// Module ID: 13965
// Function ID: 13966
// Name: ServerTagPreviewActionSheet
// Dependencies: [19, 17, 9155, 21, 4606, 576, 9277, 9278, 13966, 4573, 4602, 1114, 5026, 7112, 7270, 7222, 2]
// Exports: default

// Module 13965 (ServerTagPreviewActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9278 */;
import GuildSettingsServerTagPreviewDefault from "GuildSettingsServerTagPreview" /* 13966 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildProfileFetchStatus = fn(9155).GuildProfileFetchStatus;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4606);
let obj2 = { error: { paddingVertical: nativeDefault.space.PX_24, alignItems: "center", rowGap: nativeDefault.space.PX_12 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/ServerTagPreviewActionSheet.tsx");

export default function ServerTagPreviewActionSheet(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_8();
  const guildProfile1 = guildId(9277).useGuildProfile(guildId);
  let guildProfile = guildProfile1.guildProfile;
  const items = [guildId];
  const effect = noop.useEffect(() => {
    const guildProfile = GuildProfileActionCreators.getGuildProfile(guildId, false, { respectBackoff: true });
  }, items);
  if (null != guildProfile) {
    const obj2 = { guildId, tag: null, badge: null, primaryColor: null, secondaryColor: null, isDirty: false, variant: "plain", onAdopted: null };
    ({ tag: obj5.tag, badge: obj5.badge, badgeColorPrimary: obj5.primaryColor, badgeColorSecondary: obj5.secondaryColor } = guildProfile);
    obj2.onAdopted = function onAdopted() {
      return ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    let tmp7 = closure_6(GuildSettingsServerTagPreviewDefault, obj2);
    let tmp8 = closure_6;
  } else if (guildProfile1.fetchStatus === GuildProfileFetchStatus.FETCHED) {
    const obj3 = { style: tmp.error, children: null };
    const obj4 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp2(1114).intl;
    obj4.children = intl.string(tmp2(1114).t.tmGHjc);
    const items1 = [closure_6(tmp2(4602).Text, obj4), ];
    const obj6 = { variant: "secondary", text: null, onPress: null };
    const intl2 = tmp2(1114).intl;
    obj6.text = intl2.string(tmp2(1114).t["5911Lb"]);
    obj6.onPress = function onPress() {
      return GuildProfileActionCreators.getGuildProfile(guildId, true);
    };
    items1[1] = closure_6(tmp2(5026).Button, obj6);
    obj3.children = items1;
    tmp7 = closure_7(View, obj3);
    tmp8 = closure_6;
  } else {
    tmp7 = closure_6(tmp2(7112).SceneLoadingIndicator, {});
    tmp8 = closure_6;
  }
  const obj7 = { children: null };
  const obj13 = { title: null };
  const intl3 = tmp2(1114).intl;
  obj13.title = intl3.string(guildId(1114).t["2QmKZ2"]);
  const items2 = [tmp8(guildId(7222).BottomSheetTitleHeader, obj13), tmp7];
  obj7.children = items2;
  return closure_7(guildId(7270).ActionSheet, obj7);
};
