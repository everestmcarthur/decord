// Module ID: 15105
// Function ID: 15106
// Name: QuestCustomAppStoreOverlayUtils
// Dependencies: [11622, 11629, 11631, 2]
// Exports: canOpenCustomAppStoreOverlayFromCta, prefetchCustomAppStoreOverlayContent

// Module 15105 (QuestCustomAppStoreOverlayUtils)
import apexExperiment from "apexExperiment" /* 11622 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11629 */;
import size from "module_2" /* 2 */;

function fetchCustomAppStoreOverlayContent(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    enabled = null != tmp(11629).getInlineStoreParamsFromCta(cta);
    const tmpResult = tmp(11629);
  }
  let inlineStoreParamsFromCta = null;
  if (enabled) {
    inlineStoreParamsFromCta = tmp(11629).getInlineStoreParamsFromCta(cta);
    const tmpResult4 = tmp(11629);
  }
  if (null == inlineStoreParamsFromCta) {
    let resolved = Promise.resolve(null);
  } else {
    const tmpResult5 = tmp(11631);
    let url = tmp(11629).getDirectAppStoreLinkFromCta(cta);
    if (url == null) {
      url = cta.url;
    }
    resolved = tmpResult5.getAppStoreOverlayContent(inlineStoreParamsFromCta, url);
    const tmpResult6 = tmp(11629);
  }
  return resolved;
}
const result = size.fileFinishedImporting("modules/quests/utils/QuestCustomAppStoreOverlayUtils.native.tsx");

export const canOpenCustomAppStoreOverlayFromCta = function canOpenCustomAppStoreOverlayFromCta(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    enabled = null != QuestPlatformUtils.getInlineStoreParamsFromCta(cta);
    const tmpResult = QuestPlatformUtils;
  }
  return enabled;
};
export { fetchCustomAppStoreOverlayContent };
export const prefetchCustomAppStoreOverlayContent = function prefetchCustomAppStoreOverlayContent(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    enabled = null != QuestPlatformUtils.getInlineStoreParamsFromCta(cta);
    const tmpResult = QuestPlatformUtils;
  }
  if (enabled) {
    fetchCustomAppStoreOverlayContent(cta).catch(() => {

    });
    const promise = fetchCustomAppStoreOverlayContent(cta);
  }
};
