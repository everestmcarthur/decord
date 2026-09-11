// Module ID: 9367
// Function ID: 9368
// Name: CrunchyrollLinkPreConnect
// Dependencies: [19, 9364, 1074, 8426, 21, 4607, 1483, 9322, 9368, 1114, 2]
// Exports: default

// Module 9367 (CrunchyrollLinkPreConnect)
import _modDef9368 from "module_9368" /* 9368 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_4 = fn(9364).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1074).PlatformTypes;
const redirectDestination = fn(8426).CRUNCHYROLL_LINK_DEST_ORIGIN;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let closure_8 = createStyles.createStyles({ image: { width: 152, height: 123 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default function CrunchyrollLinkPreConnect() {
  const tmp = closure_8();
  navigation = navigation(1483).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  const obj2 = { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: _modDef9368, imgStyle: tmp.image, title: null, body: null, redirectDestination: null };
  const intl = navigation(1114).intl;
  obj2.title = intl.string(navigation(1114).t.siPkNp);
  const intl2 = navigation(1114).intl;
  obj2.body = intl2.string(navigation(1114).t.oS4NEH);
  obj2.redirectDestination = redirectDestination;
  return jsx(navigation(9322).TwoWayLinkPreConnect, { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: _modDef9368, imgStyle: tmp.image, title: null, body: null, redirectDestination: null });
};
