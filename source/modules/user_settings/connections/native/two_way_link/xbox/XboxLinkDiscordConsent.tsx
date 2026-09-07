// Module ID: 9237
// Function ID: 9238
// Name: XboxLinkDiscordConsent
// Dependencies: [19, 9224, 1074, 9238, 21, 1483, 9239, 9266, 2]
// Exports: default

// Module 9237 (XboxLinkDiscordConsent)
import closure_2 from "noop" /* 19 */;
import { XboxLinkModalScenes } from "XboxLinkModalScenes" /* 9224 */;
import { PlatformTypes } from "ME" /* 1074 */;
import { XBOX_CLIENT_SCOPES } from "XBOX_URL_BASE" /* 9238 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx");

export default function XboxLinkDiscordConsent(arg0) {
  let navigation;
  ({ callbackCode, callbackState } = arg0);
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback(() => {
    navigation.push(closure_1_3.SUCCESS);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(closure_1_3.ERROR);
  }, items1);
  obj = { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: navigation(9266).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: callback, onError: callback1 };
  return jsx(navigation(9239).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: navigation(9266).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: callback, onError: callback1 });
};
