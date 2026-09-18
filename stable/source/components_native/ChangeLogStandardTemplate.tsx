// Module ID: 8091
// Function ID: 8092
// Name: ChangeLogStandardTemplate
// Dependencies: [19, 17, 2025, 1074, 21, 576, 4560, 1178, 563, 8092, 1242, 4255, 4257, 8094, 4550, 7123, 8098, 8100, 1114, 4183, 8102, 8104, 2]
// Exports: changelogRules, getRenderChangelog

// Module 8091 (ChangeLogStandardTemplate)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import getLocalizedLinkDefault from "getLocalizedLink" /* 4183 */;
import LinkingDefault from "Linking" /* 4255 */;
import _mod4257 from "module_4257" /* 4257 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4550 */;
import ChangeLogUtilsDefault from "ChangeLogUtils" /* 8094 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;

require = fn;
function LHeading(children) {
  obj = { style: closure_13().lheading, children: null };
  _require = true;
  let combined;
  if (null != children.className) {
    const parts = str.split(" ");
    const mapped = parts.map((item) => {
      if ("marginTop" === item) {
        obj = { marginTop: 10 };
      } else if (c0) {
        const obj2 = { color: obj[item] };
        obj = obj2;
      } else {
        obj = { backgroundColor: null };
        obj.backgroundColor = obj[item];
      }
      return obj;
    });
    combined = mapped.concat(tmp5);
  }
  const items = [closure_10(require("native").LegacyText, { accessibilityRole: "header", style: combined, children: children.children }), ];
  closure_129_0 = false;
  let combined1;
  if (null != children.className) {
    const parts1 = str.split(" ");
    const mapped1 = parts1.map((item) => {
      if ("marginTop" === item) {
        obj = { marginTop: 10 };
      } else if (c0) {
        const obj2 = { color: obj[item] };
        obj = obj2;
      } else {
        obj = { backgroundColor: null };
        obj.backgroundColor = obj[item];
      }
      return obj;
    });
    combined1 = mapped1.concat(tmp7);
  }
  items[1] = closure_10(closure_4, { style: combined1 });
  obj.children = items;
  return closure_11(closure_4, obj);
}
function LinkInner(target) {
  target = target.target;
  ({ changelogId, className, children } = target);
  const items = [LocaleStore];
  const stateFromStores = target(563).useStateFromStores(items, () => locale.locale);
  obj = target(563);
  const changelog = target(8092).useChangelog(changelogId, stateFromStores).changelog;
  return closure_10(target(1178).LegacyText, {
    accessibilityRole: "link",
    style: className,
    onPress() {
      let date;
      if (changelog != null) {
        date = tmp3.date;
      }
      if (date == null) {
        const _Date = Date;
        const str = new Date();
        date = str.toString();
      }
      let num;
      if (changelog != null) {
        num = tmp3.revision;
      }
      if (num == null) {
        num = 1;
      }
      obj = AnalyticsUtilsDefault;
      obj.track(constants.CHANGE_LOG_CTA_CLICKED, { change_log_id: "" + date + ":" + num, cta_type: "inline_link", target });
      const obj2 = { change_log_id: "" + date + ":" + num, cta_type: "inline_link", target };
      const tmpResult = LinkingDefault;
      tmpResult.openURL(_mod4257.sanitizeUrl(target));
    },
    children
  });
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ LocalizedLinks: closure_7, SOCIAL_LINKS: closure_8, AnalyticEvents: closure_9, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let obj = { added: nativeDefault.unsafe_rawColors.GREEN_360, fixed: nativeDefault.unsafe_rawColors.RED_400, progress: nativeDefault.unsafe_rawColors.YELLOW_300, improved: nativeDefault.unsafe_rawColors.BRAND_500 };
const createStyles = fn(4560);
let obj2 = { flex: { flex: 1 }, container: { padding: 18, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, footer: null, scrollViewContainer: null, lheading: null, lheadingText: null, lheadingLine: null, bulletPoint: null, listItem: null, listText: null };
let obj4 = { padding: 18, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.footer = { flexDirection: "row", justifyContent: "center", borderTopWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: nativeDefault.colors.BORDER_STRONG, gap: nativeDefault.space.PX_12, paddingHorizontal: 18, paddingVertical: nativeDefault.space.PX_12 };
obj2.scrollViewContainer = { flex: 1 };
obj2.lheading = { marginBottom: 14, flexDirection: "row", alignItems: "center" };
obj2.lheadingText = { fontSize: 16, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj2.lheadingLine = { flexGrow: 1, flexShrink: 1, flexBasis: "auto", marginLeft: 10, height: 2 };
let size = { width: 7, height: 7, borderRadius: 3.5, marginRight: 13, marginTop: 7, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.bulletPoint = size;
obj2.listItem = { flexDirection: "row", marginLeft: 4, marginBottom: 8 };
let obj5 = { flexDirection: "row", justifyContent: "center", borderTopWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: nativeDefault.colors.BORDER_STRONG, gap: nativeDefault.space.PX_12, paddingHorizontal: 18, paddingVertical: nativeDefault.space.PX_12 };
obj2.listText = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
let closure_13 = createStyles.createStyles(obj2);
const memoResult = noop.memo((children) => {
  children = children.children;
  const tmp = closure_13();
  obj = { style: tmp.listItem, children: null };
  const items = [closure_1_10(React4, { style: tmp.bulletPoint }), ];
  const obj3 = { style: tmp.listText, children: null };
  let childrenResult = children;
  if (typeof children === "function") {
    const obj4 = { style: tmp.listText };
    childrenResult = children(obj4);
  }
  obj3.children = childrenResult;
  items[1] = closure_1_10(React4, obj3);
  obj.children = items;
  return closure_1_11(React4, obj);
});
let obj6 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
size = fn(2);
const result = size.fileFinishedImporting("components_native/ChangeLogStandardTemplate.tsx");

export default noop.memo((video) => {
  ({ changeLog, onScroll } = video);
  const tmp = closure_13();
  const items = [onScroll];
  obj = { style: tmp.flex, children: null };
  const obj2 = {
    contentContainerStyle: tmp.container,
    style: tmp.scrollViewContainer,
    onScroll: noop.useCallback((nativeEvent) => {
      onScroll(nativeEvent.nativeEvent);
    }, items),
    scrollEventThrottle: 3,
    children: null
  };
  const items1 = [video.video, ];
  const id = changeLog.id;
  const obj3 = MarkupUtilsDefault;
  const tmp3 = closure_4;
  const tmp4 = closure_5;
  {
    const obj5 = { components: null };
    const obj6 = { Link: null, ListItem: null, LHeading: null, Heading: null };
    closure_129_0 = id;
    obj6.Link = (arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.changelogId = onScroll;
      return closure_2_10(LinkInner, obj);
    };
    obj6.ListItem = ListItem;
    obj6.LHeading = LHeading;
    obj6.Heading = LHeading;
    obj5.components = obj6;
    const defaultRules = obj4.getDefaultRules(obj5);
  }
  items1[1] = obj3.reactParserFor(defaultRules)(changeLog.body, false);
  obj2.children = items1;
  const items2 = [closure_11(tmp4, obj2), ];
  const obj7 = { bottom: true, style: tmp.footer, children: null };
  const obj8 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8100).XNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
  const intl = onScroll(1114).intl;
  obj8.accessibilityLabel = intl.string(onScroll(1114).t["/lXfom"]);
  obj8.onPress = function onPress() {
    LinkingDefault.openURL(getLocalizedLinkDefault(constants.TWITTER));
  };
  const items3 = [closure_10(onScroll(8098).IconButton, obj8), , ];
  const obj9 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8102).FacebookNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
  const intl2 = onScroll(1114).intl;
  obj9.accessibilityLabel = intl2.string(onScroll(1114).t["h0or/l"]);
  obj9.onPress = function onPress() {
    LinkingDefault.openURL(constants2.FACEBOOK_URL);
  };
  items3[1] = closure_10(onScroll(8098).IconButton, obj9);
  const obj10 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: closure_10(onScroll(8104).InstagramNeutralIcon, { size: "sm", color: "interactive-icon-default" }), accessibilityLabel: null, onPress: null };
  const intl3 = onScroll(1114).intl;
  obj10.accessibilityLabel = intl3.string(onScroll(1114).t["5uVPyf"]);
  obj10.onPress = function onPress() {
    LinkingDefault.openURL(constants2.INSTAGRAM_URL);
  };
  items3[2] = closure_10(onScroll(8098).IconButton, obj10);
  obj7.children = items3;
  items2[1] = closure_11(onScroll(7123).SafeAreaPaddingView, obj7);
  obj.children = items2;
  return closure_11(tmp3, obj);
});
export const ListItem = memoResult;
export const changelogRules = function changelogRules(changelogId, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  obj = ChangeLogUtilsDefault;
  if (flag) {
    const obj2 = { components: null };
    const obj3 = { Link: null, ListItem: null, LHeading: null, Heading: null };
    closure_129_0 = changelogId;
    obj3.Link = (arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.changelogId = onScroll;
      return closure_2_10(LinkInner, obj);
    };
    obj3.ListItem = ListItem;
    obj3.LHeading = LHeading;
    obj3.Heading = LHeading;
    obj2.components = obj3;
    let messageRules = obj.getMessageRules(obj2);
  } else {
    const obj4 = { components: null };
    const obj5 = { Link: null, ListItem: null, LHeading: null, Heading: null };
    closure_0 = changelogId;
    obj5.Link = (arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj.changelogId = onScroll;
      return closure_2_10(LinkInner, obj);
    };
    obj5.ListItem = ListItem;
    obj5.LHeading = LHeading;
    obj5.Heading = LHeading;
    obj4.components = obj5;
    messageRules = obj.getDefaultRules(obj4);
  }
  return messageRules;
};
export const getRenderChangelog = function getRenderChangelog(id) {
  id = id.id;
  obj = MarkupUtilsDefault;
  {
    const obj3 = { components: null };
    const obj4 = {
      (arg0) => {
          obj = {};
          const merged = Object.assign(arg0);
          obj.changelogId = onScroll;
          return closure_2_10(LinkInner, obj);
        },
      ListItem,
      LHeading,
      Heading: LHeading
    };
    obj3.components = obj4;
    const defaultRules = obj2.getDefaultRules(obj3);
  }
  return obj.reactParserFor(defaultRules);
};
