// Module ID: 12869
// Function ID: 12870
// Name: useIsViewingPremiumMemberships
// Dependencies: [1074, 1964, 4439, 4446, 2]
// Exports: default

// Module 12869 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 1964 */;
import _mod4439 from "module_4439" /* 4439 */;
import RouteUtils from "RouteUtils" /* 4446 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4439.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};
