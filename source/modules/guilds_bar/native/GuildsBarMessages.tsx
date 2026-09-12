// Module ID: 16403
// Function ID: 16404
// Name: GuildsBarMessages
// Dependencies: [19, 4458, 1074, 21, 16404, 16389, 504, 16392, 576, 1114, 16405, 5152, 2]

// Module 16403 (GuildsBarMessages)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ChatIcon from "ChatIcon" /* 5152 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 16389 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 16392 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16404 */;
import HomeDrawerDirectMessagesRowDefault from "HomeDrawerDirectMessagesRow" /* 16405 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4458 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

require = fn;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const config = {
  onPress() {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(ME);
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default noop.memo(function GuildsBarMessages() {
  const guildsBarAnimatedWrapperStyles = GuildsBarAnimatedItemWrapper.useGuildsBarAnimatedWrapperStyles();
  const items = [SelectedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = guildId === ME;
    }
    return tmp2;
  });
  ({ badge, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 }));
  const colors = nativeDefault.colors;
  const obj3 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config, overState: "y", label: "33kozedd0zs6fbauka98psnc7zwom2s", externalChildren: null, expandedChildren: false, children: false };
  const tmp6 = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
  const tmp7 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  const intl = tmp(1114).intl;
  obj3.label = intl.string(util.t.YUU0RF);
  obj3.externalChildren = badge;
  obj3.expandedChildren = jsx(HomeDrawerDirectMessagesRowDefault, {});
  obj3.children = jsx(ChatIcon.ChatIcon, { color: tmp7 });
  return jsx(GuildsBarAnimatedItemWrapperDefault, { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config, overState: "y", label: "33kozedd0zs6fbauka98psnc7zwom2s", externalChildren: null, expandedChildren: false, children: false });
});
