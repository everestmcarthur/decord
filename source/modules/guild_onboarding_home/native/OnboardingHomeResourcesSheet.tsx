// Module ID: 16637
// Function ID: 16638
// Name: OnboardingHomeResourcesSheet
// Dependencies: [19, 16635, 21, 4308, 576, 16636, 12377, 4573, 7270, 7272, 1396, 5638, 2]
// Exports: default

// Module 16637 (OnboardingHomeResourcesSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12377 */;
import useResourceChannelsDefault from "useResourceChannels" /* 16636 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(16635).ONBOARDING_HOME_RESOURCES_SHEET_KEY;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default function OnboardingHomeResourcesSheet(guildId) {
  guildId = guildId.guildId;
  importDefault = guildId(4308).useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  let obj = guildId(4308);
  let obj2 = { children: null };
  const arr = useResourceChannelsDefault(guildId);
  obj2.children = jsx(guildId(7272).ActionSheetRow.Group, {
    hasIcons: true,
    children: useResourceChannelsDefault(guildId).map((label) => {
      const resourceChannelIconURL = height(dependencyMap[10]).getResourceChannelIconURL(label);
      const obj2 = { label: label.title, icon: null, onPress: null, arrow: true };
      let tmp4Result;
      if (null != resourceChannelIconURL) {
        const obj3 = { style: null, source: null };
        const size = { width: height, height };
        obj3.style = size;
        const obj4 = { uri: resourceChannelIconURL };
        obj3.source = obj4;
        tmp4Result = tmp4(height(tmp2[11]), obj3);
      }
      obj2.icon = tmp4Result;
      obj2.onPress = function onPress() {
        const homeResourceChannel = GuildOnboardingHomeActionCreators.selectHomeResourceChannel(guildId, label.channelId);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_3);
      };
      return jsx(guildId(dependencyMap[9]).ActionSheetRow, { label: label.title, icon: null, onPress: null, arrow: true }, label.channelId);
    })
  });
  return jsx(guildId(7270).ActionSheet, { children: null });
};
