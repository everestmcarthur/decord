// Module ID: 8758
// Function ID: 8759
// Name: useGameProfileOpenCritic
// Dependencies: [8759, 1114, 8760, 8761, 8762, 8763, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8758 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 8759 */;
import _modDef8760 from "module_8760" /* 8760 */;
import _modDef8761 from "module_8761" /* 8761 */;
import _modDef8762 from "module_8762" /* 8762 */;
import _modDef8763 from "module_8763" /* 8763 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1114).intl;
    return intl4.string(tmp(1114).t.aZej2g);
  } else if (tmp(8759).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1114).intl;
    return intl3.string(tmp(1114).t.MLxnSg);
  } else if (tmp(8759).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t["3f19KA"]);
  } else if (tmp(8759).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8760;
  } else if (tmp(8759).OpenCriticTier.STRONG === tier) {
    return _modDef8761;
  } else if (tmp(8759).OpenCriticTier.FAIR === tier) {
    return _modDef8762;
  } else if (tmp(8759).OpenCriticTier.WEAK === tier) {
    return _modDef8763;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8759).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8759).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8759).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
