// Module ID: 8879
// Function ID: 8880
// Name: useGameProfileOpenCritic
// Dependencies: [8880, 1115, 8881, 8882, 8883, 8884, 2]
// Exports: getOpenCriticCircleRatingColor, getOpenCriticTierImage, getOpenCriticTierText

// Module 8879 (useGameProfileOpenCritic)
import OpenCriticTier from "OpenCriticTier" /* 8880 */;
import _modDef8881 from "module_8881" /* 8881 */;
import _modDef8882 from "module_8882" /* 8882 */;
import _modDef8883 from "module_8883" /* 8883 */;
import _modDef8884 from "module_8884" /* 8884 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1115).intl;
    return intl4.string(tmp(1115).t.aZej2g);
  } else if (tmp(8880).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1115).intl;
    return intl3.string(tmp(1115).t.MLxnSg);
  } else if (tmp(8880).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1115).intl;
    return intl2.string(tmp(1115).t["3f19KA"]);
  } else if (tmp(8880).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1115).intl;
    return intl.string(tmp(1115).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8881;
  } else if (tmp(8880).OpenCriticTier.STRONG === tier) {
    return _modDef8882;
  } else if (tmp(8880).OpenCriticTier.FAIR === tier) {
    return _modDef8883;
  } else if (tmp(8880).OpenCriticTier.WEAK === tier) {
    return _modDef8884;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8880).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8880).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8880).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
