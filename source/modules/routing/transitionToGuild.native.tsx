// Module ID: 7416
// Function ID: 7417
// Name: transitionToGuild
// Dependencies: [1074, 7291, 5633, 1100, 2]
// Exports: transitionToGuild

// Module 7416 (transitionToGuild)
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1100 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5633 */;
import getChannelIdForGuildTransition from "getChannelIdForGuildTransition" /* 7291 */;
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
