// Module ID: 9252
// Function ID: 9253
// Name: XboxLinkLanding
// Dependencies: [19, 9251, 1074, 21, 4574, 1114, 5115, 9253, 5103, 9255, 1483, 2024, 9256, 9257, 2]
// Exports: default

// Module 9252 (XboxLinkLanding)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import _modDef9256 from "module_9256" /* 9256 */;
import noop from "module_19" /* 19 */;

const require = fn;
const XboxLinkModalScenes = fn(9251).XboxLinkModalScenes;
const Constants = fn(1074);
({ HelpdeskArticles: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4574);
let closure_8 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkLanding.tsx");

export default function XboxLinkLanding() {
  const tmp = closure_8();
  navigation = navigation(1483).useNavigation();
  let obj = navigation(1483);
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.XBOX_CONNECTION);
  let intl = navigation(1114).intl;
  let items = [navigation];
  const memo = noop.useMemo(() => {
    const obj = { label: null, icon: null };
    const intl = navigation(1114).intl;
    obj.label = intl.string(navigation(1114).t.ihQXsb);
    obj.icon = navigation(5115).VoiceNormalIcon;
    const items = [obj, , , ];
    const obj2 = { label: null, icon: null };
    const intl2 = navigation(1114).intl;
    obj2.label = intl2.string(navigation(1114).t.Xt1n4P);
    obj2.icon = navigation(9253).ScreenStreamIcon;
    items[1] = obj2;
    const obj3 = { label: null, icon: null };
    const intl3 = navigation(1114).intl;
    obj3.label = intl3.string(navigation(1114).t.xqVY3p);
    obj3.icon = navigation(5103).GroupIcon;
    items[2] = obj3;
    const obj4 = { label: null, icon: null };
    const intl4 = navigation(1114).intl;
    obj4.label = intl4.string(navigation(1114).t.iQsKVW);
    obj4.icon = navigation(9255).GameControllerIcon;
    items[3] = obj4;
    return items;
  }, []);
  const callback = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.PRE_CONNECT);
  }, items);
  const memo1 = noop.useMemo(() => ({ uri: _modDef9256 }), []);
  let obj3 = { platformType: constants2.XBOX, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null };
  let intl2 = navigation(1114).intl;
  obj3.headerConnect = intl2.string(navigation(1114).t.m8aahn);
  let intl3 = navigation(1114).intl;
  obj3.headerReconnect = intl3.string(navigation(1114).t.z3rAhq);
  obj3.body = intl.format(navigation(1114).t.CIc3IN, { helpdeskArticleUrl: articleURL });
  obj3.onNext = callback;
  obj3.valueProps = memo;
  return jsx(navigation(9257).TwoWayLinkLanding, { platformType: constants2.XBOX, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null });
};
