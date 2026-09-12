// Module ID: 11621
// Function ID: 11622
// Name: IosAttributionEligibility
// Dependencies: [11622, 1150, 7801, 11624, 2]
// Exports: getIosAttributionClickFramework, isCampaignIosAttributionEnabled, isIosAttributionEligible

// Module 11621 (IosAttributionEligibility)
import PlatformUtils from "PlatformUtils" /* 1150 */;
import QuestDataUtils from "QuestDataUtils" /* 7801 */;
import apexExperiment from "apexExperiment" /* 11622 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionEligibility.tsx");

export const isIosAttributionEligible = function isIosAttributionEligible() {
  const IosAttributionFeatureGate = apexExperiment.IosAttributionFeatureGate;
  let enabled = IosAttributionFeatureGate.getConfig({ location: "quest_ios_attribution" }).enabled;
  if (enabled) {
    enabled = PlatformUtils.isIOS();
    const tmpResult = PlatformUtils;
  }
  return enabled;
};
export const isCampaignIosAttributionEnabled = function isCampaignIosAttributionEnabled(sourceQuestContent, item) {
  const adContext = QuestDataUtils.getAdContext(sourceQuestContent, item);
  let prop;
  if (adContext != null) {
    prop = adContext.is_campaign_ios_attribution_enabled;
  }
  return true === prop;
};
export const getIosAttributionClickFramework = function getIosAttributionClickFramework(arg0, sourceQuestContent, adContentId) {
  const IosAttributionFeatureGate = apexExperiment.IosAttributionFeatureGate;
  let enabled = IosAttributionFeatureGate.getConfig({ location: "quest_ios_attribution" }).enabled;
  if (enabled) {
    enabled = tmp(1150).isIOS();
    const tmpResult = tmp(1150);
  }
  let activeIosAttributionFramework = null;
  if (enabled) {
    activeIosAttributionFramework = null;
    if (arg0) {
      const adContext = tmp(7801).getAdContext(sourceQuestContent, adContentId);
      let prop;
      if (adContext != null) {
        prop = adContext.is_campaign_ios_attribution_enabled;
      }
      activeIosAttributionFramework = null;
      if (true === prop) {
        activeIosAttributionFramework = tmp(11624).getActiveIosAttributionFramework();
        const tmpResult4 = tmp(11624);
      }
      const tmpResult3 = tmp(7801);
    }
  }
  return activeIosAttributionFramework;
};
