// Module ID: 15023
// Function ID: 15024
// Name: PlayStationTwoWayLinkUpsell
// Dependencies: [19, 1074, 21, 4606, 2024, 15021, 1114, 5638, 15024, 1943, 9343, 2]
// Exports: PlayStationTwoWayLinkUpsell

// Module 15023 (PlayStationTwoWayLinkUpsell)
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import FastImageDefault from "FastImage" /* 5638 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 9343 */;
import OneWayToTwoWayLinkUpsell from "OneWayToTwoWayLinkUpsell" /* 15021 */;
import _modDef15024 from "module_15024" /* 15024 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_7 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx");

export const PlayStationTwoWayLinkUpsell = function PlayStationTwoWayLinkUpsell() {
  const tmp = closure_7();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.PS_CONNECTION);
  const obj2 = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.v20wwm);
  const intl2 = util.intl;
  obj2.body = intl2.format(util.t.lTZBit, { help_article: articleURL });
  const obj3 = { style: tmp.upsellImage, source: null, resizeMode: "contain" };
  obj3.source = _modDef15024;
  obj2.img = jsx(FastImageDefault, { style: tmp.upsellImage, source: null, resizeMode: "contain" });
  obj2.newIndicatorDismissibleContent = dismissible_content.DismissibleContent.PS_ONE_WAY_RECONNECT;
  obj2.onPress = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return PlayStationLinkModalActionCreatorsDefault.showModal(items, constants2.PLAYSTATION);
  };
  return jsx(OneWayToTwoWayLinkUpsell.OneWayToTwoWayLinkUpsell, { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null });
};
