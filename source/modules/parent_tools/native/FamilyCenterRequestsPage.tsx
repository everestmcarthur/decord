// Module ID: 15028
// Function ID: 15029
// Name: FamilyCenterRequestsPage
// Dependencies: [19, 17, 7648, 11509, 21, 4638, 576, 8780, 8781, 12062, 1115, 2397, 4634, 11539, 7233, 14989, 15029, 15031, 15040, 2]
// Exports: default

// Module 15028 (FamilyCenterRequestsPage)
import nativeDefault from "native" /* 576 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7233 */;
import useUserLinks from "useUserLinks" /* 8780 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8781 */;
import useHelpLineVisibility from "useHelpLineVisibility" /* 11539 */;
import useAgeSpecificText from "useAgeSpecificText" /* 12062 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 14989 */;
import FamilyCenterLinkingBannerDefault from "FamilyCenterLinkingBanner" /* 15029 */;
import FamilyCenterAcceptedLinksDefault from "FamilyCenterAcceptedLinks" /* 15031 */;
import FamilyCenterPendingLinksDefault from "FamilyCenterPendingLinks" /* 15040 */;
import noop from "module_19" /* 19 */;

const _modDef2397 = tmp5(2397);
require = fn;
function FamilyCenterMaxConnectionsBlurb() {
  const tmp = closure_10();
  const hasMaxConnections = useUserLinks.useHasMaxConnections();
  useAgeSpecificText;
  const intl = tmp2(1115).intl;
  intl.formatToPlainString(_modDef2397["1/PzIj"], { maxConnections: useIsInAdultAgeGroupDefault() ? hasOwnProperty : timestampProducer });
  const intl2 = tmp2(1115).intl;
  let tmp10 = null;
  if (hasMaxConnections) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { variant: "text-xxs/medium", color: "text-muted", children: tmp9 };
    obj2.children = React6(tmp2(4634).Text, obj3);
    tmp10 = React6(React3, obj2);
  }
  return tmp10;
}
function FamilyCenterHelpLineInfo() {
  const tmp = closure_12();
  const shouldShowHelplineLink = useHelpLineVisibility.useShouldShowHelplineLink();
  useHelpLineVisibility;
  if (shouldShowHelplineLink) {
    const intl2 = tmp2(1115).intl;
    let formatResult = intl2.format(_modDef2397["KOwsf/"], { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" });
  } else {
    formatResult = null;
    if (tmp6) {
      const intl = tmp2(1115).intl;
      const obj2 = { helpLink: THROUGHLINE_URL };
      formatResult = intl.format(_modDef2397["6tsC8u"], obj2);
    }
  }
  let tmp11 = null;
  if (null != formatResult) {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.supportHeader, variant: "heading-sm/semibold", children: null };
    const intl3 = tmp2(1115).intl;
    obj4.children = intl3.string(_modDef2397["7/tVhv"]);
    const items = [React6(tmp2(4634).Text, obj4), ];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: formatResult };
    items[1] = React6(tmp2(4634).Text, obj5);
    obj3.children = items;
    tmp11 = React7(React3, obj3);
  }
  return tmp11;
}
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const FamilyCenterConstants = fn(7648);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: hasOwnProperty, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: metroRequire } = FamilyCenterConstants);
const THROUGHLINE_URL = fn(11509).THROUGHLINE_URL;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(4638);
let obj2 = { container: { display: "flex", paddingTop: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_12, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 } };
let closure_10 = createStyles.createStyles(obj2);
createStyles = fn(4638);
let obj5 = { container: null, supportHeader: null };
let obj3 = { display: "flex", paddingTop: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_12, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 };
obj5.container = { display: "flex", marginTop: nativeDefault.space.PX_16 };
const obj6 = { display: "flex", marginTop: nativeDefault.space.PX_16 };
obj5.supportHeader = { marginBottom: nativeDefault.space.PX_4 };
let closure_12 = createStyles.createStyles(obj5);
createStyles = fn(4638);
const obj9 = { scrollView: { flex: 1 }, container: null };
const obj7 = { marginBottom: nativeDefault.space.PX_4 };
obj9.container = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj9);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestsPage.tsx");

export default function FamilyCenterRequestsPage() {
  const tmp = closure_14();
  const obj = { style: tmp.scrollView, children: null };
  const obj2 = { bottom: true, children: null };
  const obj3 = { style: tmp.container, children: null };
  const items = [React6(FamilyCenterParentalConsentNoticeDefault, {}), React6(FamilyCenterLinkingBannerDefault, {}), React6(FamilyCenterAcceptedLinksDefault, {}), React6(FamilyCenterPendingLinksDefault, {}), React6(FamilyCenterMaxConnectionsBlurb, {}), React6(FamilyCenterHelpLineInfo, {})];
  obj3.children = items;
  obj2.children = React7(React3, obj3);
  obj.children = React6(common_SafeAreaView.SafeAreaPaddingView, obj2);
  return React6(React4, obj);
};
