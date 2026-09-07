// Module ID: 14670
// Function ID: 14671
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 14660, 21, 14663, 1114, 11933, 2]
// Exports: default

// Module 14670 (PasskeyUpsellPromoModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Modal from "Modal" /* 11933 */;
import getScreens from "getScreens" /* 14663 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14660 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let obj = getScreens;
  obj = { name: WebAuthnScreens.NAME, params: null };
  obj = {};
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = getSystemLocale.intl;
  obj.name = intl.string(getSystemLocale.t["8H5RmH"]);
  obj[1] = obj;
  const initialRouteStack = [obj];
  return jsx(Modal.Modal, { screens, initialRouteStack });
};
