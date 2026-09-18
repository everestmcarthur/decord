// Module ID: 9279
// Function ID: 9280
// Name: CrunchyrollLinkLanding
// Dependencies: [19, 9278, 1074, 21, 4560, 1114, 8275, 1483, 9231, 9280, 2024, 2]
// Exports: default

// Module 9279 (CrunchyrollLinkLanding)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import _modDef9280 from "module_9280" /* 9280 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_4 = fn(9278).CrunchyrollLinkModalScenes;
const Constants = fn(1074);
({ HelpdeskArticles: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ image: { width: 234, height: 147 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkLanding.tsx");

export default function CrunchyrollLinkLanding() {
  const tmp = closure_8();
  navigation = navigation(1483).useNavigation();
  let items = [navigation];
  const memo = noop.useMemo(() => {
    const obj = { label: null, icon: null };
    const intl = navigation(1114).intl;
    obj.label = intl.string(navigation(1114).t["2TXHQd"]);
    obj.icon = navigation(8275).PlayIcon;
    const items = [obj];
    return items;
  }, []);
  const callback = noop.useCallback(() => {
    navigation.push(constants.PRE_CONNECT);
  }, items);
  const obj2 = { platformType: constants2.CRUNCHYROLL, img: _modDef9280, imgStyle: tmp.image, headerConnect: null, body: null, learnMoreLink: null, onNext: null, valueProps: null };
  let intl = navigation(1114).intl;
  obj2.headerConnect = intl.string(navigation(1114).t["Da+3NJ"]);
  const intl2 = navigation(1114).intl;
  obj2.body = intl2.string(navigation(1114).t.MaPpPL);
  let obj = navigation(1483);
  obj2.learnMoreLink = HelpdeskUtilsDefault.getArticleURL(constants.CRUNCHYROLL_CONNECTION);
  obj2.onNext = callback;
  obj2.valueProps = memo;
  return jsx(navigation(9231).TwoWayLinkLanding, { platformType: constants2.CRUNCHYROLL, img: _modDef9280, imgStyle: tmp.image, headerConnect: null, body: null, learnMoreLink: null, onNext: null, valueProps: null });
};
