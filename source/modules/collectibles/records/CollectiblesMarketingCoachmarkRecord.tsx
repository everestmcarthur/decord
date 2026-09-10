// Module ID: 7619
// Function ID: 7620
// Name: CollectiblesMarketingCoachmarkRecord
// Dependencies: [7617, 2]

// Module 7619 (CollectiblesMarketingCoachmarkRecord)
import CollectiblesMarketingType from "CollectiblesMarketingType" /* 7617 */;
import size from "module_2" /* 2 */;

const prototype = function CollectiblesMarketingCoachmarkRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = CollectiblesMarketingType.CollectiblesMarketingType.COACHMARK;
  ({ title: tmp.title, body: tmp.body, assetDark: tmp.assetDark, assetLight: tmp.assetLight, version: tmp.version, refTargetBackground: tmp.refTargetBackground, badgeIcon: tmp.badgeIcon, badgeText: tmp.badgeText, buttonLabel: tmp.buttonLabel } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  ({ asset_dark: obj.assetDark, asset_light: obj.assetLight, ref_target_background: obj.refTargetBackground, badge_icon: obj.badgeIcon, badge_text: obj.badgeText, button_label: obj.buttonLabel } = arg0);
  if (typeof prototype === "function") {
    const obj2 = Object.create(prototype.prototype);
    obj2.type = CollectiblesMarketingType.CollectiblesMarketingType.COACHMARK;
    ({ title: tmp2.title, body: tmp2.body, assetDark: tmp2.assetDark, assetLight: tmp2.assetLight, version: tmp2.version, refTargetBackground: tmp2.refTargetBackground, badgeIcon: tmp2.badgeIcon, badgeText: tmp2.badgeText, buttonLabel: tmp2.buttonLabel } = obj);
    return obj2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingCoachmarkRecord.tsx");

export const CollectiblesMarketingCoachmarkRecord = prototype;
