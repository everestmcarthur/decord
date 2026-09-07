// Module ID: 15021
// Function ID: 15022
// Name: fetchCustomAppStoreOverlayContent
// Dependencies: [11494, 11501, 11503, 2]
// Exports: canOpenCustomAppStoreOverlayFromCta, prefetchCustomAppStoreOverlayContent

// Module 15021 (fetchCustomAppStoreOverlayContent)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 11494 */;
import supportedConsoles from "supportedConsoles" /* 11501 */;

function fetchCustomAppStoreOverlayContent(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    let tmpResult = tmp(11501);
    enabled = null != tmpResult.getInlineStoreParamsFromCta(cta);
  }
  let inlineStoreParamsFromCta = null;
  if (enabled) {
    tmpResult = tmp(11501);
    inlineStoreParamsFromCta = tmpResult.getInlineStoreParamsFromCta(cta);
  }
  if (null == inlineStoreParamsFromCta) {
    let resolved = Promise.resolve(null);
  } else {
    const tmpResult1 = tmp(11503);
    let url = tmp(11501).getDirectAppStoreLinkFromCta(cta);
    if (url == null) {
      url = cta.url;
    }
    resolved = tmpResult1.getAppStoreOverlayContent(inlineStoreParamsFromCta, url);
    const tmpResult2 = tmp(11501);
  }
  return resolved;
}
const result = set.fileFinishedImporting("modules/quests/utils/QuestCustomAppStoreOverlayUtils.native.tsx");

export const canOpenCustomAppStoreOverlayFromCta = function canOpenCustomAppStoreOverlayFromCta(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    enabled = null != supportedConsoles.getInlineStoreParamsFromCta(cta);
    const tmpResult = supportedConsoles;
  }
  return enabled;
};
export { fetchCustomAppStoreOverlayContent };
export const prefetchCustomAppStoreOverlayContent = function prefetchCustomAppStoreOverlayContent(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    enabled = null != supportedConsoles.getInlineStoreParamsFromCta(cta);
    const tmpResult = supportedConsoles;
  }
  if (enabled) {
    fetchCustomAppStoreOverlayContent(cta).catch(() => {

    });
    const promise = fetchCustomAppStoreOverlayContent(cta);
  }
};
