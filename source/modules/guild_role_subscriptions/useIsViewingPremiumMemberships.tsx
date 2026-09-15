// Module ID: 12911
// Function ID: 12912
// Name: useIsViewingPremiumMemberships
// Dependencies: [1074, 1965, 4472, 4479, 2]
// Exports: default

// Module 12911 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 1965 */;
import _mod4472 from "module_4472" /* 4472 */;
import RouteUtils from "RouteUtils" /* 4479 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4472.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
