// Module ID: 11741
// Function ID: 11742
// Name: IosAttributionEligibility
// Dependencies: [11742, 1364, 7933, 11744, 2]
// Exports: getIosAttributionClickFramework, isCampaignIosAttributionEnabled, isIosAttributionEligible

// Module 11741 (IosAttributionEligibility)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import QuestDataUtils from "QuestDataUtils" /* 7933 */;
import apexExperiment from "apexExperiment" /* 11742 */;
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
    enabled = tmp(1364).isIOS();
    const tmpResult = tmp(1364);
  }
  let activeIosAttributionFramework = null;
  if (enabled) {
    activeIosAttributionFramework = null;
    if (arg0) {
      const adContext = tmp(7933).getAdContext(sourceQuestContent, adContentId);
      let prop;
      if (adContext != null) {
        prop = adContext.is_campaign_ios_attribution_enabled;
      }
      activeIosAttributionFramework = null;
      if (true === prop) {
        activeIosAttributionFramework = tmp(11744).getActiveIosAttributionFramework();
        const tmpResult4 = tmp(11744);
      }
      const tmpResult3 = tmp(7933);
    }
  }
  return activeIosAttributionFramework;
};
