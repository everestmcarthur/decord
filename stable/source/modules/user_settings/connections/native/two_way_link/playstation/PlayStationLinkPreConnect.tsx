// Module ID: 9264
// Function ID: 9265
// Name: PlayStationLinkPreConnect
// Dependencies: [19, 9261, 21, 4560, 1483, 9265, 9236, 1114, 2]
// Exports: PlayStationLinkPreConnect

// Module 9264 (PlayStationLinkPreConnect)
import _modDef9265 from "module_9265" /* 9265 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_4 = fn(9261).PlayStationLinkModalScenes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export const PlayStationLinkPreConnect = function PlayStationLinkPreConnect(platformType) {
  let navigation;
  const tmp = closure_6();
  navigation = navigation(1483).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR, {});
  }, items1);
  const memo = noop.useMemo(() => ({ uri: _modDef9265 }), []);
  const obj2 = { platformType: platformType.platformType, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null };
  const intl = navigation(1114).intl;
  obj2.title = intl.string(navigation(1114).t["6n+UPR"]);
  const intl2 = navigation(1114).intl;
  obj2.body = intl2.string(navigation(1114).t.JaaqIf);
  return jsx(navigation(9236).TwoWayLinkPreConnect, { platformType: platformType.platformType, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null });
};
