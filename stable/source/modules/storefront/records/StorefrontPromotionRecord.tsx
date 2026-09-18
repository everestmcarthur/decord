// Module ID: 8794
// Function ID: 8795
// Name: StorefrontPromotionRecord
// Dependencies: [32, 1386, 2]

// Module 8794 (StorefrontPromotionRecord)
import _slicedToArray from "module_32" /* 32 */;
import Record from "Record" /* 1386 */;

function parseSkuIds(sku_ids) {
  if (null == sku_ids) {
    return null;
  } else {
    const obj = {};
    const _Object = Object;
    const entries = Object.entries(sku_ids);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp9 = _slicedToArray(tmp6, 2);
      let obj2 = { priceTiers: tmp9[1].price_tiers };
      obj[tmp9[0]] = obj2;
      continue;
    }
    return obj;
  }
}
const prototype = function StorefrontPromotionRecord(arg0) {
  const tmp = new prototype(new.target, new.target);
  ({ id: tmp.id, applicationId: tmp.applicationId, name: tmp.name, displayName: tmp.displayName, rewardType: tmp.rewardType, rewardStatus: tmp.rewardStatus, rewardConfig: tmp.rewardConfig, skuIds: tmp.skuIds, appliesToAllSkus: tmp.appliesToAllSkus, includeBundles: tmp.includeBundles, startsAt: tmp.startsAt, endsAt: tmp.endsAt, tenantMetadata: tmp.tenantMetadata } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["createFromServer"] = function createFromServer(display_name) {
  ({ id, application_id, name } = display_name);
  if (name == null) {
    name = null;
  }
  display_name = display_name.display_name;
  if (display_name == null) {
    display_name = null;
  }
  ({ reward_type, reward_status } = display_name);
  if (reward_status == null) {
    reward_status = null;
  }
  let tmp10 = null;
  if (null != display_name.reward_config) {
    const reward_config = display_name.reward_config;
    let tmp11 = null;
    if (null != reward_config) {
      let tmp12 = null;
      if (null != reward_config.discount) {
        const obj = { id: reward_config.discount.id, type: reward_config.discount.type, amount: reward_config.discount.amount, fiatEnabled: reward_config.discount.fiat_enabled, orbsEnabled: reward_config.discount.orbs_enabled };
        tmp12 = obj;
      }
      const obj2 = { discount: tmp12 };
      tmp11 = obj2;
    }
    tmp10 = tmp11;
  }
  let date = null;
  ({ applies_to_all_skus, include_bundles } = display_name);
  if (null != display_name.starts_at) {
    let _Date = Date;
    date = new Date(display_name.starts_at);
  }
  let date1 = null;
  if (null != display_name.ends_at) {
    _Date = new.target;
    const _Date2 = Date;
    date1 = new Date(display_name.ends_at);
  }
  let tmp22 = null;
  if (null != display_name.tenant_metadata) {
    const tenant_metadata = display_name.tenant_metadata;
    if (null == tenant_metadata.collectibles) {
      const obj3 = { collectibles: _Date };
      tmp22 = obj3;
    } else {
      const collectibles = tenant_metadata.collectibles;
      const reward = collectibles.reward;
      let nagbar;
      if (reward != null) {
        const storefront = reward.storefront;
        if (storefront != null) {
          nagbar = storefront.nagbar;
        }
      }
      const reward2 = collectibles.reward;
      let offer_notice;
      if (reward2 != null) {
        const checkout = reward2.checkout;
        if (checkout != null) {
          offer_notice = checkout.offer_notice;
        }
      }
      const reward3 = collectibles.reward;
      let override_title;
      if (reward3 != null) {
        const collected = reward3.collected;
        if (collected != null) {
          override_title = collected.override_title;
        }
      }
      let tmp26;
      if (null != override_title) {
        if ("" !== override_title) {
          tmp26 = override_title;
        }
      }
      const reward4 = collectibles.reward;
      let flavor;
      if (reward4 != null) {
        flavor = reward4.flavor;
      }
      if (null == nagbar) {
        if (null == offer_notice) {
          let obj4 = {};
        }
      }
      let tmp28;
      if (null != nagbar) {
        const header_text = nagbar.header_text;
        const obj5 = { headerText: header_text, cta: null, helpCenterId: null, icon: null };
        let tmp29;
        if (null != nagbar.cta) {
          const text = nagbar.cta.text;
          const obj6 = { text };
          tmp29 = obj6;
        }
        obj5.cta = tmp29;
        const help_center_id = nagbar.help_center_id;
        obj5.helpCenterId = help_center_id;
        const icon = nagbar.icon;
        const obj7 = { nagbar: null };
        obj5.icon = icon;
        obj7.nagbar = obj5;
        tmp28 = obj7;
      }
      const obj8 = { storefront: tmp28, checkout: null, collected: null, flavor: null };
      let tmp30;
      if (null != offer_notice) {
        const icon2 = offer_notice.icon;
        const obj9 = { icon: icon2, text: null };
        const text2 = offer_notice.text;
        const obj10 = { offerNotice: null };
        obj9.text = text2;
        obj10.offerNotice = obj9;
        tmp30 = obj10;
      }
      obj8.checkout = tmp30;
      let tmp31;
      if (null != tmp26) {
        const obj11 = { overrideTitle: tmp26 };
        tmp31 = obj11;
      }
      obj8.collected = tmp31;
      obj4 = { reward: null };
      obj8.flavor = flavor;
      obj4.reward = obj8;
    }
  }
  if (typeof prototype === "function") {
    const tmp36 = new prototype(tmp16, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp, _Date2, _Date, tmp8, new.target, id, application_id, name, display_name, reward_type, reward_status);
    tmp36.id = id;
    tmp36.applicationId = application_id;
    tmp36.name = name;
    tmp36.displayName = display_name;
    tmp36.rewardType = reward_type;
    tmp36.rewardStatus = reward_status;
    tmp36.rewardConfig = tmp10;
    tmp36.skuIds = tmp13;
    tmp36.appliesToAllSkus = applies_to_all_skus;
    tmp36.includeBundles = include_bundles;
    tmp36.startsAt = date;
    tmp36.endsAt = date1;
    tmp36.tenantMetadata = tmp22;
    return tmp36;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp13 = parseSkuIds(display_name.sku_ids);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/records/StorefrontPromotionRecord.tsx");

export default prototype;
