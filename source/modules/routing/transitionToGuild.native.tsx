// Module ID: 7356
// Function ID: 7357
// Name: transitionToGuild
// Dependencies: [1074, 7231, 5595, 1100, 2]
// Exports: transitionToGuild

// Module 7356 (transitionToGuild)
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1100 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5595 */;
import getChannelIdForGuildTransition from "getChannelIdForGuildTransition" /* 7231 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId, arg1) {
  const channelIdForGuildTransition = getChannelIdForGuildTransition.getChannelIdForGuildTransition(guildId);
  const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "WireType", delete: "style" });
  const obj3 = router_utils;
  const obj4 = { navigationReplace: true };
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj4);
};
