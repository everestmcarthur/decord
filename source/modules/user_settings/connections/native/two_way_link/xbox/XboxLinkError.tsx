// Module ID: 9537
// Function ID: 9538
// Name: XboxLinkError
// Dependencies: [19, 9309, 21, 1483, 9356, 9357, 1114, 2]
// Exports: default

// Module 9537 (XboxLinkError)
import util from "util" /* 1114 */;
import useNavigation from "useNavigation" /* 1483 */;
import useConnectRetry from "useConnectRetry" /* 9356 */;
import TwoWayLinkError from "TwoWayLinkError" /* 9357 */;
import noop from "module_19" /* 19 */;

require = fn;
const XboxLinkModalScenes = fn(9309).XboxLinkModalScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx");

export default function XboxLinkDiscordError(onClose) {
  const navigation = useNavigation.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  const obj3 = { title: null, body: null, onClose: null, onRetry: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t.INwPCV);
  const intl2 = util.intl;
  obj3.body = intl2.string(util.t.GyXRRz);
  obj3.onClose = onClose.onClose;
  obj3.onRetry = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};
