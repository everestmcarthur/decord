// Module ID: 8853
// Function ID: 8854
// Name: useGameProfileOpenCritic
// Dependencies: [8854, 1115, 8855, 8856, 8857, 8858, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8853 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 8854 */;
import _modDef8855 from "module_8855" /* 8855 */;
import _modDef8856 from "module_8856" /* 8856 */;
import _modDef8857 from "module_8857" /* 8857 */;
import _modDef8858 from "module_8858" /* 8858 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1115).intl;
    return intl4.string(tmp(1115).t.aZej2g);
  } else if (tmp(8854).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.MLxnSg);
  } else if (tmp(8854).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["3f19KA"]);
  } else if (tmp(8854).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8855;
  } else if (tmp(8854).OpenCriticTier.STRONG === tier) {
    return _modDef8856;
  } else if (tmp(8854).OpenCriticTier.FAIR === tier) {
    return _modDef8857;
  } else if (tmp(8854).OpenCriticTier.WEAK === tier) {
    return _modDef8858;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8854).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8854).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8854).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
