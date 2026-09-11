// Module ID: 16268
// Function ID: 16269
// Name: GuildProgressButton
// Dependencies: [19, 21, 12280, 576, 10208, 12567, 12570, 8686, 16269, 1114, 12683, 2]
// Exports: default, getScaledGuildProgressButtonHeight

// Module 16268 (GuildProgressButton)
import nativeDefault from "native" /* 576 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10208 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12280 */;
import GuildProgressUtils from "GuildProgressUtils" /* 12567 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 12570 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  guild = guild.guild;
  const guildProgressStep = guild(12567).useGuildProgressStep(guild);
  const completed = guildProgressStep.completed;
  const items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = noop.useEffect(() => {
    if (completed) {
      const result = GuildProgressActionCreatorsDefault.markCompletedProgressSeen(guild.id);
    }
  }, items);
  const items1 = [guild, completed];
  const callback = noop.useCallback(() => {
    if (!completed) {
      const progress = GuildProgressActionCreatorsDefault.createProgress(guild.id);
    }
    GuildProgressUtils.openActionSheet(guild);
  }, items1);
  const obj2 = { icon: null, label: null, subLabel: null, onPress: null, trailing: null };
  let obj = guild(12567);
  obj2.icon = jsx(guild(8686).RowButton.Icon, { source: completed(16269) });
  const intl = guild(1114).intl;
  obj2.label = intl.string(guild(1114).t.o3HK3d);
  obj2.subLabel = subtitle;
  obj2.onPress = callback;
  obj2.trailing = jsx(completed(12683), { percent: percentComplete });
  return jsx(guild(8686).RowButton, { icon: null, label: null, subLabel: null, onPress: null, trailing: null });
};
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale) {
  const refreshToken = MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const sum = refreshToken + useScaledTextLineHeight.scaleTextLineHeight("text-md/semibold", fontScale);
  return sum + 2 * useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
