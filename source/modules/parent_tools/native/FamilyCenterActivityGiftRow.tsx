// Module ID: 14934
// Function ID: 14935
// Name: FamilyCenterActivityGiftRow
// Dependencies: [19, 17, 21, 4574, 576, 8199, 14922, 14931, 14933, 4418, 14932, 4570, 2]
// Exports: default

// Module 14934 (FamilyCenterActivityGiftRow)
import nativeDefault from "native" /* 576 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8199 */;
import useSelectedTeenUser from "useSelectedTeenUser" /* 14922 */;
import FamilyCenterActivityPurchaseRowUtils from "FamilyCenterActivityPurchaseRowUtils" /* 14931 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4574);
let obj2 = { container: { display: "flex", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 }, textContainer: { display: "flex", flexDirection: "column", flexShrink: 1 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityGiftRow.tsx");

export default function FamilyCenterActivityGiftRow(arg0) {
  ({ skuId, subscriptionPlanId } = arg0);
  ({ price, gifterUserId, claimed, offeredAt, claimedAt } = arg0);
  const tmp = closure_6();
  let product = useCollectiblesDataDefault(skuId).product;
  const teenUserForId = useSelectedTeenUser.useTeenUserForId(gifterUserId);
  let tmp7 = product;
  if (product == null) {
    tmp7 = null;
  }
  const purchaseDisplayInfo = FamilyCenterActivityPurchaseRowUtils.getPurchaseDisplayInfo(tmp7, subscriptionPlanId);
  ({ displayName, isSubscription } = purchaseDisplayInfo);
  if (null != skuId) {
    if (!isSubscription) {
      if (null == product) {
        return null;
      }
    }
  }
  if (null == displayName) {
    return null;
  } else {
    const obj3 = { claimed, price, gifterName: null, offeredAt: null, claimedAt: null };
    let name = null;
    if (null != teenUserForId) {
      name = tmp2(4418).getName(teenUserForId);
      const tmp2Result = tmp2(4418);
    }
    obj3.gifterName = name;
    obj3.offeredAt = offeredAt;
    obj3.claimedAt = claimedAt;
    const obj4 = { style: tmp.container, children: null };
    const giftSubtext = tmp5(14933).getGiftSubtext(obj3);
    const obj5 = { displayName, product: null, isSubscription: null, subscriptionPlanId: null };
    const tmp5Result = tmp5(14933);
    if (product == null) {
      product = null;
    }
    obj5.product = product;
    obj5.isSubscription = isSubscription;
    obj5.subscriptionPlanId = subscriptionPlanId;
    const items = [React4(tmp2(14932), obj5), ];
    const obj6 = { style: tmp.textContainer, children: null };
    const obj7 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: displayName };
    const items1 = [React4(tmp5(4570).Text, obj7), ];
    const obj8 = { variant: "text-xs/medium", color: "text-muted", children: giftSubtext };
    items1[1] = React4(tmp5(4570).Text, obj8);
    obj6.children = items1;
    items[1] = hasOwnProperty(View, obj6);
    obj4.children = items;
    return hasOwnProperty(View, obj4);
  }
};
