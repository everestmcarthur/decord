// Module ID: 14647
// Function ID: 14648
// Name: UserProfileBadgesEditButton
// Dependencies: [32, 19, 17, 1954, 21, 4574, 576, 11230, 7176, 7402, 1943, 4541, 14648, 1896, 14646, 1114, 4570, 11231, 11222, 2]
// Exports: default

// Module 14647 (UserProfileBadgesEditButton)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import BadgeCatalogIconDefault from "BadgeCatalogIcon" /* 11222 */;
import BadgeUtils from "BadgeUtils" /* 11231 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4574);
let obj2 = { content: { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, badge: { width: 32, height: 32 }, overflowCount: { marginLeft: 2 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileBadgesEditButton.tsx");

export default function UserProfileBadgesEditButton(arg0) {
  ({ badges, catalogBadges, ownsAnyBadge } = arg0);
  let analyticsLocations;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_10();
  _require = tmp;
  const isBadgeManagementEnabled = require("BadgeManagementExperiment").useIsBadgeManagementEnabled({ location: "UserProfileBadgesEditButton" });
  analyticsLocations = analyticsLocations(7176)().analyticsLocations;
  let length;
  if (catalogBadges != null) {
    length = catalogBadges.length;
  }
  if (length == null) {
    length = badges.length;
  }
  let obj = require("BadgeManagementExperiment");
  if (!isBadgeManagementEnabled) {
    let items = [];
  } else {
    const items1 = [tmp2(1943).DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE];
    items = items1;
  }
  let tmp6 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp7;
  const tmp8 = tmp6[0] === require("dismissible_content").DismissibleContent.BADGES_USER_PROFILE_NEW_BADGE;
  _slicedToArray = tmp8;
  const items2 = [analyticsLocations, tmp8, tmp6[1]];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14648, dependencyMap.paths), "Customize Badges", { analyticsLocations });
    if (closure_3) {
      closure_2(ContentDismissActionType.TAKE_ACTION);
    }
  }, items2);
  if (isBadgeManagementEnabled) {
    if (0 === length) {
      let obj2 = { label: null, labelTrailing: null, content: null, accessibilityValue: null, disabled: null, onPress: null };
      const intl3 = tmp2(1114).intl;
      obj2.label = intl3.string(tmp2(1114).t.l6w3Vj);
      let obj3 = { showNewBadge: tmp8 };
      obj2.labelTrailing = closure_8(tmp2(14646).UserProfileEditFormLabelBadges, obj3);
      const obj4 = { style: tmp.content, "aria-hidden": true, children: null };
      const obj5 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl4 = tmp2(1114).intl;
      obj5.children = intl4.string(tmp2(1114).t.xfuQvv);
      obj4.children = closure_8(tmp2(4570).Text, obj5);
      obj2.content = closure_8(closure_6, obj4);
      const obj6 = { text: null };
      const intl5 = tmp2(1114).intl;
      obj6.text = intl5.string(tmp2(1114).t.xfuQvv);
      obj2.accessibilityValue = obj6;
      obj2.disabled = !ownsAnyBadge;
      obj2.onPress = callback;
      return closure_8(tmp2(14646).UserProfileEditFormButton, obj2);
    } else {
      noop = tmp2(11231).getLegacyIconUrlByBadgeId(badges);
      const substr = badges.slice(0, tmp2(11231).MAX_DISPLAYED_PROFILE_BADGES);
      let substr1;
      if (catalogBadges != null) {
        substr1 = catalogBadges.slice(0, tmp2(11231).MAX_DISPLAYED_PROFILE_BADGES);
      }
      if (substr1 == null) {
        substr1 = null;
      }
      const _Math = Math;
      const diff = length - Math.min(length, tmp2(11231).MAX_DISPLAYED_PROFILE_BADGES);
      let mapped;
      if (substr1 != null) {
        mapped = substr1.map((name) => name.name);
      }
      if (mapped == null) {
        mapped = substr.map((description) => description.description);
      }
      const intl = tmp2(1114).intl;
      const obj7 = { badge_names: mapped.join(", "), overflow_count: diff };
      const tmp2Result2 = tmp2(11231);
      const obj8 = { label: null, labelTrailing: null, content: null, accessibilityValue: null, onPress: null };
      const intl2 = tmp2(1114).intl;
      obj8.label = intl2.string(tmp2(1114).t.l6w3Vj);
      const obj9 = { showNewBadge: tmp8 };
      obj8.labelTrailing = closure_8(tmp2(14646).UserProfileEditFormLabelBadges, obj9);
      const obj10 = { style: tmp.content, "aria-hidden": true, children: null };
      if (null != substr1) {
        let mapped1 = substr1.map((badge_id) => {
          value = closure_4.get(badge_id.badge_id);
          if (null != value) {
            const obj2 = { style: closure_0.badge, source: null };
            const obj3 = { uri: value };
            obj2.source = obj3;
            let tmp6 = React6(hasOwnProperty, obj2, badge_id.badge_id);
          } else {
            const obj = { badge: badge_id, size: 32, style: closure_0.badge };
            tmp6 = React6(BadgeCatalogIconDefault, obj, badge_id.badge_id);
          }
          return tmp6;
        });
      } else {
        mapped1 = substr.map((id) => {
          const obj = { style: closure_0.badge, source: null };
          const obj2 = { uri: BadgeUtils.getProfileBadgeIconUrl(id) };
          obj.source = obj2;
          return React6(hasOwnProperty, obj, id.id);
        });
      }
      const items3 = [mapped1, ];
      let tmp15Result = diff > 0;
      if (tmp15Result) {
        const obj11 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.overflowCount, children: null };
        const _HermesInternal = HermesInternal;
        obj11.children = "+" + diff;
        tmp15Result = tmp15(tmp2(4570).Text, obj11);
      }
      items3[1] = tmp15Result;
      obj10.children = items3;
      obj8.content = closure_9(closure_6, obj10);
      let tmp20;
      if (mapped.length > 0) {
        const obj12 = { text: formatToPlainStringResult };
        tmp20 = obj12;
      }
      obj8.accessibilityValue = tmp20;
      obj8.onPress = callback;
      return closure_8(tmp2(14646).UserProfileEditFormButton, obj8);
    }
  } else {
    return null;
  }
  const tmp2Result = require("useSelectedDismissibleContent");
};
