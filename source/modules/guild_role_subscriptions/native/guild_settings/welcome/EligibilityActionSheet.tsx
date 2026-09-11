// Module ID: 17773
// Function ID: 17774
// Name: EligibilityActionSheet
// Dependencies: [19, 1074, 21, 4607, 4574, 9155, 7456, 17774, 7224, 4603, 1114, 17778, 2]
// Exports: default

// Module 17773 (EligibilityActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems" /* 17774 */;
import EligibilityChecklistDefault from "EligibilityChecklist" /* 17778 */;
import noop from "module_19" /* 19 */;

const require = fn;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const EligibilityActionSheet = "EligibilityActionSheet";
const createStyles = fn(4607);
let closure_8 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 0 }, title: { marginHorizontal: 24, marginTop: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx");

export default function EligibilityActionSheet(onRequireModeratorMFAClick) {
  onRequireModeratorMFAClick = onRequireModeratorMFAClick.onRequireModeratorMFAClick;
  const tmp = closure_8();
  const items = [onRequireModeratorMFAClick];
  const memo = noop.useMemo(() => ({
    actions: {
      onEnableMFAClick() {
        closure_1_1(4574).hideActionSheet(closure_1_7);
        const obj = closure_1_1(4574);
        closure_1_1(9155).close();
        const obj2 = closure_1_1(9155);
        onRequireModeratorMFAClick(7456).openUserSettings({ screen: constants.ACCOUNT });
      },
      onRequireModeratorMFAClick() {
        ActionSheetActionCreatorsDefault.hideActionSheet(EligibilityActionSheet);
        onRequireModeratorMFAClick();
      }
    },
    sortedByIneligible: true
  }), items);
  let obj = { startExpanded: true, children: null };
  let obj2 = { style: tmp.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = onRequireModeratorMFAClick(1114).intl;
  obj2.children = intl.string(onRequireModeratorMFAClick(1114).t["3s47iN"]);
  const items1 = [closure_5(onRequireModeratorMFAClick(4603).Heading, obj2), ];
  const tmp3 = useCreatorMonetizationEligibilityItemsDefault(onRequireModeratorMFAClick.eligibility, memo);
  items1[1] = closure_5(EligibilityChecklistDefault, { style: tmp.container, items: useCreatorMonetizationEligibilityItemsDefault(onRequireModeratorMFAClick.eligibility, memo) });
  obj.children = items1;
  return closure_6(onRequireModeratorMFAClick(7224).BottomSheet, obj);
};
export const ELIGIBILITY_ACTION_SHEET_KEY = "EligibilityActionSheet";
