// Module ID: 12919
// Function ID: 12920
// Name: useIsViewingPremiumMemberships
// Dependencies: [1074, 1965, 4470, 4477, 2]
// Exports: default

// Module 12919 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 1965 */;
import _mod4470 from "module_4470" /* 4470 */;
import RouteUtils from "RouteUtils" /* 4477 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4470.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
