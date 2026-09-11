// Module ID: 15389
// Function ID: 15390
// Name: AccessibilitySetting
// Dependencies: [32, 19, 1074, 1954, 21, 1943, 7462, 1178, 1114, 11564, 15390, 15392, 2]

// Module 15389 (AccessibilitySetting)
import util from "util" /* 1114 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7462 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
let items = [fn(1943).DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
const SettingBuilders = fn(11564);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.G0neg7);
  },
  parent: null,
  IconComponent: fn(15390).AccessibilityIcon,
  useTrailing() {
    [tmp4, r10012] = useSelectedDismissibleContent.useSelectedDismissibleContent(items);
    let tmp5 = null;
    if (null != tmp4) {
      let hasItem;
      if (obj2 != null) {
        hasItem = obj2.includes(tmp4);
      }
      tmp5 = null;
      if (hasItem) {
        const obj3 = { text: null };
        const intl = tmp(1114).intl;
        obj3.text = intl.string(tmp(1114).t.y2b7CA);
        tmp5 = jsx(tmp(1178).TextBadge, { text: null });
      }
    }
    return tmp5;
  },
  usePreNavigationAction() {
    const tmp = _slicedToArray(first(7462).useSelectedDismissibleContent(items), 2);
    first = tmp[0];
    dependencyMap = tmp3;
    items = [tmp[1], first];
    return noop.useCallback(() => {
      let tmp2 = null != first;
      if (tmp2) {
        let hasItem;
        if (items != null) {
          hasItem = obj.includes(tmp);
        }
        tmp2 = hasItem;
        obj = items;
      }
      if (tmp2) {
        closure_1(ContentDismissActionType.TAKE_ACTION);
      }
      return true;
    }, items);
  },
  screen: {
    route: fn(1074).UserSettingsSections.ACCESSIBILITY,
    getComponent() {
      return require("SettingsAccessibilityScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccessibilitySetting.tsx");

export default route;
