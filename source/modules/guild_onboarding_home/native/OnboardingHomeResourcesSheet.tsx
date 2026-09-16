// Module ID: 16696
// Function ID: 16697
// Name: OnboardingHomeResourcesSheet
// Dependencies: [19, 16694, 21, 4339, 576, 16695, 12427, 4605, 7307, 7309, 1397, 5673, 2]
// Exports: default

// Module 16696 (OnboardingHomeResourcesSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12427 */;
import useResourceChannelsDefault from "useResourceChannels" /* 16695 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(16694).ONBOARDING_HOME_RESOURCES_SHEET_KEY;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default function OnboardingHomeResourcesSheet(guildId) {
  guildId = guildId.guildId;
  importDefault = guildId(4339).useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  let obj = guildId(4339);
  let obj2 = { children: null };
  const arr = useResourceChannelsDefault(guildId);
  obj2.children = jsx(guildId(7309).ActionSheetRow.Group, {
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
  return jsx(guildId(7307).ActionSheet, { children: null });
};
