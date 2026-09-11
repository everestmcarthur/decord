// Module ID: 8816
// Function ID: 8817
// Name: useGameProfileOpenCritic
// Dependencies: [8817, 1114, 8818, 8819, 8820, 8821, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8816 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 8817 */;
import _modDef8818 from "module_8818" /* 8818 */;
import _modDef8819 from "module_8819" /* 8819 */;
import _modDef8820 from "module_8820" /* 8820 */;
import _modDef8821 from "module_8821" /* 8821 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1114).intl;
    return intl4.string(tmp(1114).t.aZej2g);
  } else if (tmp(8817).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1114).intl;
    return intl3.string(tmp(1114).t.MLxnSg);
  } else if (tmp(8817).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t["3f19KA"]);
  } else if (tmp(8817).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8818;
  } else if (tmp(8817).OpenCriticTier.STRONG === tier) {
    return _modDef8819;
  } else if (tmp(8817).OpenCriticTier.FAIR === tier) {
    return _modDef8820;
  } else if (tmp(8817).OpenCriticTier.WEAK === tier) {
    return _modDef8821;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8817).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8817).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8817).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
