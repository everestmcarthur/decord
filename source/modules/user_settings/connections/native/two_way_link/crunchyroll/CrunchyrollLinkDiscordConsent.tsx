// Module ID: 9282
// Function ID: 9283
// Name: CrunchyrollLinkDiscordConsent
// Dependencies: [19, 9277, 1074, 8338, 21, 1483, 9239, 2]
// Exports: default

// Module 9282 (CrunchyrollLinkDiscordConsent)
import closure_2 from "noop" /* 19 */;
import { CrunchyrollLinkModalScenes as closure_3 } from "CrunchyrollLinkModalScenes" /* 9277 */;
import { PlatformTypes } from "ME" /* 1074 */;
import CRUNCHYROLL_LINK_DEST_ORIGIN from "CRUNCHYROLL_LINK_DEST_ORIGIN" /* 8338 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ CRUNCHYROLL_CLIENT_ID: c5, CRUNCHYROLL_CLIENT_SCOPES: closure_6 } = CRUNCHYROLL_LINK_DEST_ORIGIN);
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx");

export default function CrunchyrollLinkDiscordConsent(arg0) {
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
  obj = { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId: closure_5, scopes: closure_6, onNext: callback, onError: callback1 };
  return jsx(navigation(9239).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId: closure_5, scopes: closure_6, onNext: callback, onError: callback1 });
};
