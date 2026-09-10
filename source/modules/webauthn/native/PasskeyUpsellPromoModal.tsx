// Module ID: 14745
// Function ID: 14746
// Name: PasskeyUpsellPromoModal
// Dependencies: [19, 14735, 21, 14738, 1114, 11999, 2]
// Exports: default

// Module 14745 (PasskeyUpsellPromoModal)
import util from "util" /* 1114 */;
import Modal from "Modal" /* 11999 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14738 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14735).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  const obj2 = { name: WebAuthnScreens.NAME, params: null };
  const obj3 = {};
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = util.intl;
  obj3.name = intl.string(util.t["8H5RmH"]);
  obj2.params = obj3;
  const initialRouteStack = [obj2];
  return jsx(Modal.Modal, { screens, initialRouteStack });
};
