// Module ID: 13424
// Function ID: 13425
// Name: PremiumAccountCredit
// Dependencies: [19, 17, 7446, 1074, 21, 4605, 576, 4262, 1114, 3074, 7224, 4601, 504, 12, 2]
// Exports: default

// Module 13424 (PremiumAccountCredit)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PremiumUtils from "PremiumUtils" /* 4262 */;
import Text_Text from "Text/Text" /* 4601 */;
import GameIcon from "GameIcon" /* 7224 */;
import noop from "module_19" /* 19 */;
import EntitlementStore from "EntitlementStore" /* 7446 */;

const PremiumUtilsDefault = PremiumUtils;
const GameIconDefault = GameIcon;

require = fn;
function AccountCreditTier(arg0) {
  ({ planId, currentSubscription } = arg0);
  ({ months, shouldAddDivider, unconsumedFractionalPremiumUnits, hasPremiumGroup } = arg0);
  const tmp = closure_8();
  const obj = PremiumUtils;
  const result = obj.castPremiumSubscriptionAsSkuId(PremiumUtilsDefault.getSkuIdForPlan(planId));
  const tierDisplayNameByPlanId = PremiumUtilsDefault.getTierDisplayNameByPlanId(planId);
  if (hasPremiumGroup) {
    const intl3 = tmp2(1114).intl;
    let stringResult = intl3.string(tmp4(3074)["5asczk"]);
  } else {
    if (null != currentSubscription) {
      if (currentSubscription.planId === planId) {
        if (currentSubscription.status === SubscriptionStatusTypes.PAUSED) {
          if (null != currentSubscription.pauseEndsAt) {
            const _Date2 = Date;
            let date = new Date(currentSubscription.pauseEndsAt);
          }
          let num = tmp2(4262).extendDateWithUnconsumedFractionalPremium(date, unconsumedFractionalPremiumUnits);
          const intl2 = tmp2(1114).intl;
          if (num == null) {
            num = 0;
          }
          const obj4 = { date: num };
          stringResult = intl2.formatToPlainString(tmp2(1114).t["5CNRRA"], obj4);
          const tmp2Result = tmp2(4262);
        }
        const _Date = Date;
        date = new Date(currentSubscription.currentPeriodEnd);
      }
    }
    const intl = tmp2(1114).intl;
    const obj5 = { planName: tierDisplayNameByPlanId };
    stringResult = intl.formatToPlainString(tmp2(1114).t.eNXZ5O, obj5);
  }
  const items = [tmp.creditItem, ];
  let divider = null;
  if (shouldAddDivider) {
    divider = tmp.divider;
  }
  const obj6 = { style: items, children: null };
  items[1] = divider;
  const obj7 = { size: null, skuId: null };
  obj7.size = GameIcon.GameIconSizes.SMALL;
  obj7.skuId = result;
  const items1 = [timestampProducer(GameIconDefault, obj7), , ];
  const obj8 = { style: tmp.textContainer, children: null };
  const obj9 = { style: tmp.headerText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl4 = tmp2(1114).intl;
  obj9.children = intl4.format(util.t.LzobT9, { planName: tierDisplayNameByPlanId });
  const items2 = [timestampProducer(Text_Text.Text, obj9), ];
  let tmp21Result = !tmp17;
  if (!(null != currentSubscription && currentSubscription.isPurchasedExternally)) {
    const obj10 = { style: tmp.subText, variant: "text-xs/medium", color: "text-default", children: stringResult };
    tmp21Result = tmp21(tmp2(4601).Text, obj10);
  }
  items2[1] = tmp21Result;
  obj8.children = items2;
  items1[1] = React5(View, obj8);
  const obj11 = { style: tmp.timeText, variant: "text-md/medium", color: "text-default", children: null };
  const intl5 = tmp2(1114).intl;
  obj11.children = intl5.format(util.t["ess/xl"], { count: months });
  items1[2] = timestampProducer(Text_Text.Text, obj11);
  obj6.children = items1;
  return React5(View, obj6);
}
const View = fn(17).View;
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4605);
let obj2 = { title: { marginBottom: 12 }, creditList: { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, creditItem: { flexDirection: "row", alignItems: "center", padding: 16 }, textContainer: { marginLeft: 16, marginRight: 16, flexDirection: "column", flex: 1 }, headerText: { lineHeight: 20 }, subText: { lineHeight: 16 }, timeText: { lineHeight: 20, alignSelf: "flex-start" }, divider: null, creditDescription: null };
let obj3 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.creditDescription = { marginTop: 8 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumAccountCredit.tsx");

export default function PremiumAccountCredit(currentSubscription) {
  currentSubscription = currentSubscription.currentSubscription;
  ({ entitlements, hasPremiumGroup: importDefault } = currentSubscription);
  c3 = undefined;
  ({ style, creditListContainerStyle } = currentSubscription);
  let tmp = closure_8();
  const items = [EntitlementStore];
  dependencyMap = currentSubscription(504).useStateFromStoresArray(items, () => unactivatedFractionalPremiumUnits.getUnactivatedFractionalPremiumUnits());
  if (null != entitlements) {
    if (obj8.hasAccountCredit(entitlements)) {
      const _Array = Array;
      const tmp11Result = tmp11(12);
      const found = tmp11(12)(Array.from(entitlements)).filter((subscriptionPlanId) => {
        let tmp = null != subscriptionPlanId.subscriptionPlanId;
        if (tmp) {
          tmp = null != subscriptionPlanId.parentId;
        }
        if (tmp) {
          tmp = !subscriptionPlanId.consumed;
        }
        return tmp;
      });
      const tmp11ResultResult = tmp11(12)(Array.from(entitlements));
      const valueResult = found.groupBy((subscriptionPlanId) => subscriptionPlanId.subscriptionPlanId).value();
      c3 = valueResult;
      const obj2 = { style, children: null };
      const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
      const intl = tmp2(1114).intl;
      obj3.children = intl.string(tmp2(1114).t.YugZY0);
      const items1 = [closure_6(tmp2(4601).Text, obj3), , , ];
      const obj4 = { style: null, children: null };
      const items2 = [tmp.creditList, creditListContainerStyle];
      obj4.style = items2;
      const _Object = Object;
      let keys = Object.keys(valueResult);
      obj4.children = keys.map((planId) => {
        const keys = Object.keys(_undefined);
        return timestampProducer(AccountCreditTier, { planId, months: _undefined[planId].length, currentSubscription, shouldAddDivider: planId !== keys[Object.keys(Object, _undefined).length - 1], unconsumedFractionalPremiumUnits, hasPremiumGroup }, planId);
      });
      items1[1] = closure_6(c3, obj4);
      const obj5 = { style: tmp.creditDescription, variant: "text-sm/medium", children: null };
      const intl2 = tmp2(1114).intl;
      obj5.children = intl2.string(tmp2(1114).t.kNEjGm);
      items1[2] = closure_6(tmp2(4601).Text, obj5);
      let tmp9Result = null;
      if (null != currentSubscription) {
        tmp9Result = null;
        if (currentSubscription.isPurchasedExternally) {
          const obj6 = { style: tmp.creditDescription, variant: "text-sm/medium", children: null };
          const intl3 = tmp2(1114).intl;
          obj6.children = intl3.string(tmp2(1114).t.azRP0E);
          tmp9Result = closure_6(tmp2(4601).Text, obj6);
        }
      }
      items1[3] = tmp9Result;
      obj2.children = items1;
      return closure_7(c3, obj2);
    }
    obj8 = PremiumUtilsDefault;
    tmp11 = importDefault;
  }
  return null;
};
